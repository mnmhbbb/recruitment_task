### 채용 과제
- 처음으로 리액트와 SCSS를 도입한 프로젝트를 진행하는걸 목표로 했는데 초기 세팅에서 많은 시간을 보냈다.
- 그래서 간단하게 정리하면서 추가 공부를 하려고 한다.
### 1. node-sass 설치
- CRA와 SCSS의 버전 호환 문제가 있어서 다음 버전으로 설치한다.
```javascript
npm install node-sass@4.14.1
```
### 2. 컴파일 명령어
```javascript
"node-sass": "node-sass",
"sass": "node-sass --source-map true styles/main.scss src/index.css"
```
- `node-sass` 공식문서에서 알게 된 기능인데, `--source-map` 옵션을 붙이면 어떤 scss 파일에서 렌더링된 코드인지 확인할 수 있다고 한다. 
- 디버깅에 도움이 됐다.
### 3. stylelint
- scss 또한 코드 작성 시에 발생할 수 있는 오류, 안티패턴을 미리 알려주는 lint가 있다.
- 처음엔 `sass-lint`를 적용하려고 했으나 오류를 제대로 발견해주지 않아서 `stylelint`로 설정하였다.
- `VSCode`에서 `stylelint` 확장 프로그램을 설치하고 아래 패키지를 설치한다.(좀 많다..)
```javascript
node i -D stylelint stylelint-config-recess-order stylelint-config-standard stylelint-scss
```
- 그런 다음 `.stylelintrc.json` 파일을 받아와서 설정하였다.
### 4. 변수, 믹스인, 플레이스홀더, 함수 등의 개념을 잊어버려서 다시 복습하였다.
- 색상은 `$변수`를 사용하였고, `display: flex` 같이 세트로 많이 쓰이는 코드는 `@mixin`으로 미리 설정하였다.
- 기타 중복되는 코드는 `%placehoder`를 사용해서 편리했다.
- 더 많이 만들어보면 적극 활용할 수 있지 않을까 싶다.
### 5. class 이름을 짓는 어려움이 생겨서 css 모듈을 사용하였다.
- `파일명.module.scss`로 파일을 생성하고, 다음과 같이 import 해서 사용한다.
- 삼항연산자를 쓰거나 할 때 코드의 가독성이 떨어지면 `classNames` 라는 라이브러리를 설치하면 조금 더 편하게 사용할 수 있다고 한다. 
```css
import styles from './Main.module.scss';

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
```
### 6. hover 기능
- 마우스를 올리면 버튼이 생기는 기능을 구현해야 했는데, 단순히 빈 곳에서 생기는 것이 아니라,  
버튼이 생길 자리를 유지한 상태에서 마우스를 올렸을 때 버튼이 나타나야 했다.
- 만들고 나서는 간단했는데 html, css가 아닌 리액트로 접근하는 방법이 잘 생각나지 않았다.
```css
  .beforeClick {
    ...
   .btn {
      @extend %button;
      pointer-events: none;
      opacity: 0;
    }

    &:hover {
      cursor: pointer;
      background-color: #f3f3f3;

      .btn {
        @extend %button;
        pointer-events: visible;
        opacity: 1;
      }
    }
```
- 처음 버튼 자리를 유지해야 하므로 `opacity: 0;` 을 준 다음 hover 가 되면 보이도록 구현했다.
