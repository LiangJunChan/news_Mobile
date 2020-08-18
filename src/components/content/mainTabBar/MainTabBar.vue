<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/zhihu" activeColor="#4395D5">
        <img slot="item-icon" src="@/assets/img/tabbar/zhihu.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/zhihu_active.svg" alt />
        <div slot="item-text">知乎</div>
      </tab-bar-item>
      <tab-bar-item path="/weibo" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/weibo.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/weibo_active.svg" alt />
        <div slot="item-text">微博</div>
      </tab-bar-item>
      <tab-bar-item path="/weixin" activeColor="#71C039">
        <img slot="item-icon" src="~assets/img/tabbar/weixin.svg" alt />
        <img slot="item-icon-active" src="~/assets/img/tabbar/weixin_active.svg" alt />
        <div slot="item-text">微信</div>
      </tab-bar-item>
      <tab-bar-item path="/toutiao" activeColor="#C73520">
        <img slot="item-icon" src="~assets/img/tabbar/toutiao.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/toutiao_active.svg" alt />
        <div slot="item-text">头条</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  data() {
    return {
      // blue:'blue'
    };
  },
  components: {
    TabBar,
    TabBarItem
  },
};
</script>

<style scoped>
/* @import "assets/css/base.css"; */
</style>
