<template>
 <div>
   <DataItem v-for="(item,index) in dataList" :key="item.id" :dataItems='item' :num='index'>
   </DataItem>
 </div>
</template>

<script>
import DataItem from './DataItem'
 export default {
   name: 'DataList',
   props:{
     dataList:{
       type:Array,
       default(){
         return []
       }
     }
   },
   data () {
     return {

     }
   },
   components: {
     DataItem
   }
 }
</script>

<style scoped>

 
</style>
