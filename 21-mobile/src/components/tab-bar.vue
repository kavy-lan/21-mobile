<template>
  <div class="nav-footer">
    <div class="nav-footer">
      <div class="nav-footer-item" :class="path==='/' ? 'active': ''" @click="jumpTo('home')"><span class="iconfont icon-home"></span><span>首页</span></div>
      <div class="nav-footer-item"  :class="path==='/member' ? 'active': ''"  @click="jumpTo('member')"><span class="iconfont icon-weibiaoti2fuzhi12" ></span><span>会员</span></div>
      <div class="nav-footer-item"  :class="path==='/car' ? 'active': ''"  @click="jumpTo('car')"><span class="iconfont icon-gouwuche"></span><span>购物车</span></div>
      <div class="nav-footer-item"  :class="path==='/search' ? 'active': ''"  @click="jumpTo('search')"><span class="iconfont icon-xiazai17" ></span><span>搜索</span></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      path: this.$route.path
    }
  },
  methods: {
    jumpTo (name) {
      this.$router.push({name: name})
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-footer {
  font-size: 16px;
  display: flex;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid #e7e7e7;
  background-color: #fff;
  .nav-footer-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    .badge {
      position: absolute;
      top: 3%;
      left: 50%;
      width: 14px;
      height: 14px;
      border-radius: 7px;
      background-color: #e4393c;
      text-align: center;
      line-height: 14px;
      color: white;
      font-size: 12px;
    }
  }
}
.active {
  color: red
}
</style>
