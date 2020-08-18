<template>
 <div id="weixin">
   <NavBar class="nav-bar"><div slot="center">微信热点</div></NavBar>
   <Scroll class="content">
     <DataList :dataList='weixinData'></DataList>
   </Scroll>
 </div>
</template>

<script>
import {getWeixinData} from 'network/getData.js'
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll"
import DataList from 'components/content/data/DataList'
 export default {
   name: 'Weixin',
   data () {
     return {
      weixinData:[]
     }
   },
   components: {
     NavBar,
     Scroll,
     DataList
   },
   methods:{
     getData(){
       return getWeixinData().then(res=>{
         this.weixinData = res.data.data.list
         console.log(this.weixinData);
       })
     }
   },
   created(){
     this.getData()
   },
 }
</script>

<style scoped>
#weixin {
  height: 100vh;
}
.nav-bar {
  background-color: #67C23A;
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
