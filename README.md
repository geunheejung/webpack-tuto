출처: https://joshua1988.github.io/webpack-guide/

## 웹팩이란

- 모듈 번들러이다.
- 어플리케이션을 구성하는 자원을 모두 각각의 모듈로 보고 이를 조합해서 하나의 결과물을 만드는 도구를 의미한다.

## 모듈이란

- 프로그래밍 관점에서 특정 기능을 갖는 작은 코드 단위를 의미한다.

## 웹팩에서의 모듈

- 웹팩에서 지칭하는 모듈 -> 자바스크립트 모듈에만 국한되지 않고 어플리케이션을 구성하는 모든 자원을 의미.
- 어플리케이션을 제작하려면 HTML, CSS, 이미지, 폰트 등 많은 자원이 필요.

## 모듈 번들링

- 어플리케이션을 구성하는 자원들을 하나의 파일로 병합 및 압축해주는 행위

## 등장 배경

1. 파일 단위 자바스크립트 모듈 관리의 필요성 -> 유효 범위(스코프와 관련된 문제 해결)
2. 웹 개발 작업 자동화 도구 -> (a) 수정 후 브라우저 새로 고침을 누르는 등과 같은 행위 (b) 배포 전 각 모듈들 압축 및 전처리
3. 어플리케이션의 빠른 로딩 속도와 높은 성능 -> 서버로 요청하는 리소스 줄이는 것, 웹 태스크 매니저를 이용해 파일 압축 및 병합
4. 레이지 로딩
   => 웹팩은 기본적으로 필요한 자원은 미리 로딩하는게 아닌 필요한 시점에 요청하자는 철학을 갖는다.

## 해결하려는 문제

### 기존의 문제

1. 변수 유효 범위 -> ES6의 Modules 문법과 웹팩의 모듈 번들링으로 해결
2. 브라우저별 HTTP 요청 숫자의 제약
3. 사용하지 않는 코드의 관리
4. Dynamic Loading & Lazy Loading 미지원

### 브라우저별 HTTP 요청 숫자의 제약

- TCP 스펙에 따라 브라우저에서 한 번에 서버로 보낼 수 있는 HTTP 요청 숫자의 제약
  <img width="302" alt="스크린샷 2023-08-22 오전 11 43 20" src="https://github.com/geunheejung/webpack-tuto/assets/37014032/b204430f-17fe-424e-b50d-8598274b8b8b">

- HTTP 요청 숫자를 줄이는 것이 어플리케이션의 성능 향상과 함께 사이트를 조작하는 시간을 앞당겨 줄 수 있다.

## webpack.config

### Entry

- entry 속성에 지정된 파일에는 어플리케이션의 전반적인 구조와 내용이 담겨져야 함.
- 웹팩이 해당 파일을 가지고 어플리케이션에 사용되는 모듈들들의 연관 관계를 이해 및 분석하기 때문에
  <img width="549" alt="스크린샷 2023-08-22 오전 11 45 26" src="https://github.com/geunheejung/webpack-tuto/assets/37014032/acc9fb14-43e9-4bfb-ae71-03ee27fd1579">

- 모듈 간의 관계가 생기는 구조를 디펜던시 그래프라 한다.
- entry에 설정한 진입점을 토대로 각 모듈들을 훑고 관계도를 만듬.

#### 웹팩은 기본적으로 여러 개의 자바스크립트 모듈을 하나의 파일로 묶어내는 번들러이다.

- 웹팩은 다른 모듈을 사용하고 있는 최상위 자바스크립트 파일이 어디에 있는지 알아야 하며,
- 설정 파일에서 이를 Entry 속성으로 명시한다.
- 웹팩은 이 Entry 속성에 명시된 파일을 기준으로 의존성 트리를 만들어 하나의 번들 파일을 만들어 낸다.

### Loader

- 자바스크립트 뿐만 아니라, Loader 를 이용해 CSS, 이미지, 웹 폰트, JSX 등 다양한 종류의 파일을 함께 번들링 가능.

#### Javascript 파일 내에서 css 파일 import할 시

```
asset build.js 537 KiB [emitted] (name: main)
runtime modules 1.25 KiB 6 modules
cacheable modules 532 KiB
  modules by path ./src/ 418 bytes
    ./src/index.js 317 bytes [built] [code generated]
    ./src/views/LoginView.js 101 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
  ./style.css 23 bytes [built] [code generated] [1 error]

ERROR in ./style.css 1:5
Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> body {
|   color: red;
| }
 @ ./src/views/LoginView.js 1:0-25
 @ ./src/index.js 2:0-42 8:50-59

webpack 5.88.2 compiled with 1 error in 251 ms
error Command failed with exit code 1.

위와 같이
모듈 구분 분석 실패 -> 적절한 로더가 필요하다고 에러가 나온다.
```

- 기본적으로 webpack은 js, json 확장자가 베이스여서 그렇다.

### Plugin

- 플러그인을 통해 번들링 과정에서 추가 처리를 가능하게 해준다.
- clean-webpack-plugin : 빌드 시 이전 파일 삭제 후 진행 하도록 추가 처리 해줌.

```
asset build.js 537 KiB [emitted] (name: main)
runtime modules 1.25 KiB 6 modules
cacheable modules 532 KiB
  modules by path ./src/ 418 bytes
    ./src/index.js 317 bytes [built] [code generated]
    ./src/views/LoginView.js 101 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
  ./style.css 23 bytes [built] [code generated] [1 error]

ERROR in ./style.css 1:5
Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> body {
|   color: red;
| }
 @ ./src/views/LoginView.js 1:0-25
 @ ./src/index.js 2:0-42 8:50-59

webpack 5.88.2 compiled with 1 error in 251 ms
error Command failed with exit code 1.

위와 같이
모듈 구분 분석 실패 -> 적절한 로더가 필요하다고 에러가 나온다.
```
