---
title: Command 디자인 패턴
author: syboosyboo
date: 2025-06-29 12:17:00 +0900
categories: [디자인패턴]
tags: [디자인패턴, Command]
pin: true
math: true
mermaid: true
---
# Command(커맨드) 패턴
- 커맨드 패턴은 요청을 객체로 캡슐화하여, 서로 다른 요청을 파라미터화하거나, 요청을 큐에 저장하거나, 실행 취소 기능을 쉽게 구현할 수 있도록 하는 디자인 패턴이다.
- 즉, 요청을 "명령(Command) 객체"로 만들어서, **요청자(Invoker)**와 **수행자(Receiver)**를 분리한다.
- 대표적으로 UI 버튼 클릭, 매크로 명령, 실행 취소(Undo) 기능 등에 자주 사용된다.

 
## Command(커맨드) 패턴을 통해 해결 할 수 있는 점
- 요청자와 수행자 간 결합도를 낮춘다 
  - 요청자는 어떤 작업이 수행되는지 구체적으로 알 필요가 없고, 단순히 명령 객체만 실행한다.

- 요청을 큐에 저장하거나 로그로 남길 수 있다 
  - 요청을 객체로 캡슐화하므로, 필요할 때 실행 순서를 제어하거나 나중에 재실행할 수 있다.

- 실행 취소(Undo) 기능을 쉽게 구현할 수 있다 
  - 명령 객체에 undo() 메서드를 정의하여 이전 상태로 되돌리는 로직을 추가할 수 있다.

## Command(커맨드) 패턴의 장점
- 결합도 감소: 클라이언트(Invoker)는 Receiver에 대해 몰라도 됨 
- 유연한 확장성: 새로운 명령을 추가하기 쉬움 (새 Command 클래스만 추가하면 됨)
- 실행 취소, 재실행 지원 
- 요청의 저장과 큐잉 가능

## Command(커맨드) 패턴의 단점
- 명령마다 별도의 클래스가 필요하기 때문에 클래스 수가 많아질 수 있음 
- 단순한 요청만 있는 경우 오히려 복잡도를 증가시킴

## Command(커맨드) 패턴의 한계점
- 컴복잡한 제어 흐름에는 과적합될 위험이 있음 
  > 단순히 메서드 하나만 호출하면 될 일을 불필요하게 Command 객체로 감쌀 수 있다.

- 상태 저장 부담 
  >실행 취소나 재실행을 위해 상태를 저장해야 하며, 설계 시 고민이 필요하다.



## Command 코드 예시
```java
// Command 인터페이스
public interface Command {
void execute();
void undo();
}
```

```java
// Receiver
public class Light {
public void on() {
System.out.println("전등이 켜졌습니다.");
}

    public void off() {
        System.out.println("전등이 꺼졌습니다.");
    }
}
```

```java
// ConcreteCommand: 전등 켜기
public class LightOnCommand implements Command {
private final Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.on();
    }

    @Override
    public void undo() {
        light.off();
    }
}
```

```java
// ConcreteCommand: 전등 끄기
public class LightOffCommand implements Command {
private final Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.off();
    }

    @Override
    public void undo() {
        light.on();
    }
}
```

```java
// Invoker
public class RemoteControl {
private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressButton() {
        command.execute();
    }

    public void pressUndo() {
        command.undo();
    }
}
```

```java
// Client
public class Client {
public static void main(String[] args) {
Light light = new Light();
Command lightOn = new LightOnCommand(light);
Command lightOff = new LightOffCommand(light);

        RemoteControl remote = new RemoteControl();

        // 전등 켜기
        remote.setCommand(lightOn);
        remote.pressButton(); // 출력: 전등이 켜졌습니다.
        remote.pressUndo();   // 출력: 전등이 꺼졌습니다.

        // 전등 끄기
        remote.setCommand(lightOff);
        remote.pressButton(); // 출력: 전등이 꺼졌습니다.
        remote.pressUndo();   // 출력: 전등이 켜졌습니다.
    }
}
```
