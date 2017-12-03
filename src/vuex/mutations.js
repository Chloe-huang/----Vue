import * as types from './mutations-types';
export default {
  [types.ADD_COLLECT](state,book){ //[]会将里面的内容作为变量
    //判断当前ID是否和要添加的ID相同 如果相同则取消push
    let flag=state.collects.some(item=>item.id===book.id);
    if(flag)return;
    state.collects.push(book);
    // localStorage.setItem('c',JSON.stringify(state.collects));
  },
  [types.REMOVE_COLLECT](state,book){
 // return state.collects.filter(item=>item.id!==book.id);
 //    state.collects.length--;
   state.collects.slice(0,state.collects.length-1);
  }
}
