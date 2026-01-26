---
title: 자바스크립트 call, apply, bind
author: syboosyboo
date: 2023-07-15 12:17:00 +0900
categories: [Front-End]
tags: [JavaScript, Prototype]
pin: true
math: true
mermaid: true
---


# call, apply, bind

- JavaScript의 내장함수인 'Function'의 프로토타입 메서드이다.
  - 따라서 모든 함수 객체에서 이들 메서드의 사용이 가능하다.
- 명시적으로 this 바인딩을 할 때 사용하는 메소드들이다.
- 인수를 전달할 수 있다.

## Function.prototype.call()

- call() 메소드는 주어진 this 값 및 각각 전달된 인수와 함께 함수를 호출한다.

  ```javascript
  func.call(thisArg[, arg1[, arg2[, ...]]])
  ```
  - thisArg : func 호출에 제공되는 this의 값
  - arg1, arg2, ...: func이 호출되어야 하는 인수

  - 반환값
    - this 와 arguments를 매개로 호출된 함수의 반환값

## Function.prototype.apply()

- apply() 메서드는 주어진 this 값과 배열 (또는 유사 배열 객체) 제공되는 arguments 로 함수를 호출한다.

  ```javascript
  func.apply(thisArg, [argsArray])
  ```
  - thisArg: func 호출에 제공되는 this의 값
  - argsArray: func이 호출되어야 하는 인수를 지정하는 유사 배열 객체
  - 반환값
    - 지정한 this 값 및 초기 인수를 사용하여 변경한 원본 함수의 복제본.

## call 과 apply의 차이점

- call은 첫번째 이후의 인자들을 나열된 변수들을 받는 특징이 있다.
- apply는 첫번째 이후의 인자들을 배열로 받는 특징이 있다.
- 이 외에는 동일한 결과를 반환 한다.

## Function.prototype.bind()
- bind() 메소드가 호출되면 새로운 함수를 생성한다.
- 받게되는 첫 인자의 value로는 this 키워드를 설정한다
- 이어지는 인자들은 바인드된 함수의 인수에 제공된다.

  ```javascript
  func.bind(thisArg[, arg1[, arg2[, ...]]])
  ```
  - thisArg: 바인딩 함수가 타겟 함수의 this에 전달하는 값
  - arg1, arg2, ...: func이 호출되어야 하는 인수
  - 반환값
    - 지정한 this 값과 인수들로 호출한 함수의 결과.

## bind와 위 두개 메소드의 차이점

- bind 메소드는 call 과 apply와 다르게 함수를 즉시 실행하지 않는다.
- 새로운 함수를 생성하여 원래 함수와 동일한 본문을 가지고 this 값을 지정한 채로 바인딩한다.
- 이후 생성된 함수는 나중에 호출할 수 있다.

## 예제
```javascript
const obj = {
  name: 'SybooSyboo',
  greet: function(message) {
    console.log(message + ' ' + this.name);
  }
};

function sayHello(message) {
  console.log(message + ' ' + this.name);
}

// call 예제
obj.greet.call(obj, 'Hello'); // 출력: Hello SybooSyboo
sayHello.call(obj, 'Hi'); // 출력: Hi SybooSyboo

// apply 예제
obj.greet.apply(obj, ['Hola']); // 출력: Hola SybooSyboo
sayHello.apply(obj, ['Hey']); // 출력: Hey SybooSyboo

// bind 예제
const boundGreet = obj.greet.bind(obj);
boundGreet('NI Hao'); // 출력: NI Hao SybooSyboo

const boundHello = sayHello.bind(obj);
boundHello('Ohayo'); // 출력: Ohayo SybooSyboo


```

### 출처
- [MDN](https://developer.mozilla.org/ko/)
