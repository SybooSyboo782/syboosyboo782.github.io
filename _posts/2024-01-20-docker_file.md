---
title: DockerFile 정리
author: syboosyboo
date: 2024-01-20 18:05:00 +0900
categories: [Deploy]
tags: [Docker]
pin: true
math: true
mermaid: true
---

![도커 이미지](../assets/img/docker/docker.png)



# DockerFile
- 인프라 구성을 기술한 파일
- 도커 파일은 도커 이미지를 빌드하기 위한 스크립트로, 컨테이너 환경을 정의하고 구성하는 데 사용된다. 

## 기본적인 도커 파일을 작성하는 방법
1. 베이스 이미지 선택
   - 도커 파일은 기본적으로 어떤 이미지를 기반으로 할지 정해야 한다. 
   - 예를 들어, Java 어플리케이션을 위한 베이스 이미지로 openjdk:11-jre-slim을 사용한다.
    ```dockerfile
    FROM openjdk:11-jre-slim  
    ```

2. 작업 디렉토리 설정
   - 이미지 내에서 작업할 디렉토리를 설정한다. 
   - 보통 /app과 같이 의미 있는 디렉토리를 선택한다.
    ```dockerfile
    WORKDIR /app
    ```
   
3. 애플리케이션 파일 복사
   - 실제 애플리케이션 파일들을 도커 이미지로 복사한다. 
   - 현재 디렉토리의 JAR 파일을 이미지로 복사하는 예이다.
   ```dockerfile
   COPY target/myapp.jar /app
   ```
   
4. 포트 노출
  - 애플리케이션이 사용하는 포트를 노출한다. 
  - 예를 들어, 8080번 포트를 사용하는 경우 다음과 같이 작성한다.
    ```dockerfile
    EXPOSE 8080
    ```
  
5. 실행 명령어 정의
- 컨테이너가 시작될 때 실행되어야 하는 명령어를 정의한다.
-  Java 어플리케이션의 경우 java -jar 명령어를 사용한다.
   ```dockerfile
   CMD ["java", "-jar", "myapp.jar"]
   ```

## 명령어 정리

### 베이스 이미지 지정
```dockerfile
FROM 이미지이름
```

### 명령 실행
```dockerfile
RUN echo hello \
```

### 컨테이너 실행 명령
```dockerfile
CMD /cdoe/run-app
```

### 라벨 설정 
```dockerfile
LABEL version="1.0"
```
  
### 포트 익스포트
```dockerfile
EXPOSE 8080
```

### 환경변수
```dockerfile
ENV MY_NAME="SYBOOSYBOO"
```
  
### 파일/디렉토리 추가
```dockerfile
ADD test.txt
``` 

### 파일 복사
```dockerfile
COPY test.txt
```
  
### 컨테이너 실행 명령
```dockerfile
ENTRYPOINT ["top", "-b"]
```

### 볼륨 마운트
```dockerfile
VOLUME /myvol
```  
  
### 사용자 지정
```dockerfile
USER SYBOOSYBOO
``` 
 
### 작업자 디렉토리
```dockerfile
WORKDIR /path/to/workdir
```

### DcokerFile 안의 변수
```dockerfile
ARG buildno
```

### 빌드 완료 후 실행되는 명령 
```dockerfile
ONBUILD ADD . /app/src
ONBUILD RUN /usr/local/bin/python-build --dir /app/src
```

### 시스템 콜 시그널 설정
```dockerfile
STOPSIGNAL signal
``` 
  
### 컨테이너의 헬스 체크
```dockerfile
HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
```
  
### 기본 쉘 설정
```dockerfile
SHELL ["cmd", "/S", "/C"]
```

### 주석
```dockerfile
# 주석은 이렇게 작성한다.
```

---
##  # 출처
- [나무위키](https://namu.wiki/)
- [도커 DOC](https://docs.docker.com/engine/reference/run/)
