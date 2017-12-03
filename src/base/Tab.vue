<template>
    <ul>
      <router-link to="/" exact tag="li">
        <i class="iconfont icon-shouye"></i>
        首页</router-link>
      <router-link to="/list"  tag="li">
        <i class="iconfont icon-liebiaoyetuanqi"></i>
        列表页</router-link>
      <router-link to="/collect"  tag="li">
          <i class="iconfont icon-shoucang"></i>
        收藏页</router-link>
      <router-link to="/add"  tag="li">
         <i class="iconfont icon-icon02"></i>
        添加页</router-link>
    </ul>
</template>
<!--flex布局
   display:flex; flex:1;//里面的内容均分 1:1:1 ...
   flex-direction:column;//纵向排列
   align-item:center;//垂直居中
   justify-content: center;
-->
<script>
    export default {
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style scoped lang="less">
ul{
  position: fixed;
  height: 60px;
  bottom: 0;
  left: 0;
  width: 100%;display: flex;
  background:#efe7c9;
  border-top: 1px solid slategray;
 li{
   display: flex;
   color:#a2a2a2;
   flex: 1;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
  .router-link-active{
    text-shadow: 1px 1px 1px #999;
  }
}

</style>
