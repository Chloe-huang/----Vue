import Vue from 'vue';
import App from './App.vue';
import  Vuex from 'vuex';
Vue.use(Vuex);

let state={count:0};//相当于data:{}  和组件中的数据功能一样
let mutations={  //相当于method
  increment(state,val){//state代表着状态 默认参数  val是传进来的参数
    state.count+=val;
  },
  decrement(state,val){
    state.count-=val;
  }
};

const getters={
  type:(state)=>state.count%2?'奇数':'偶数'
};
let store=new Vuex.Store({
  state , //state:state
  mutations,
  getters,
  strict:true //开启严格模式，只能通过mutation 来改变  否则会报错
});

new Vue({
  el:'#app',
  store,//会产生一个this.$store  组件都会拥有一个$store属性
  ...App
});
