const module1 = {
    namespaced: true,
    state: {
      module1Value: 'Module 1'
    },
    getters: {
      module1ValueWithHello(state, getters, rootState) {  // state에는 자기 자신의 state와 하위 모듈들의 state 값이 들어오고 상위 모듈들의 경우에는 rootState를 사용해서 들어온다.
        console.log('module1 state', state);
        console.log('module1 rootState', rootState);
        return 'Hello, ' + state.module1Value; 
      } 
    },
    mutations: { // mutations의 경우에는 actions의 context로 들어오는 rootstate를 통해 접근 한 뒤 값을 넘겨 받음
      setModule1Value(state, value) {
        state.module1Value = value;
      }
    },
    actions: {
      setModule1Value(context, value) {
        console.log('module1 context', context);
        context.commit('setModule1Value', value);
      }
    }
  };

  export default module1;