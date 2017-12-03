<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" :key="slide">
      <img :src="slide" class="img"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    props:{
      swiperSlides:{type:Array,default:function () {
        return []
      }}
    },


    data() {
      return {
        swiperOption: {
          loop:true, //loop 属性设置或返回视频是否应该在结束时再次播放 即循环播放
          autoplay: 3500,
          autoplayDisableOnInteraction: false,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          observeParents:true,
        },

      }
    }
  }
</script>

<style scoped>
.img{
  width: 100%;}

</style>
