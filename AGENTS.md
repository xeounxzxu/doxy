# Repository Guidelines

## Project Structure & Module Organization
`doxy/` 는 Kotlin/Spring Boot API 모듈이며 주요 코드는 `doxy/src/main/kotlin`, 설정은 `doxy/src/main/resources`, 테스트는 `doxy/src/test/kotlin` 에 위치합니다. `web/` 는 React/Vite 클라이언트로 `src/` 에 컴포넌트, `index.html` 과 `vite.config.ts` 에 엔트리 구성이 있습니다. 루트 `build.gradle` 과 `settings.gradle` 이 두 모듈을 하나의 Gradle 멀티프로젝트로 묶습니다.

## Build, Test, and Development Commands
백엔드 실행은 `./gradlew :doxy:bootRun` 으로, 테스트는 `./gradlew :doxy:test` 로 수행합니다. 배포용 JAR 은 `./gradlew :doxy:bootJar` 이며 이 과정에서 `:web:npmBuild` 가 자동으로 호출되어 `web/dist` 를 생성합니다. 프런트엔드는 `cd web && npm install` 로 의존성을 설치하고, `npm run dev` 로 Vite 개발 서버를 띄우며, `npm run build` 로 최적화 번들을 만듭니다.

## Coding Style & Naming Conventions
Kotlin 코드는 4칸 들여쓰기, `PascalCase` 클래스(`DoxyApplication`), `camelCase` 함수/프로퍼티, 패키지 루트는 `com.kreature.doxy` 를 사용합니다. Spring 구성 요소는 가능한 생성자 주입과 데이터 클래스를 활용합니다. TypeScript/React 는 2칸 들여쓰기, 컴포넌트 `PascalCase`, 훅/변수 `camelCase`, 전역 스타일은 소문자-케밥 케이스 파일명을 권장합니다.

## Testing Guidelines
백엔드는 JUnit 5 + Spring Boot Test 를 사용하며 클래스별로 `*Tests.kt` 파일을 생성합니다. 데이터 저장소나 외부 API 는 mocking 으로 대체하고, 테스트 이름은 “should + 동작” 패턴으로 의도를 명확히 합니다. 프런트엔드 테스트 도입 시 Vitest/Testing Library 를 권장하며 `*.test.tsx` 파일을 소스와 가까운 위치에 두세요.

## Commit & Pull Request Guidelines
커밋 메시지는 “Add feature”, “Fix health endpoint” 와 같이 짧은 명령형 영어 문장을 사용하고 72자 이내로 유지합니다. PR 은 변경 요약, 실행한 명령(`./gradlew :doxy:test`, `npm run build` 등), UI 변경 시 스크린샷, 관련 이슈 링크를 포함해야 합니다. 리뷰 전까지 CI 또는 로컬 테스트를 성공시켜야 하며, 신규 설정/시크릿 추가 시 README 및 해당 모듈의 설정 예시를 업데이트하세요.
