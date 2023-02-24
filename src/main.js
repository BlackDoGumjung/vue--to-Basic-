const { createApp } = require('vue');

//프로젝트 시작시 필요한 개념, 기초??????

// 1. import { createApp } from 'vue'
//모든 vue 앱은 createApp 함수를 사용하여 앱 인스턴스를 생성함
//여기에서 js 인스턴스란? 생성자 함수(Class)인 거푸집에서 찍어낸 칼 같은 존재! 
//(생성된 인스턴스는 클래스, 프로토타입이 가진 프로퍼티, 메소드를 상속 받음!)

// 2. import App from './App.vue';
import App from './App.vue';

// 3. const App = createApp({
//  앱 인스턴스를 만들면, 내부에는 "최상위 컴포넌트 옵션", 즉 "App" 이 필요함!
//})
// 그래서... 
// 4. const App = createApp(App)

createApp(App).mount('#app');
// 4. app.mount('#app')
// app 인스턴스는 .mount()가 호출될 때까지 렌더링 x
// 고로, DOM 엘리먼트, 셀렉트 문자열이 인자로 필요!
// css선택자처럼 지정해주면 ㅇㅋ
