<template>
    <div>
      <!--正在加载时-->
       <div v-if="isLoading">
         <!--<div class="spinner"></div>-->
         <div class="loading"> <span></span> <span></span> <span></span> <span></span> <span></span> </div>

       </div>

      <!--已经在加载完成而且数据是空的则显示暂无数据-->
       <div v-if="!isLoading&&!data.length"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508909303575&di=84b89d124c4f313f13b569b3d8410a9c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1677779351%2C3645026260%26fm%3D214%26gp%3D0.jpg" alt=""></div>
    </div>

</template>

<script>
    export default {
      props:{
        isLoading:{type:Boolean},
        data:{type:Array}
      },
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

<style scoped>
  /*.spinner {*/
    /*width: 40px;*/
    /*height: 40px;*/
    /*margin: 100px auto;*/
    /*background-color: goldenrod;*/

    /*border-radius: 100%;*/
    /*-webkit-animation: scaleout 1.0s infinite ease-in-out;*/
    /*animation: scaleout 1.0s infinite ease-in-out;*/
  /*}*/

  /*@-webkit-keyframes scaleout {*/
    /*0% { -webkit-transform: scale(0.0) }*/
    /*100% {*/
      /*-webkit-transform: scale(1.0);*/
      /*opacity: 0;*/
    /*}*/
  /*}*/

  /*@keyframes scaleout {*/
    /*0% {*/
      /*transform: scale(0.0);*/
      /*-webkit-transform: scale(0.0);*/
    /*} 100% {*/
        /*transform: scale(1.0);*/
        /*-webkit-transform: scale(1.0);*/
        /*opacity: 0;*/
      /*}*/
  /*}*/
  .loading{ width: 150px; height: 15px; margin: 0 auto; margin-top:100px; text-align: center; } .loading span{ display: inline-block; width: 15px; height: 100%; margin-right: 5px; background: lightgreen; -webkit-animation: load 1.04s ease infinite; } .loading span:last-child{ margin-right: 0; } @-webkit-keyframes load{ 0%{ opacity: 1; } 100%{ opacity: 0; } } .loading span:nth-child(1){ -webkit-animation-delay:0.13s; } .loading span:nth-child(2){ -webkit-animation-delay:0.26s; } .loading span:nth-child(3){ -webkit-animation-delay:0.39s; } .loading span:nth-child(4){ -webkit-animation-delay:0.52s; } .loading span:nth-child(5){ -webkit-animation-delay:0.65s; }

</style>
