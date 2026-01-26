---
title: Portfolio
icon: fas fa-briefcase
order: 4
---

<style>
  .portfolio-container {
    padding: 10px 0;
  }

  .project-card {
    background: var(--card-bg);
    border: 1px solid var(--main-border-color);
    border-radius: 15px;
    padding: 2rem;
    margin-bottom: 2.5rem;
    position: relative;
    overflow: hidden;
    /* 그룹 프로젝트: 차분한 스틸 블루 */
    border-left: 6px solid #5c7cfa; 
  }

  /* 개인 프로젝트: 너무 쨍하지 않은 부드러운 스카이 블루 */
  .personal-project {
    border-left: 6px solid #4dabf7 !important;
  }

  .project-type {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 15px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    background: #5c7cfa; 
    color: white;
    border-radius: 0 0 0 15px;
  }

  .personal-label {
    background: #4dabf7 !important;
  }

  .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid var(--main-border-color);
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .title-area h2 {
    margin: 0 !important;
    border: none !important;
    font-size: 1.8rem !important;
    font-weight: 900 !important;
    color: var(--heading-color);
  }

  .title-area h2 a { color: inherit; }

  /* 소제목: 테마 변수를 사용하여 다크모드에서 자동으로 편안한 색상으로 조절 */
  .sub-title {
    font-weight: 600;
    font-size: 1rem;
    color: var(--link-color);
    filter: brightness(0.9); /* 너무 쨍하면 밝기를 살짝 낮춤 */
  }

  .period {
    font-family: monospace;
    font-size: 0.85rem;
    color: var(--text-muted-color);
  }

  .description-box {
    line-height: 1.8;
    margin-bottom: 20px;
    color: var(--text-color);
  }

  .stack-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
  }

  .stack-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 12px;
    background: var(--main-bg);
    border: 1px solid var(--main-border-color);
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-color);
  }

  .stack-badge i { color: var(--link-color); }

  .team-info {
    margin-top: 15px;
    font-size: 0.85rem;
    color: var(--text-muted-color);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .team-info i { color: #e74c3c; }

  .task-list {
    list-style: none;
    padding-left: 5px;
  }

  .task-list li::before {
    content: "▹";
    color: var(--link-color);
    margin-right: 8px;
    font-weight: bold;
  }
</style>
<div class="portfolio-container">
  <div class="project-card" style="border-left-color: #2c3e50;">
      <div class="project-type" style="background: #2c3e50;">Professional Work</div>
      <div class="header-flex">
        <div class="title-area">
          <h2><a href="https://www.nilesoft.co.kr/">Nilesoft PCM System</a></h2>
          <div class="sub-title">내부 통제 및 보안 자원 관리 시스템 고도화</div>
        </div>
        <div class="period">2023.04 - 2025.05</div>
      </div>
      <div class="description-box">
        <ul class="task-list">
          <li><b>성능 최적화:</b> PostgreSQL 대용량 데이터 쿼리 튜닝 및 인덱스 설계로 시스템 응답 속도 개선</li>
          <li><b>워크플로우 현대화:</b> SVN에서 Git으로의 마이그레이션을 주도하여 코드 리뷰 및 협업 체계 개선</li>
          <li><b>자동화(CI/CD):</b> Jenkins 파이프라인 구축을 통해 빌드/배포 프로세스를 자동화하고 운영 효율성 증대</li>
          <li><b>UI/UX 개선:</b> JavaScript 및 jQuery 기반 인터랙티브 UI 구현으로 사용자 편의성 향상</li>
        </ul>
      </div>
      <div class="stack-container">
        <div class="stack-badge"><i class="fab fa-java"></i> Java / Spring</div>
        <div class="stack-badge"><i class="fas fa-database"></i> PostgreSQL</div>
        <div class="stack-badge"><i class="fab fa-jenkins"></i> Jenkins</div>
        <div class="stack-badge"><i class="fab fa-git-alt"></i> Git Migration</div>
      </div>
      <div class="team-info">
        <i class="fas fa-building"></i> Nilesoft PCM Team
      </div>
  </div>

  <div class="project-card">
    <div class="project-type">Group Project</div>
    <div class="header-flex">
      <div class="title-area">
        <h2><a href="https://github.com/MA-Dot-COM/Intro">SORHIVE</a></h2>
        <div class="sub-title">공간 및 AI 아바타 기반의 융합형 XR SNS 서비스</div>
      </div>
      <div class="period">2022.10 - 2022.11</div>
    </div>
    <div class="description-box">
      <ul class="task-list">
        <li><b>인프라 아키텍처 설계:</b> AWS Elastic Beanstalk를 활용한 로드밸런싱 및 오토스케일링 환경 구축 및 Route53/ACM을 통한 HTTPS 보안 강화</li>
        <li><b>대용량 데이터 분산 저장:</b> MySQL(일관성/무결성)과 MongoDB(방대한 활동 로그)를 혼합한 <b>Polyglot Persistence</b> 구조 설계</li>
        <li><b>배치 프로세싱 최적화:</b> Spring Batch를 도입하여 메인 서버 부하를 분산하고, 24시간 후 라이핑 소멸 및 AI 추천 데이터 적재 자동화 구현</li>
        <li><b>시스템 안정성 검증:</b> JMeter를 이용한 <b>3만 건 이상의 POST 부하 테스트</b> 및 ADB vmstat을 통한 성능 모니터링 수행</li>
      </ul>
    </div>
    <div class="stack-container">
      <div class="stack-badge"><i class="fas fa-leaf"></i> Spring Boot / Batch</div>
      <div class="stack-badge"><i class="fas fa-shield-alt"></i> Security / JWT</div>
      <div class="stack-badge"><i class="fas fa-database"></i> MySQL & MongoDB</div>
      <div class="stack-badge"><i class="fab fa-aws"></i> Elastic Beanstalk / S3</div>
    </div>
    <div class="team-info">
      <i class="fas fa-user-friends"></i> Backend 1(본인), Unity 2, AI 3
    </div>
  </div>

  <div class="project-card" style="border-left-color: #5c7cfa;">
    <div class="project-type" style="background: #5c7cfa;">Group Project</div>
    <div class="header-flex">
      <div class="title-area">
        <h2><a href="https://github.com/SybooSyboo782/AntJumpCollaborationTool">ANT</a></h2>
        <div class="sub-title">B2B 엔터프라이즈 협업 플랫폼</div>
      </div>
      <div class="period">2022.07 - 2022.10</div>
    </div>
    <div class="description-box"><ul class="task-list">
        <li><b>결제 시스템 설계:</b> 토스(Toss) 결제 API 연동을 통해 계약 체결 시 즉시 상용화가 가능한 수준의 <b>결제 프로세스 데모 및 아키텍처</b> 구축</li>
        <li><b>백오피스(Admin) 개발:</b> 협업툴 운영의 핵심인 전사 자원 관리 등 <b>통합 관리자 시스템</b> 설계 및 구현</li>
        <li><b>DBA 및 데이터 모델링:</b> 6인 백엔드 팀의 협업을 리딩하며 <b>논리 ERD 설계</b> 및 대용량 협업 데이터 처리를 위한 쿼리 최적화 수행</li>
        <li><b>협업 비즈니스 로직:</b> 업무 일지, 회의록, 이슈 관리 등 협업 생산성 향상을 위한 복잡한 데이터 관계를 RESTful API로 효율적으로 구조화</li>
      </ul>
    </div>
    <div class="stack-container">
      <div class="stack-badge"><i class="fas fa-server"></i> Spring Boot</div>
      <div class="stack-badge"><i class="fas fa-credit-card"></i> Payment API</div>
      <div class="stack-badge"><i class="fas fa-tachometer-alt"></i> Query Optimization</div>
    </div>
    <div class="team-info">
      <i class="fas fa-user-friends"></i> Backend 6
    </div>
  </div>

  <div class="project-card" style="border-left-color: #748ffc;">
    <div class="project-type" style="background: #748ffc;">Group Project</div>
    <div class="header-flex">
      <div class="title-area">
        <h2>Ditto</h2>
        <div class="sub-title">벡터 검색 기반 차세대 SNS</div>
      </div>
      <div class="period">2022.09 - 2022.10</div>
    </div>
    <div class="description-box">
      <ul class="task-list">
        <li><b>Backend Leader</b>로서 Git 기반 형상 관리 및 팀 협업 워크플로우 리딩</li>
        <li>실시간 <b>로그 수집 시스템</b> 구축을 통해 서비스 모니터링 체계 마련</li>
        <li>멀티파트 업로드를 이용한 고효율 대용량 파일 처리 프로세스 구현</li>
      </ul>
    </div>
    <div class="stack-container">
      <div class="stack-badge"><i class="fas fa-search"></i> Vector Search</div>
      <div class="stack-badge"><i class="fab fa-git-alt"></i> Git Flow</div>
      <div class="stack-badge"><i class="fas fa-stream"></i> ELK/Logging</div>
    </div>
    <div class="team-info">
      <i class="fas fa-user-friends"></i> Backend 3, AI 4
    </div>
  </div>

  <div class="project-card personal-project">
    <div class="project-type personal-label">Personal Project</div>
    <div class="header-flex">
      <div class="title-area">
        <h2><a href="https://github.com/SybooSyboo782/notice-api">Notice Management API</a></h2>
        <div class="sub-title">대용량 트래픽 대응 고성능 공지사항 관리 시스템</div>
      </div>
      <div class="period">2026.01 - 2026.01</div>
    </div>
    <div class="description-box">
      <ul class="task-list">
        <li><b>최신 기술 스택 적용:</b> Java 21 및 <b>Spring Boot 4.0.1</b> 기반 아키텍처 설계와 Querydsl 5.1을 활용한 타입 안정적 복합 검색 구현</li>
        <li><b>고성능 파일 스트림 처리:</b> 대용량 파일 업로드 시 메모리 점유 최소화를 위한 <b>8KB 버퍼 기반 스트림 최적화</b> 및 고성능 로깅(Log4j2) 구축</li>
        <li><b>다중 보안 레이어 강화:</b> Apache Tika 기반 MIME 타입 검증 및 SHA-256 파일명 암호화를 통해 <b>Path Traversal 및 파일 변조 공격 원천 차단</b></li>
        <li><b>데이터 정합성 및 테스트 신뢰성:</b> JPA <b>낙관적 락(@Version)</b> 기반 동시성 제어와 Clock 추상화를 통한 환경 독립적 단위/통합 테스트 수트 완비</li>
      </ul>
    </div>
    <div class="stack-container">
      <div class="stack-badge"><i class="fas fa-microchip"></i> Java 21 / SB 4.0</div>
      <div class="stack-badge"><i class="fas fa-search"></i> Querydsl 5.1</div>
      <div class="stack-badge"><i class="fas fa-shield-alt"></i> Apache Tika / Security</div>
      <div class="stack-badge"><i class="fas fa-vial"></i> Optimistic Lock / TDD</div>
    </div>
  </div>

</div>
