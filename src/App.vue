<template>
<div >
<keep-alive>
  <router-view></router-view>
</keep-alive>
  <Tab></Tab>
</div>
</template>

<script>
  import Tab from './base/Tab.vue';
export default {

  components:{Tab},

}
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  ul,li{list-style: none}
  input,button{
    -webkit-appearance: none;
  }
  body,html{font-size: 14px;
    width: 100%;
    height: 100%;overflow: hidden;}
  .content{
 padding-top: 50px;
    position: fixed;
    top: 0;
    bottom: 50px;
    left: 0;
    right: 0;overflow-y: scroll;
  }
</style>

