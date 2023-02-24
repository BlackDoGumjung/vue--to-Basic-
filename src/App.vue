<template>
  <div id="app">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <button-counter
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @enlarge-text="postFontSize += 0.1"
      />
    </div>
    <span>message : {{ message }}</span>
    <!-- html 밖에서는 {{}}, 안에서는 b-vind:id="" -->
    <!-- v 접두사가 있는 속성을 디렉티브라고 함... v-html, v-bind 등 -->
    <!-- v-for, v-on, v-slot 제외 모든 디렉티브 속성 값은 js 단일 표현식이어야함 : 표현식 값 변경될 때 반응적 업데이트 -->

    <!-- <div><a :[attributeName]="url"></div>
    <div><a @[eventName]="doSomething"></div> -->
    <!--디렉티브 인자를 []로 감싸서 js 표현식으로 사용할 수 있음.
        attributeName, eventName은 js 표현식으로 동적 평가, 평가 값은 인자 최종값으로 사용됨 (뭔 소리지...)
        attributeName 속성값이 href면 b-vind:href와 같음
        마찬가지로 eventName 속성값이 focus면 v-on:focus와 같음
        단, String, null로 평가돼야함 (아니면 에러), 소문자만 사용해야함 (someAttr대신 someattr 같이...)
    -->
    <div>{{ count }}</div>
    <button @click="increment">+</button>

    <div v-for="book in author.books">{{ book }}</div>
    <p>
      책을 가지고 있음 : <span>{{ bookMsg }}</span>
    </p>
    <div>{{ now }}</div>
    <!-- computed로 입력한 데이트 값은 업데이트 되지 않음 -->
    <div>{{ firstName }}</div>
    <div>{{ lastName }}</div>
    <div>{{ fullName }}</div>
    <!-- <button v-on:submit.prevent="onSubmit"></button> -->
    <!-- 이름(v로 시작):인수(단축문법 뒤 사용).수식어(점으로 시작)="값"(표현식으로 해석) -->

    <!-- !!!!클래스 스타일 바인딩!!!! -->

    <div :class="{ active: isActive, 'text-danger': hasError }">Red</div>
    <div :class="classObj">Red</div>
    <!-- 위와 아래는 동일한 경우임, true인 클래스가 보인다고 생각하면 됨 -->
    <!-- data나 computed에서 객체 할당하는 방법으로 쓰임 -->

    <div :class="[activeClass, errorClass]">Red</div>
    <!-- 배열로 바인딩하는 경우 -->

    <div :class="[isActive ? activeClass : '', errorClass]">Red</div>
    <div :class="[{ active: isActive }, errorClass]">Red</div>
    <!-- 삼항표현식으로 이용하여 목록 내 클래스, errorClass는 항상 적용, activeClass는 isActive가 트루일 때만 -->

    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Red</div>
    <div :style="{ color: activeColor, 'font-size': fontSize + 'px' }">Red</div>
    <div :style="styleObj">Red</div>
    <!-- 인라인 방식 styleObj 방식으로 넣는 게 제일 깔끔 -->

    <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }"></div>
    <!-- 다중 값 배열도 제공 가능 -->

    <p v-if="awesomeawesome">Vue 배우기</p>
    <p v-else>그만 배우기</p>
    <button @click="awesome">전환</button>

    <!-- 둘 이상의 엘리멘트 전환하려면? <template>으로 랩핑해서 이용하기 -->
    <template v-if="keepStuding">
      <div>vue 계속 배우기</div>
    </template>
    <!-- v-else, v-else-if도 사용 가능 -->
    <h1 v-show="ok">hi!</h1>
    <!-- v-show는 display를 block, none으로 전환하는 거라 아예 사라지는 거임, template 지원 안해서 걍 v-if 쓰는 게 나을 듯 -->
    <!-- v-show는 항상 렌더링 되기 때문에 초기 렌더링 비용이 높음, 고로 이후 자주 변환해야되는 경우에만 사용하기, 실행 중 조건이 변경되지 않으면 v-if -->

    <!-- 중첩 v-for -->
    <li v-for="item in items">
      <span v-for="childItem in item.children">
        {{ item.msg }} {{ childItem }}
      </span>
    </li>
    <!-- v-for 범위 내에서는 상위 범위에 대한 접근 권한 있음, of를 사용해도 됨 -->

    <ul>
      <!-- template은 여러 엘리먼트 블록을 렌더링할 떄 이용한다, 이때 key값은 같은 곳에 있어야 함 -->
      <template v-for="(value, key, index) of vForObj" :key="key">
        <li>{{ index }}</li>
        <li>{{ key }}</li>
        <li>{{ value }}</li>
      </template>

      <!-- 숫자 돌려도 되고, 1부터 시작됨 -->
      <li v-for="n in 3">{{ n }}</li>

      <!-- evenNumber만 가져오는 방식 -->
      <li v-for="number in evenNumbers">{{ number }}</li>
    </ul>

    <!-- 이벤트 핸들러는 : 인라인 핸들러(트리거 될 때 실행되는 인라인 js), 메서드 핸들러(정의된 메서드 이름 및 메서드 가리키는 경로)로 나뉨 -->
    <button @click="greet">환영합니다!!</button>

    <!-- 사용자 인자를 메서드에 전달하는 인라인 핸들러 방식-->
    <button @click="say('잘가!')">잘가</button>

    <!-- DOM 이벤트 객체 접근해야 하는 경우, $event 사용하여 메서드 전달 or 인라인 화살표 함수 사용 -->
    <button @click="warn('잘가!', $event)">잘가</button>
    <!-- 버튼 누르는 그 이벤트에 바로 접근...!! -->
    <button @click="(event) => warn('잘가!', event)">잘가</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import ButtonCounter from './components/ButtonCounter';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ButtonCounter,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'make addcounter' },
        { id: 2, title: 'make subcounter' },
        { id: 3, title: 'make * counter' },
      ],
      postFontSize: 1,
      name: 'gj',
      message: 'freedom!',
      count: 1,
      someObj: {},
      author: {
        name: 'GJ',
        books: ['VUE 1', 'VUE 2', 'VUE 3'],
      },
      numbers: [1, 2, 3, 4, 5],
      firstName: 'good',
      lastName: 'job',
      isActive: true,
      hasError: null,
      classObj: {
        // 객체 형식으로 쓸 때도 - 로 연결된 클래스명을 ''로 묶어줘야한다는 걸 잊지 말기
        active: true,
        'text-danger': false,
      },
      activeClass: 'active', // active와 text-danger 모두 넣는 형식
      errorClass: 'text-danger',
      activeColor: 'orange',
      fontSize: 16,
      styleObj: {
        color: 'sky',
        fontSize: '10px',
      },
      awesomeawesome: true,
      keepStuding: true,
      ok: true,
      vForObj: {
        title: 'v for로 목록작성',
        author: 'gj',
        publishDate: '2023-02-24',
      },
    };
  },
  computed: {
    // 일부가 변경될 때만 실행, 기본적으로 getter 전용
    // (수정 가능한 속성 필요할 때는 getter, setter 모두 이용 : 이 부분 잘 모르겠음)
    // 어떻게 활용하면 될지도 의문... method를 쓰면 될텐데 setter를 이용해야할 예가 있을까????
    bookMsg() {
      return this.author.books.length > 0 ? 'Yes' : 'No';
    },
    now() {
      return Date.now();
    },
    fullName: {
      //getter
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      //setter
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ');
      },
    },
    classObj() {
      // 객체를 반환하는 computed 속성으로 클래스를 할당할 수도 있음 (이건 좀 익숙해져야할 듯...)
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      };
    },
    evenNumbers() {
      return this.numbers.filter((n) => n % 2 === 0);
    },
  },
  methods: {
    // 메서드는 생명주기훅, 다른 메서드에서 호출 가능
    increment() {
      // 화살표 함수는 this값 접근을 못하게 되니 increment: () => {} 형식은 안됨
      this.count++;
    },
    awesome() {
      this.awesomeawesome = !this.awesomeawesome;
      this.keepStuding = !this.keepStuding;
    },
    greet(event) {
      alert(`hi ${this.name}`);
      if (event) {
        alert(event.target.tagName);
      }
    },
    warn(message, event) {
      if (event) {
        event.prevenDefault();
      }
      alert(message);
    },
  },
  //렌더링이 끝난 후 실행
  mount() {
    console.log(this.count);
    this.count = 2;
    const newObj = {};
    this.someObj = newObj;
    console.log(newObj === this.someObj); // false
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  color: red;
}

.text-danger {
  font-size: 25px;
  border: 1px solid white;
}
</style>
