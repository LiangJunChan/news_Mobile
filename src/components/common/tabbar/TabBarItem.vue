<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive" ><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive:true
    };
  },
  computed:{
    isActive(){
      // return this.$route.path === this.path
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path).catch(err=>{})
    }
  },
  components: {},
};
</script>

<style scoped>
.tab-bar-item {
  padding: 5px;
  flex:1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  /* margin-top: 2px; */
  vertical-align: middle;
  /* margin-bottom: 2px; */
}
/* .active{
  color: red;
} */
</style>
