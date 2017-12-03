
import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('swiper/dist/css/swiper.css');
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

import VueLazyload from 'vue-lazyload'


// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2861488593,1651617597&fm=111&gp=0.jpg',
  loading: 'http://img0.imgtn.bdimg.com/it/u=2829588308,2847938420&fm=27&gp=0.jpg',
  attempt: 1
});

import store from './vuex';

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
