<template>
 <div id="toutiao">
   <NavBar class="nav-bar"><div slot="center">头条热点</div></NavBar>
   <Scroll class="content">
     <DataList :dataList='toutiaoData'></DataList>
   </Scroll>
 </div>
</template>

<script>
import {getToutiaoData} from 'network/getData.js'
import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll"
import DataList from 'components/content/data/DataList'
 export default {
   name: 'Toutiao',
   data () {
     return {
      toutiaoData:[]
     }
   },
   components: {
     NavBar,
     Scroll,
     DataList
   },
   methods:{
     getData(){
       return getToutiaoData().then(res=>{
         this.toutiaoData = res.data.data.list
         console.log(this.toutiaoData);
       })
     }
   },
   created(){
     this.getData()
   },
 }
</script>

<style scoped>
#toutiao {
  height: 100vh;
}
.nav-bar {
  background-color: #c73520;
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
