---
title: Load Balancing - 1
author: syboosyboo
date: 2023-11-12 08:05:00 +0900
categories: [Back-End]
tags: [Load Balancing, Apache]
pin: true
math: true
mermaid: true
---

# 로드 밸런싱

## 로드 밸런싱이란?

- 로드 밸런싱은 애플리케이션을 지원하는 리소스 풀 전체에 네트워크 트래픽을 균등하게 배포하는 방법
- 최신 애플리케이션은 수백만 명의 사용자를 동시에 처리하고 정확한 텍스트, 비디오, 이미지 및 기타 데이터를 빠르고 안정적인 방식으로 각 사용자에게 반환해야 한다. 
- 이렇게 많은 양의 트래픽을 처리하기 위해 대부분의 애플리케이션에는 데이터가 중복되는 리소스 서버가 많이 있다. 
- 로드 밸런서는 사용자와 서버 그룹 사이에 위치하며 보이지 않는 촉진자 역할을 하여 모든 리소스 서버가 동일하게 사용되도록 하는 디바이스이다.

## 아파치에서 로드밸런싱을 설정하는 방법

- 아파치 웹 서버에서 로드 밸런싱을 설정하는 방법은 주로 모듈을 사용한다. 
- 아파치 웹 서버의 경우, mod_proxy와 mod_proxy_balancer 모듈을 사용하여 로드 밸런싱을 설정할 수 있다.

### [mod_proxy](https://httpd.apache.org/docs/2.4/mod/mod_proxy.html) 
- 먼저, 아파치 서버의 mod_proxy를 활성화해야 한다. 
- 이 모듈은 프록시 기능을 제공하며, 로드 밸런싱 설정에 필요하다.

### [mod_proxy_balancer](https://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html) 
- 이 모듈은 실제로 로드 밸런싱 기능을 제공한다.

### [가상 호스트(Virtual Host)](https://httpd.apache.org/docs/2.4/vhosts/)
- 로드 밸런싱을 적용할 도메인 또는 경로에 대한 가상 호스트 설정을 추가한다. 
- 이 설정에서 로드 밸런싱 프록시를 정의한다.

## 아파치 - 스프링부트 구성 예시
```apache
<VirtualHost *:80>
7    ServerName 서버이름

    ProxyRequests Off
    ProxyPass / http://localhost:8081/   # 첫 번째 스프링 부트 애플리케이션
    ProxyPassReverse / http://localhost:8081/

    ProxyPass / http://localhost:8082/   # 두 번째 스프링 부트 애플리케이션
    ProxyPassReverse / http://localhost:8082/
    # 필요에 따라 추가 애플리케이션 및 포트 설정
</VirtualHost>

```

## 고려할 필요가 있는 보안 취약점
### 세션 관리와 일관성
- 로드 밸런싱된 서버들 간에 세션 상태를 일관되게 유지해야 한다. 
- 사용자의 세션 데이터가 모든 서버에 일관되게 유지되지 않을 경우, 로그인 정보, 장바구니 내역 등이 유실될 수 있다. 
- 이는 사용자 경험에 영향을 미치고 보안 취약점을 유발할 수 있다.

### 보안 프로토콜
- 서버 간의 통신은 안전한 프로토콜 (HTTPS 등)을 사용하여 암호화되어야 한다. 
- 특히, 클라이언트와 로드 밸런서, 로드 밸런서와 백엔드 서버 간의 통신은 안전한 채널을 사용하여 데이터를 보호해야 한다.

### 입력 검증 및 보안 패치
- 악의적인 입력으로부터 서버를 보호하기 위해 입력 검증을 수행해야 한다. 
- 또한 사용 중인 소프트웨어 및 라이브러리는 최신 상태로 유지하여 보안 패치를 적용해야 한다.

### DDoS 공격 
- 로드 밸런서는 DDoS 공격에 노출될 수 있다. 
- 과도한 트래픽이 로드 밸런서로 유입되면 이를 처리하기 위한 적절한 대비책이 마련되어 있어야 한다.

### 보안 인증 및 권한 부여
- 로드 밸런서를 거치지 않고 직접 백엔드 서버에 접근하는 것을 방지하기 위해 인증 및 권한 부여 시스템을 구축해야 한다.


### 출처
- [나무위키](https://namu.wiki/)
- [아파치 공식 사이트](https://httpd.apache.org/)
- [AWS](https://aws.amazon.com/ko/what-is/load-balancing/)
