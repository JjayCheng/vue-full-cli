import Vuex from 'vuex';
import defaultState from './state/state';
import getters from './getters/getters';

const isDev = process.env.NODE_ENV === 'development';

export default () => {
  const store = new Vuex.Store({
    strict: isDev, // strict是否允许外部修改, 正式环境需关闭
    state: defaultState,
    getters,
    mutations: { // 同步修改数据
      updateCount(state, num) {
        state.count = num;
      }
    },
    actions: { // 异步修改数据
      updateCountAsync(store, data) {
        setTimeout(() => {
          store.commit('updateCount', data.num);
        }, data.time)
      }
    }
  });
  if(module.hot) {
    module.hot.accept([
      './state/state',
      './getters/getters'
    ], () => {
      const newGetters = require('./getters/getters').default;
      const newState = require('./state/state').default;
      store.hotUpdate({
        state: newState,
        getters: newGetters
      });
    });
  }
  return store;
}