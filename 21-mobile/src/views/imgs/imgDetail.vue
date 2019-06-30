<template>
  <div class="img-detail">
    <my-header mytitle='图文详情'></my-header>
    <div v-for="(item,index) in imgdesc" :key='index'>
      <h3 class="img-title">{{item.title}}</h3>
      <p class="img-info">
        <span class="time">{{item.add_time | fmtTime}}</span>
        <span>{{item.click}}次浏览</span>
        <span>分类：xxxx</span>
      </p>
    </div>
    <ul>
      <li>
        <vue-preview :slides="dhumImgs" @close="handleClose"></vue-preview>
      </li>
    </ul>
    <div class="content">{{imgdesc[0].content}}</div>
    <comment :id="$route.params.id"></comment>
  </div>
</template>
<script>
import MyHeader from '@/components/myheader'
import Comment from '@/components/comment'
import {imgDesc, getDhumbImgs} from '@/api'
export default {
  components: {
    MyHeader,
    Comment

  },
  data () {
    return {
      imgdesc: '',
      dhumImgs: []
    }
  },
  mounted () {
    imgDesc(this.$route.params.id)
      .then(res => {
        console.log(res)
        this.imgdesc = res.message
      })
    getDhumbImgs(this.$route.params.id)
      .then(res => {
        console.log(res)
        res.message.map(item => {
          item.msrc = item.src
          item.w = 600
          item.h = 400
        })
        this.dhumImgs = res.message
      })
  },
  methods: {
    handleClose () {
      console.log('close event')
    }
  }

}
</script>
<style lang="scss">
  img {
    width: 100%;
    height: 100%;
  }
  li > div > div{
    display: flex;
    flex-wrap: wrap;
    &>figure{
      width: 33.33%;
    }
  }
</style>

<style lang="scss" scoped>
.img-detail {
  margin-top: 40px;
  margin-bottom: 55px;

  .img-title {
    font-size: 16px;
    font-weight: bold;
  }
  .img-info {
    display: flex;
    justify-content: space-around;
    color: #26a2ff;
    font-size: 14px;
  }
  .content {
    font-size: 14px;
  }
}
</style>
