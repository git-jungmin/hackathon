<img width="1895" height="943" alt="image" src="https://github.com/user-attachments/assets/e6615f39-0c9c-4653-9325-3faa6e209db3" />

# 📡 Traco(SEIZE ON) - 실시간 치매 노인 추적 3D 웹 플랫폼

> **이 저장소는 Traco 프로젝트의 백엔드 API 서버로,** <br />
> **치매 어르신의 GPS 위치를 수집하고 이를 3D 맵에서 실시간으로 추적·시각화하는 웹 서비스를 지원합니다.**

This repository is the backend API server for Traco, a real-time web service that tracks and visualizes the location of dementia patients on a 3D map.  
It collects GPS data and provides structured APIs to support real-time rendering on the frontend.

## ✨ 주요 기능 (Features)

- 실시간 GPS 위치 수신 및 저장
- GPS 데이터 RESTful API 제공
- NestJS 기반 모듈화된 구조
- 프론트엔드와 실시간 데이터 통신 (확장 가능)

## 🛠 기술 스택 (Tech Stack)

| 분류      | 기술                          |
| --------- | ----------------------------- |
| Framework | [NestJS](https://nestjs.com/) |
| Language  | TypeScript                    |
| Runtime   | Node.js                       |
| Database  | MySQL                         |

## 📁 프로젝트 구조 (Project Structure)

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── core/
│ ├── common/
│ │ ├── dto/
│ │ │ └── common.dto.ts
│ │ └── entity/
│ │ └── common.entity.ts
│ └── enum/
│ └── user-role.enum.ts
├── device/
│ ├── device.controller.ts
│ ├── device.module.ts
│ ├── device.service.ts
│ ├── dto/
│ │ ├── device-request.dto.ts
│ │ └── device-response.dto.ts
│ └── entities/
│ └── device.entity.ts
├── location/
│ ├── location.controller.ts
│ ├── location.module.ts
│ ├── location.service.ts
│ ├── dto/
│ │ ├── location-request.dto.ts
│ │ └── location-response.dto.ts
│ └── entities/
│ └── location.entity.ts
└── main.ts
```

## 🚀 실행 방법 (Getting Started)

### 1. Backend 레포지토리 클론

```bash
git clone https://github.com/git-jungmin/hackathon.git
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_user
DB_PASSWORD=your_password
DB_DATABASE=seizeon
```

### 4. 데이터베이스 설정

```sql
CREATE DATABASE seizeon CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

```sql
CREATE USER 'your_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON seizeon.* TO 'your_user'@'localhost';
FLUSH PRIVILEGES;
```

### 5. 서버 실행

```bash
npm run start:dev
```

## 🖥️ 프론트엔드 연결

본 백엔드 서버는 아래 프론트엔드 프로젝트와 함께 동작합니다.  
3D 지도와 실시간 위치 시각화 기능은 해당 프론트엔드 레포지토리에서 구현되어 있습니다.

👉 [Frontend Repository 바로가기](https://github.com/rlawogh1005/dxhackathon-frontend.git)
