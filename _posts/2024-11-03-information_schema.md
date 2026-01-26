---
title: Information Schema
author: syboosyboo
date: 2024-11-03 08:05:00 +0900
categories: [DB]
tags: [DB]
pin: true
math: true
mermaid: true
---

# Information Schema 란?
- Information Schema는 모든 데이터베이스에 존재하는 information_schema라는 스키마에 테이블 형태로 저장된다. 
- 이를 통해 사용자는 데이터베이스의 물리적 스키마와 관련된 메타데이터를 표준화된 SQL 쿼리를 통해 조회할 수 있다. 
- information_schema는 보편적으로 사용되는 구조로 다른 데이터베이스 관리 시스템(DBMS)에서도 비슷한 스키마를 제공한다.

## Information Schema의 주요 테이블
### tables 테이블
- 현재 데이터베이스에 정의된 모든 테이블에 대한 정보를 제공한다.
- table_catalog	: 테이블이 속한 데이터베이스 이름 
- table_schema : 테이블이 속한 스키마 이름 
- table_name : 테이블 이름 
- table_type : 테이블의 유형 (예: BASE TABLE, VIEW 등)
- ```postgresql
  SELECT table_name
    FROM information_schema.tables
   WHERE table_schema = 'public';
  ```

### columns 테이블
- 각 테이블의 열(column) 정보에 대한 상세 내용을 저장합니다.
- table_catalog : 열이 속한 데이터베이스 이름 
- table_schema : 열이 속한 스키마 이름 
- table_name : 열이 속한 테이블 이름 
- column_name : 열 이름 
- data_type : 열의 데이터 유형 
- is_nullable : 열의 NULL 허용 여부 (YES 또는 NO)
- ```postgresql
  SELECT column_name, data_type, is_nullable
    FROM information_schema.columns
   WHERE table_name = 'your_table_name';
  ```
  
### views 테이블
- 데이터베이스에 정의된 모든 뷰에 대한 정보를 포함합니다. 
- table_catalog : 뷰가 속한 데이터베이스 이름 
- table_schema : 뷰가 속한 스키마 이름 
- table_name : 뷰 이름 
- view_definition : 뷰에 정의된 SQL 구문
  ```postgresql
  SELECT table_name, view_definition
    FROM information_schema.views
   WHERE table_schema = 'public';
  ```
  
## 주의사항
- Information Schema는 읽기 전용 스키마로 데이터베이스 객체의 메타데이터를 제공하는 역할만 한다. 
- 따라서 Information Schema에서 데이터를 수정하거나 삭제할 수는 없다. 
- 만약 구조적 변경이 필요하다면, 해당 테이블이나 열을 직접 수정하는 SQL 명령어를 사용해야 한다.


### 출처
- [나무위키](https://namu.wiki/)
- [PostgreSQL 문서](https://www.postgresql.org/docs/current/information-schema.html)
