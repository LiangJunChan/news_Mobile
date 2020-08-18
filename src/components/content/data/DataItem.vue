<template>
  <div>
    <el-container>
      <!-- <el-header>Header</el-header> -->
      <el-main>
        <!-- <div class="title" @click="goZh(dataItems.link)">{{num+1}} {{dataItems.title}}</div> -->
        <div>
          <a :href="dataItems.link" target="_blank">{{num+1}}. {{dataItems.title}}</a>
        </div>
        <div class="hot">{{dataItems.other}}</div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "DataItem",
  props: {
    dataItems: {
      type: Object,
      default(){
        return {}
      }
    },
    num:Number
  },
  data() {
    return {
      index:0
    };
  },
  components: {},
  methods:{
    // goZh(link){
    //   window.location.href= link;return false
    // }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
  color: #000;
}
.hot {
  font-size: 12px;
  margin-top: 10px;
}
.el-main {
  /* background-color: #e9eef3; */
  background-color: #fff;
  color: #333;
  text-align: left;
  /* line-height: 160px; */
  width: 100%;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
