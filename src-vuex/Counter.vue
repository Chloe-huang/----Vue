<template>
    <div>
        <!--{{$store.state.count}}  第一种写法-->
        {{count}}
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex';//第三种写法
    export default {
        data() {
            return {msg: 'hello'}
        },
        created() {
        },
        methods: {
          ...mapMutations(['increment','decrement']),//将mutation中的方法映射到了组件内部
          add(){
            this["increment"](2);
//            this.$store.commit('increment',2);//第二个参数只能写一个，如果这些多个要用{}包起来    第一种写法
          },
          reduce(){
            this['decrement'](5);
          }
        },
        computed: {
          ...mapState(['count']) //第三种写法
//          count(){  //第二种写法
//            return this.$store.state.count;
//          }
        },
        components: {}
    }
</script>

<style scoped>


</style>
