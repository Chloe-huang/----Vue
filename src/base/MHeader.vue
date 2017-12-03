<template>
    <div class="header">
      <i class="iconfont icon-houtui" v-if="back" @click="go"></i>
      <!--插槽 将使用MHeader时夹着的内容 传递到当前的组件slot中-->
        <slot></slot>
    </div>
</template>

<script>
    export default {
      props: {
        back: {
          type: Boolean,
          default:false
        }
      },
      data() {
        return {msg: 'hello'}
      },
      created() {
      },

      methods:{

        go() {
          this.$router.go(-1);//  或者写this.$router.back()}
        },

        components: {}
      }
    }
</script>

<style scoped lang="less">
.header{
  z-index: 999;
  height: 50px;background: #b1705a;color: white;text-align: center;line-height: 50px;
  position: relative;
 i{
   position: absolute;
   left: 20px;
   font-size: 20px;
 }
}

</style>
