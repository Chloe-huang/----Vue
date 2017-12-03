<template>
    <div>
      <MHeader :back="true" ref="header">首页</MHeader>
      <div class="content" ref="content">
        <!--内容区域-->

         <swiper :swiperSlides="sliders" ></swiper>

        <!--加载  当数据是空的时候不能一直加载着,如果数据加载完成 还要判断当前数据是否存在  如果不存在则显示无数据   如果有数据则隐藏-->
        <Loading :isLoading="isLoading" :data="hot"></Loading>

        <!--获取热门图书-->
     <!--当数据加载完成而且有数据-->
      <template v-if="!isLoading||hot.length">
        <h3>热门图书</h3>
        <ul class="hot" >
          <li v-for="h in hot">
            <img :src="h.bookCover" alt="">
            <span>{{h.bookName}}</span>
            <span>{{h.bookPrice}}</span>
          </li>
        </ul>
      </template>
      </div>

    </div>

</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import Swiper from '../base/Swiper.vue';
  import Loading from '../base/Loading.vue';
  import axios from 'axios';

    export default {
        data() {
            return {
              sliders:[],
              hot:[],
              isLoading:true
            }
        },
        created() {
         this. getSliders();
         setTimeout(()=>{
           this. getHot();
         },1000);

        },
      mounted(){
                this.$nextTick(()=>{
                  this.$refs.content.addEventListener('scroll',(e)=>{
                      this.$refs.header.$el.style.opacity =1- this.$refs.content.scrollTop/100;


            })
          })
      },
        methods: {

          getSliders(){
            axios.get('/api/sliders').then(res=>{
//            console.log(res.data);
              this.sliders=res.data;
            })
          },
          getHot(){
            axios.get('/api/book').then(res=>{
              this.hot=res.data;
              this.isLoading=false;
            })
          }
        },

        components: {MHeader,Swiper, Loading}
    }
</script>

<style scoped lang="less">

.hot{
  display: flex;
  flex-wrap: wrap;
  li{
    padding: 5px;box-sizing: border-box;
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    img{
      height: 100px;
      width: 80%;}

    :nth-child(3){
      color:#2a2a2a;
      font-weight: 200;
    }
  }
}

</style>
