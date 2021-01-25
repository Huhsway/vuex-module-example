import Vuex from 'vuex';
import Vue from 'vue';

import module1 from './module1'

Vue.use(Vuex);

const module2 = {
  namespaced: true,
  state: {
    module2Value: 'Module 2'
  },
  getters: {
    module2ValueWithHello(state, getters) {
      return 'Hello, ' + state.module2Value;
    }
  },
  mutations: { // mutations는 상태값을 잘 변경해 준다.
    setModule2Value(state, value) {
      state.module2Value = value;
    }
  },
  actions: { // 각 action은 commit을 통해서 mutations를 실행하고
    setModule2Value(context, value) {
      context.commit('setModule2Value', value);
    }
  }
};

const store = new Vuex.Store({
  modules: {
    module1,
    module2
  }
});

export default store;
