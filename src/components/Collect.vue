<template>
    <div>
      <MHeader :back="true">收藏</MHeader>
       <!--{{collects}}-->
      <ul>
        <li v-for="book in collects">
          <img :src="book.bookCover">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <span>{{book.bookPrice}}</span>
            </div>
        </li>

      </ul>
      <button @click="del">删除</button>
    </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import {mapState,mapMutations} from 'vuex';
  import * as types from '../vuex/mutations-types';
    export default {
          created(){

          },

        methods: {
          ...mapMutations([types.REMOVE_COLLECT]),
          del(){

            this[types.REMOVE_COLLECT]();
            console.log(5);
          }
        },
        computed: {  ...mapState(['collects'])},
        components: {MHeader}
    }
</script>

<style scoped lang="less">
  ul{
  li{
    margin: 10px;
    display: flex;
    font-size: 16px;
    border-bottom: 1px solid darkkhaki;
  img{
    width: 100px;
    height: 120px;
  }
  div{
    display: flex;
    flex-direction: column;
  /*p{text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}*/

  }
  }
  }

</style>
