<template>
    <div>
      <MHeader>列表</MHeader>
       <div class="content">
         <Loading :isLoading="isLoading" :data="books"></Loading>
      <ul v-if="!isLoading||books.length">
       <li v-for="book in books">
         <img v-lazy="book.bookCover">
         <div>
           <h4>{{book.bookName}}</h4>
           <p>{{book.bookInfo}}</p>
           <span>{{book.bookPrice}}</span>
           <div>
            <router-link :to="{name:'detail',params:{id:book.id}}">详情</router-link>
             <a @click="remove(book.id)">删除</a>
           </div>
           <i @click="add(book)">收藏</i>
         </div>
       </li>
      </ul>

       </div>
    </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import Loading from '../base/Loading.vue';
import {mapMutations} from 'vuex';
import * as types from '../vuex/mutations-types';
  import axios from 'axios';
    export default {

        data() {
            return {books:[],isLoading:true}
        },
        created() {
          setTimeout(()=>{
            this. getBooks();
          },1000);

        },
      activated(){this. getBooks();},
        methods: {
          ...mapMutations([types.ADD_COLLECT]),
        add(book){
          this[types.ADD_COLLECT](book);
          this.$router.push('/collect');
        },
          getBooks(){
            axios.get('/api/book').then(res=>{
              this.books=res.data;
              this.isLoading=false;
            });
          },
//          async getBooks(){
//            let res=axios.get('/api/book');
//              this.books=res.data;
//              this.isLoading=false;
//
//          }
          remove(id){
            axios.delete('./api/book?id='+id).then(res=>{
              this.books=this.books.filter(item=>item.id!==id);//通过ID删除某一项，成功后将页面原有的数据也一并删除
            })
          }
        },
        computed: {},
        components: {MHeader,Loading}
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
     div{
       display: flex;flex-direction: row;
      a{
        padding: 5px;}
     }
    }
  }
}

</style>
