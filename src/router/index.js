import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue';
// import Collect from '../components/Collect.vue';
// import List from '../components/List.vue';
// import add from '../components/add.vue';
// import Detail from ;


// let Home=()=>Promise.resolve({});  //codin'../components/Detail.vue'g split 通过jsonp来加载
Vue.use(Router)

export default new Router({
  routes: [
    {path:'',component:()=>import('../components/Home.vue')},
    {path:'/home',component:()=>import('../components/Home.vue')},
    {path:'/list',component:()=>import('../components/List.vue')},
    {path:'/collect',component:()=>import('../components/Collect.vue')},
    {path:'/add',component:()=>import('../components/add.vue')},
    {path:'/detail/:id',component:()=>import('../components/Detail.vue'),name:'detail'},//name可以随意起 是路径的名字
    {path:'*',redirect:'/home'},

  ]
})
