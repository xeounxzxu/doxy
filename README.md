# Deliverus POC

이 레포지토리는 Kotlin/Spring Boot 기반 `doxy` 모듈과 React/Vite 기반 `web` 모듈로 구성되어 있습니다. Gradle 빌드를 수행하면 React 정적 번들이 Spring Boot JAR 안으로 복사되어 하나의 실행 파일에서 REST API와 웹 UI를 동시에 제공할 수 있습니다.

## 사전 준비물

- JDK 21 이상
- Node.js 18 이상 (npm 포함)

Gradle Wrapper(`./gradlew`)와 Vite 개발 서버는 레포지토리에 포함되어 있으므로 별도 설치가 필요 없습니다.

## 프로젝트 구조

- `doxy`: `/api/**` 엔드포인트를 노출하는 Spring Boot 애플리케이션.
- `web`: Vite로 컴파일되는 React 클라이언트. 빌드 결과물은 서비스 모듈의 정적 리소스로 포함됩니다.

## 로컬 개발 절차

### 1. 프런트엔드 의존성 설치

```bash
cd web
npm install
```

### 2. Spring 서비스 실행

```bash
./gradlew :doxy:bootRun
```

서버는 `http://localhost:8080` 을 사용하며 `/api/health` 를 노출합니다. 최신 React 번들도 `/` 경로에서 함께 서빙됩니다.

### 3. React 개발 서버 실행 (선택 사항)

새 터미널에서 다음을 실행하세요.

```bash
cd web
npm run dev
```

Vite 개발 서버는 `http://localhost:5173` 에서 구동되고 `/api` 요청을 8080 포트의 Spring 서비스로 프록시합니다. UI를 수정하면서 백엔드를 재빌드할 필요가 없습니다.

## 배포용 빌드

API와 정적 UI를 모두 포함한 JAR을 만들려면 Gradle Wrapper로 다음 명령을 실행하세요.

```bash
./gradlew :doxy:bootJar
```

이 명령은 자동으로 React 빌드(`:web:npmBuild`)를 수행하고 `web/dist` 를 `doxy` 모듈의 정적 리소스에 복사한 뒤 `doxy/build/libs/deliverus-poc-0.0.1-SNAPSHOT.jar` 파일을 생성합니다.

## 테스트

백엔드 테스트는 다음 명령으로 실행합니다.

```bash
./gradlew :doxy:test
```

프런트엔드 테스트는 아직 구성되어 있지 않으므로 필요에 따라 `web` 모듈에 추가해주세요.
