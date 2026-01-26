---
title: 자바스크립트 클래스
author: syboosyboo
date: 2023-07-30 12:17:00 +0900
categories: [Front-End]
tags: [JavaScript,  Class]
pin: true
math: true
mermaid: true
---


# class
- ES 6에 추가된 스펙
- new 를 통해서 호출할 때 내부에서 정의된 내용으로 객체를 생성한다. 
- class라는 키워드와 내부에 constructor 가 있다.
- constructor는 객체를 만들어 주는 생성자 메소드이다.
- new 를 통해 호출하면 자동으로 실행된다.
- 객체를 초기하기 위한 값이 정의 되고 인수를 넘겨받을 수 있다.
- 클래스 내에 정의한 메소드는 프로토타입에 저장이 된다.


```javascript
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const john = new User("John", 19);

// 생성자 함수
const User2 = function (name, age) {
    this.name = name;
    this. age = age;
}

User2.prototype.showName = function () {
    console.log(this.name);
};

const Mike = new User("Mike", 30);
```
## 생성자 함수와 클래스의 차이점

- prototype 의 constructor 에 new 없이 호출하면 에러가 발생되도록 설계 되었다.
- 클래스는 class 라고 명시가 되어 있다.
- class 의 메소드는 for-in 문에서 제외된다.

## 상속
- z4.dirve()를 실행하면 z4 객체에서 찾고 프로토타입에서 찾아보고 없으면 
- 또 prototype에서 찾아봐서 실행이 된다.

```javascript
class Car {
    constructor(color) {
        this.color = color;
        this. whells = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    park() {
        console.log("PARK");
    }
}

const z4  = new Bmw("blue");
```

## 메소드 오버라이딩(method overriding)
- 만약 동일한 이름의 메소드가 존재 하는 경우 발생한다.
- 덮어씌우게 된다.
- 부모의 이름을 그대로 쓰면서 확장하고 싶을 때는 super 를 사용하면 된다.

```javascript
class Car {
    constructor(color) {
        this.color = color;
        this. whells = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    park() {
        console.log("PARK");
    }
    stop() {
        super.stop;
        console.log("OFF");
    }
}
```

## 생성자 오버라이딩

- constructor 는 부모 생성자를 반드시 먼저 호출해야한다.
- 클래스의 constructor 는 빈 객체로 만들어지고 this 로 이 객체를 가르키게 된다.
- extends 를 써서 만든 자식 클래스는 빈 객체를 만들어지고 this 로 할당하는 작업을 건너 뛴다.
- 그래서 항상 super 키워드로 부모 class 의 constructor 를 실행해주어야 한다.
- 생성할 때 자식 클래스의 constructor 에 동일한 인수를 갖는 작업을 해주어야 undefined 가 뜨지 않는다.

```javascript
class Car {
    constructor(color) {
        this.color = color;
        this. whells = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
  
  constructor(color) {
    super(color);
    this.navigation = 1;
  }

  park() {
        console.log("PARK");
    }
}
```

- 만약 constructor 가 없으면 이 부분이 있는 것처럼 행동한다.
- 자식 생성자에 constructor 가 있으면 super 로 호출해주고 this. 프로퍼티로 할당해주어야 한다.
```javascript
class Bmw extends Car {
    
    // 자동으로 생성되는 구문
    constructor(...args) {
        super(...args);
    }

    park() {
        console.log("PARK");
    }
}
```

### 출처
- [MDN](https://developer.mozilla.org/ko/)
- [코딩앙마 유튜브](https://youtube.com/codingangma/)
