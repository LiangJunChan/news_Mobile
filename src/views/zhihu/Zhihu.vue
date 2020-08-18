<template>
 <div id="zhihu">
   <nav-bar class="nav-bar"><div slot="center">知乎</div></nav-bar>
   <Scroll class="content">
     <DataList :dataList='zhData'></DataList>
   </Scroll>
 </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

import Scroll from "components/common/scroll/Scroll"
import DataList from 'components/content/data/DataList'
import {getZhihuData} from 'network/getData.js'
 export default {
   name: 'Zhihu',
   data () {
     return {
       zhData:[]
     }
   },
   computed:{},
   components: {
     NavBar,
     DataList,
     Scroll
   },
   methods:{
     getZHDate(){
       getZhihuData().then(res=>{
         this.zhData = res.data.data.list
        //  console.log(this.zhData);
       })
     }
   },
   created(){
     this.getZHDate()
   }
 }
</script>

<style scoped>
#zhihu {
  height: 100vh;
}
.nav-bar {
  background-color: #e8f2fe;
}
.content {
  position: absolute;
  /* top: 44px;
  bottom: 49px; */
  height: calc(100% - 44px - 59px);
  overflow: hidden;
}
</style>
