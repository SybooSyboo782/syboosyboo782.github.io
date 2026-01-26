---
title: 스프링 소개
author: syboosyboo
date: 2023-06-18 14:17:00 +0900
categories: [Back-End]
tags: [Spring, EJB]
pin: true
math: true
mermaid: true
---

# 스프링 소개

## 스프링의 탄생 배경
- 2002년 로드 존슨의 책 출간
- EJB의 문제점 지적
- EJB 없이도 충분히 고품질의 확장 가능한 애플리케이션을 개발할 수 있음을 보여줌
- 해당 책에 나오는 기술들
  - BeanFactory
  - ApplicationContext
  - POJO(Plain Old Java Object)
  - 제어의 역전(IoC)
  - 의존 관계 주입(DI)

---

## 엔터프라이즈 자바빈즈(Enterprise JavaBeans; EJB)?
- EJB는 기업환경의 시스템을 구현하기 위한 서버측 컴포넌트 모델이다. 
- 즉, EJB는 애플리케이션의 업무 로직을 가지고 있는 서버 애플리케이션이다. 
- EJB 사양은 Java EE의 자바 API 중 하나로, 주로 웹 시스템에서 JSP는 화면 로직을 처리하고, EJB는 업무 로직을 처리하는 역할을 한다.

## JAVA SE?, JAVA EE?, JAVA ME?
### 1. JAVA SE(Java Platform, Standard Edition)
- 순수 자바, JVM, JAVA API 등 제공
- Java SE을 사용하면 데스크톱 및 서버 에서 Java 애플리케이션을 개발하고 배포할 수 있다. 
- Java는 오늘날의 응용 프로그램에 필요한 풍부한 사용자 인터페이스, 성능, 다양성, 이식성 및 보안을 제공한다.

### 2. JAVA EE(Java Platform, Enterprise Edition)
- JAVA + Servlet + JSP
- Enterprise : 기업에서 쓰이는 에디션
- Java EE은 커뮤니티 기반 엔터프라이즈 소프트웨어의 표준입니다. 
- Java EE는 업계 전문가, 상업 및 오픈 소스 조직, Java 사용자 그룹 및 수많은 개인의 기여와 함께 Java 커뮤니티 프로세스를 사용하여 개발되었다. 
- 각 릴리스는 업계 요구 사항에 부합하는 새로운 기능을 통합하고 애플리케이션 이식성을 개선하며 개발자 생산성을 높였다.

### 4. JAVA ME(Java Platform, Micro Edition)
- 자바를 줄여놓은 형태
- Java ME는 마이크로컨트롤러, 센서, 게이트웨이, 휴대폰, PDA(Personal Digital Assistants), TV set- 상단 상자, 프린터 등. 
- Java ME에는 유연한 사용자 인터페이스, 강력한 보안, 내장 네트워크 프로토콜, 동적으로 다운로드할 수 있는 네트워크 및 오프라인 응용 프로그램 지원이 포함된다. 
- Java ME를 기반으로 하는 응용 프로그램은 많은 장치에서 이식 가능하지만 각 장치의 기본 기능을 활용한다.

---

## 스프링 릴리즈
- 2003년 스프링 프레임워크 1.0 출시
  - XML
- 2006년 스프링 프레임워크 2.0 출시
  - XML 편의 기능 지원
- 2009년 스프링 프레임워크 3.0 출시
  - 자바 5지원, 자바 코드로 설정 가능
- 2013년 스프링 프레임워크 4.0 출시
  - 자바 8 지원
- 2017년 스프링 프레임워크 5.0, 스프링부트 2.0 출시
  - 리액티브 프로그래밍 지원
- 2022년 스프링 프레임워크 6.0, 스프링부트 3.0 출시
  - 자바 17 지원
  - 새로운 ATO 엔진(빌드 시 스프링 앱 분석 및 최적화 도구) 도입

### 출처
- [위키백과](https://ko.wikipedia.org/wiki/%EC%97%94%ED%84%B0%ED%94%84%EB%9D%BC%EC%9D%B4%EC%A6%88_%EC%9E%90%EB%B0%94%EB%B9%88%EC%A6%88)
- [스프링 공식 문서](https://spring.io/)
- [김영한님 유튜브](https://www.youtube.com/watch?v=qyGjLVQ0Hog&list=PLumVmq_uRGHgBrimIp2-7MCnoPUskVMnd)
