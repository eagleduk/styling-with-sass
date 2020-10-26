1. sass 설정
- yarn add node-sass
- yarn add classnames
** https://sass-guidelin.es/ko/
** sass-lang.com/guide

2. 다양한 사이즈의 class 설정하기

3. 다양한 색상 설정하기
- 반복되는 형태의 스타일이 있을때, mixin 이라는 함수를 사용하여 변수를 받아 @include 로 호출할 수 있다.
** 색상 참고: https://yeun.github.io/open-color/

4. outline, fullwidth
- property 가 boolean 일 경우는 값은 생략해도 인식이 된다.

5. ...rest props 전달
- 직접 선언한 parameter 이외의 parameter 에 대하여 객체 형태로 받을 수 있다.
- 객체 형태를 element(component) 에 부여할 때에도 객체형태로 부여 가능하다.

** css-module
- yarn add react-icons => https://react-icons.github.io/react-icons/ 의 아이콘을 사용하게 만들어 준다.
- classnames 와 혼합 사용 가능
- class 명을 부여하기 번거로울때, 겹칠 수도 있는 상황에서 사용
- react 에는 기본적으로 사용이 가능하다.
- 파일 확장자를 .module.css 로 부여해야 한다.
- react component 처럼 사용 가능