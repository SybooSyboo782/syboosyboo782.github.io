---
title: Docker Run 옵션 정리
author: syboosyboo
date: 2023-12-23 18:05:00 +0900
categories: [Deploy]
tags: [Docker]
pin: true
math: true
mermaid: true
---

![도커 이미지](../assets/img/docker/docker.png)

# 사용법

### docker run <옵션> <이미지> <명령어> <매개변수>
- -i –interactive
  > 표준 입력을 활성화 하며, 컨테이너와 연결(attach)되지 않더라도 표준 입력을 유지한다.
- -t – tty
  > TTY모드를 사용, bash를 사용하려면 이 옵션을 설정해야한다.
-  --name
  > 컨테이너 이름을 설정한다.
- -d –detach
  > 데몬모드, 컨테이너가 백그라운드로 실행된다.
- -p
  > 호스트와 컨테이너의 포트를 연결한다.(포트포워딩)
- --rm
  > 프로세스 종료시 컨테이너 자동 제거
- --restart
  > no : container를 재시작하지 않는다.(기본 옵션)

  > on-failure[:max-retries] : container가 정상적으로 종료되지 않은 경우에만 재시작시킨다.

  > always : container를 항상 재시작 시킨다.

  > continer를 stop 시키기 전까지 항상 재시작시킨다.

  > unless-stopped : container를 stop 시키기 전까지 항상 재시작시킨다.

- --privileged
  > 컨테이너 안에서 호스트의 리눅스 커널 기능을 모두 사용한다.
- -v, --volume
  > 데이터 볼륨 설정, 호스트와 컨테이너의 디렉토리를 연결하여 호스트에 바로 저장한다. 
- -u, --user
  > 컨테이너가 실행될 리눅스 사용자 계정 이름 또는 UID
-  -e, --env
  > 컨테이너 내에서 사용할 환경 변수를 설정
- --link
  > 컨테이너끼리 연결한다
-  -h, --hostname
  > 컨테이너의 호스트 이름을 설정한다.
-  -w, --workdir
  > 컨테이너 안의 프로세스가 실행될 디렉터리를 설정한다.
-  -a, --attach
  > 컨테이너에 표준입력, 표준 출력, 표준 에러를 연결한다.
-  -c, --cpu-shares
  > CPU 자원 분배 설정
-  -m, --memory
  > 메모리 한계를 설정한다.
-  --gpus
  > 컨테이너에서 호스트의 NVIDIA GPU를 사용할 수 있도록 설정한다.
-  --security-opt
  > SELinux, AppArmor 옵션을 설정한다.

---
### 출처
- [나무위키](https://namu.wiki/)
- [도커 DOC](https://docs.docker.com/engine/reference/run/)
