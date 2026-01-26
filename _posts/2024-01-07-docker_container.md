---
title: Docker Container 옵션 정리
author: syboosyboo
date: 2024-01-07 18:05:00 +0900
categories: [Deploy]
tags: [Docker]
pin: true
math: true
mermaid: true
---

![도커 이미지](../assets/img/docker/docker.png)

## Container 관련 명령어 정리
- docker ps, docker container ls
  > 실행 중인 컨테이너 목록을 표시한다. <br/>
  ![docker ps.png](../assets/img/docker/container/docker%20ps.png)
- docker stop, docker container stop 
  > 실행 중인 컨테이너를 정지한다. <br/>
  ![docker stop.png](../assets/img/docker/container/docker%20stop.png)
- docker start, docker container start 
  > 정지된 컨테이너를 시작한다 <br/>
  ![docker start.png](../assets/img/docker/container/docker%20start.png)
- docker restart, docker container restart 
  > 컨테이너를 재시작한다. <br/>
  ![docker restart.png](../assets/img/docker/container/docker%20restart.png)
- docker rm, docker container rm
  > 하나 이상의 컨테이너를 삭제한다. <br/>
  ![docker rm.png](../assets/img/docker/container/docker%20rm.png)
- docker exec 
  > 실행 중인 컨테이너에서 명령어를 실행한다. <br/>
  ![docker exec.png](../assets/img/docker/container/docker%20exec.png)
- docker exec -it /bin/bash
  > 대화형 모드로 실행중인 컨테이너에 연결한다. <br/>
  > OCI runtime exec failed: exec failed: container_linux.go:349: starting container process caused "exec: \"/bin/bash\": stat /bin/bash: no such file or directory": unknown <br/>
  > 해당 오류가 뜨면 /bin/bash를 지원하지 않으니 /bin/sh을 이용하면 된다. <br/>
  ![docker exec-it.png](../assets/img/docker/container/docker%20exec-it.png)
- docker logs
  > 컨테이너의 로그를 표시한다. <br/>
  ![docker logs.png](../assets/img/docker/container/docker%20logs.png)
- docker inspect
  > 컨테이너에 대한 세부 정보를 JSON 형식으로 출력한다. <br/>
  ![docker inspect.png](../assets/img/docker/container/docker%20inspect.png)
- docker top
  > 컨테이너에서 실행중니 프로세스 목록을 표시한다. <br/>
  ![docker top.png](../assets/img/docker/container/docker%20top.png)
- docker stats
  > 컨테이너의 실시간 리소스 사용량을 표시한다. <br/>
  ![docker stat.png](../assets/img/docker/container/docker%20stat.png)
- docker cp, docker container cp
  > 호스트와 컨테이너 간에 파일을 복사한다.
- docker kill, docker container kill
  > 컨테이너를 강제로 정지한다.
- docker diff, docker container diff
  > 컨테이너 파일 시스템의 파일 또는 디렉토리 변경사항을 검사한다.
- docker attach, docker container attach
  > 실행중인 컨테이너로 들어가기
- docker container run [옵션] 이미지명:[태그명]
  > 도커 컨테이너를 실행하기 위한 명령어 <br/>
  > -  -d : 백그라운드로 실행한다.<br/>
  > -  -p : 외부포트:컨테이넘포트를 지정한다. 지정하지 않으면 임의로 할당된다.<br/>
  > -  -t : 유닉스 터미널 연결 활성화 <br/>
  > -  -l : 컨테이너 쪽 STDOUT과 연결 유지.<br/>
  > -  -rm : 컨테이너 종료 시 컨테이너 파기.<br/>
  > -  -name : 컨테이너 이름을 붙일 수 있다. 부여하지 않으면 임의로 생긴다..<br/>
  > -  -it :실행중인 컨테이너의 터미널을 이용할 수 있다. 
- docker container prune
  > 현재 실행중이지 않은 모든 컨테이너 삭제
  
---
##  # 출처
- [나무위키](https://namu.wiki/)
- [도커 DOC](https://docs.docker.com/engine/reference/run/)
