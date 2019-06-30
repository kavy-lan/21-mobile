<template>
<div class="home">
  <mt-swipe :auto="4000" class="swiper">
  <mt-swipe-item v-for="(item,index ) in imgList" :key='index'><img :src="item" alt="轮播图"></mt-swipe-item>

</mt-swipe>
<div>
  <ul class="nav-box">
    <li class="nav-item" @click="jumpTo('newslist')">
      <i><img src="../assets/menu01.png" alt=""></i>
      <p>新闻资讯</p>
    </li>
    <li class="nav-item" @click="jumpTo('imglist')">
      <i><img src="../assets/menu02.png" alt=""></i>
      <p>图片分享</p>
    </li>
    <li class="nav-item" @click="jumpTo('goodslist')">
      <i><img src="../assets/menu03.png" alt=""></i>
      <p>商品购买</p>
    </li>
    <li class="nav-item">
      <i><img src="../assets/menu04.png" alt=""></i>
      <p>留言反馈</p>
    </li>
    <li class="nav-item">
      <i><img src="../assets/menu05.png" alt=""></i>
      <p>视频分区</p>
    </li>
    <li class="nav-item">
      <i><img src="../assets/menu06.png" alt=""></i>
      <p>联系我们</p>
    </li>
  </ul>
</div>
<tab-bar></tab-bar>
</div>
</template>
<script>
import TabBar from '@/components/tab-bar'
export default {
  components: {
    TabBar
  },
  data () {
    return {
      imgList: [
        'http://m.itcast.cn/images/newslide/homepageandphone/20181528141522828.jpg',
        'http://m.itcast.cn/images/newslide/homepageandphone/20180918170957294.jpg',
        'http://m.itcast.cn/images/newslide/homepageandphone/20184827134845878.jpg'
      ]
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
.home {
  .swiper {
    height: 275px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .nav-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    .nav-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
      margin: 10px 0;
      cursor: pointer;
      p {
        font-size: 20px;
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
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
  color: #26a2ff;
}
}
</style>
