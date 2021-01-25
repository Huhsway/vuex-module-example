<template>
  <div id="app">
    <h1>
      module1
    </h1>
    <h2>{{ module1ValueWithHello }}</h2>
    <h3>{{ module1 }}</h3>
    <br />

    module1 값 변경
    <input type="text" v-model="module1Value">
    <button type="button" @click="changeModule1Value">변경</button>
    <br />
    <h1>
      module2
    </h1>
    <h2>{{ module2ValueWithHello }}</h2>
    <h3>{{ module2 }}</h3>
    module2 값 변경
    <input type="text" v-model="module2Value">
    <button type="button" @click="changeModule2Value">변경</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      module1Value: '',
      module2Value: ''
    };
  },
  methods: {
    changeModule1Value() { // action에 사용자 값 넘김
      this.$store.dispatch('module1/setModule1Value', this.module1Value);
    },
    changeModule2Value() {
      this.$store.dispatch('module2/setModule2Value', this.module2Value);
    }
  },
  computed: {
    ...mapState({
      module1: state => state.module1.module1Value,
      module2: state => state.module2.module2Value
    }),
    ...mapGetters({ // Getter로 가져와 출력
      module1ValueWithHello: 'module1/module1ValueWithHello',
      module2ValueWithHello: 'module2/module2ValueWithHello'
    }) // 잘 보면 module1의 state는 명확하게 .찍어서 모듈화 시켜 성격에 맞게 분리 해놨지만 getters와 action은 (module1ValueWithHello, setModule1Value) 전역으로 동작 그래서 다른 모듈과 충돌할 가능성이 있음 namespace로 해결
  },
  components: {
  }
}
</script>

