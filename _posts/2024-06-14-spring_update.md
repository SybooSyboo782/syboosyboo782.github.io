---
title: 스프링 6.0 -> 6.2 업데이트 가이드
author: syboosyboo
date: 2024-06-30 08:05:00 +0900
categories: [자바, Spring]
tags: [자바, Spring]
pin: true
math: true
mermaid: true
---

# 스프링 6.0 -> 6.1 업데이트 가이드

## 최소 의존성
- SnakeYAML 2.0 ↑
- Jackson 2.14 ↑
- Kotlin Coroutines 1.7 ↑
- Kotlin Serialization 1.5 ↑

### [6.1에서 제거될 예정인 API](https://github.com/spring-projects/spring-framework/issues/29449)

### [6.2에서 제거될 예정인 API](https://github.com/spring-projects/spring-framework/issues/30604)

## Parameter Name Retention
- LocalVariableTableParameterNameDiscoverer 제거됨
- compile 부분에 parameter true 값을 넣어야됨
- 안 넣으면 오류가 발생함
- maven-compiler-plugin(pom.xml 에 작성)
  ```xml 
  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <configuration>
        <parameters>true</parameters>
    </configuration>
  </plugin>
  ```
- gradle(build.gradle 에 작성)
  ```groovy
  tasks.withType<JavaCompile>() {
    options.compilerArgs.add("-parameters")
  }
  ```
- Intellij
  1. IntelliJ 에서 File -> Settings를 연다
  2. Build, Execution, Deployment → Compiler → Java Compiler로 이동
  3. Additional command line parameters라는 항목에 다음을 추가
   -parameters
  4. out 폴더를 삭제하고 다시 실행

---
### 출처
- [나무위키](https://namu.wiki/)
- [spring 문서](https://spring.io/projects)
- [spring github wiki](https://github.com/spring-projects/spring-framework/wiki/Upgrading-to-Spring-Framework-6.x)
- [spring boot github wiki](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.3-Release-Notes)
