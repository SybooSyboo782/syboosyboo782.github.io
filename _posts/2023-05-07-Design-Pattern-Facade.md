---
title: Facade 디자인 패턴
author: syboosyboo
date: 2023-05-07 12:17:00 +0900
categories: [디자인패턴]
tags: [디자인패턴, Facade]
pin: true
math: true
mermaid: true
---
# Facade 패턴
- 라이브러리, 프레임워크 또는 다른 클래스들의 복잡한 집합에 대한 단순화 된 인터페이스를 제공하는 구조적 디자인 패턴이다.

## Facade 패턴을 통해 해결 할 수 있는 점
- 하나의 책임이 변경 되어도 다른 책임에는 영향을 미치지 않으며, 개념이 같은 클래스를 하나로 관리하여 버전에 따라 달라지는 것을 최소화 할 수 있다.
- 하나의 책임 변경이 어느 클래스에 작성되어 있는지가 명확하기 때문에 수정할 부분을 찾기 쉬워진다.

## Facade 패턴의 장점
- 복잡한 하위 시스템에서 코드를 별도로 분리할 수 있다.

## Facade 패턴의 단점
- Facade는 앱의 모든 클래스에 결합된 전지전능한 객체가 될 수 있다.

## Facade 패턴의 한계점
- 컴파일 시 의존성이 아직 존재하여 변경에 취약한 형태가 된다.

## Facade 코드 예시

```java
public class Application {
public static void main(String[] args) {
        Facade facade = new Facade("김치찌개", "아이스크림");
        facade.eat_Meal();
    }
}
```
```java
public class Facade {

    private String foodName = "";
    private String desertName = "";

    public Facade(String foodName, String desertName) {
        this.foodName = foodName;
        this.desertName = desertName;
    }

    public void eat_Meal() {
        MealPrep mealPrep = new MealPrep();
        Food food = new Food(foodName);
        Desert desert = new Desert(desertName);

        food.PickOrder();
        desert.PickOrder();
        mealPrep.PutCutlery();
        food.EatFood();
        desert.EatDesert();

    }

}
```
```java
public class Desert {

    private String name ="";

    public Desert(String name) {
        this.name = name;
    }

    public void PickOrder() {
        System.out.println(name + " 디저트 주문하기");
    }

    public void EatDesert() {
        System.out.println(name + " 디저트 먹기");
    }
}
```
```java
public class Food {

    private String name ="";

    public Food(String name) {
        this.name = name;
    }

    public void PickOrder() {
        System.out.println(name + " 음식 주문하기");
    }

    public void EatFood() {
        System.out.println(name + " 음식 먹기");
    }

}
```
```java
public class MealPrep {
public void PutCutlery() {
        System.out.println("음식이 나오기 전에 수저 세팅하기");
    }
}
```
