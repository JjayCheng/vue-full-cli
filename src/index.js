import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './store/store';

// 全局样式
import './common/style/reset.styl';
import './common/style/base.styl';

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  el: '#app',
  router: router(),
  store: store(),
  components: { App },
  template: '<App/>'
})