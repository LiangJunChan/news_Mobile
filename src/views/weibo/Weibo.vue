<template>
 <div id="weibo">
   <NavBar class="nav-bar"><div slot="center">微博热搜</div></NavBar>
   <Scroll class="content">
     <DataList :dataList='weiboData'></DataList>
   </Scroll>
 </div>
</template>

<script>
import {getWeiboData} from 'network/getData.js'
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll"
import DataList from 'components/content/data/DataList'
 export default {
   name: 'Weibo',
   data () {
     return {
       weiboData:[]
     }
   },
   components: {
     NavBar,
     Scroll,
     DataList
   },
   methods:{
     getData(){
       return getWeiboData().then(res=>{
         this.weiboData = res.data.data.list
        //  console.log(this.weiboData);
       })
     }
   },
   created(){
     this.getData()
   },
 }
</script>

<style scoped>
#weibo {
  height: 100vh;
}
.nav-bar {
  background-color: #F56C6C;
  color:#fff
}
.content {
  position: absolute;
  /* top: 44px;
  bottom: 49px; */
  height: calc(100% - 44px - 59px);
  overflow: hidden;
}
 
</style>
