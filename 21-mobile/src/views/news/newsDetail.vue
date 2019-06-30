<template>
<div class="news-detail">
  <my-header mytitle='资讯详情'></my-header>
  <div>
    <h1 class="news-title">{{detail.title}}</h1>
    <p class="news-info">
      <span>{{detail.add_time | fmtTime}}</span>
      <span>{{detail.click}}次浏览</span>
      <span>创智播客专题</span>
    </p>
  </div>
  <div class="news-content" v-html="detail.content"></div>
  <comment :id="$route.params.id"></comment>
  </div>
</template>
<script>
import {getnewsDetail} from '@/api'
import MyHeader from '@/components/myheader'
import Comment from '@/components/comment'
export default {
  data () {
    return {
      detail: []
    }
  },
  components: {
    MyHeader,
    Comment
  },

  created () {
    this.init()
  },
  methods: {
    init () {
      getnewsDetail(this.$route.params.id)
        .then(res => {
          console.log(res)
          this.detail = res.message[0]
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.news-detail {
  padding: 40px 0 0 0;
  .news-title {
    font-size: 14px;
    font-weight: bold;
  }
  .news-info {
    font-size: 12px;
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
  }
  .news-content {
    font-size: 12px;
  }
}

</style>
