<template>
<div class="commets">
  <div class="comment">
    <div class="submitbox">
      <h3>提交评论</h3>
      <div>
        <mt-field placeholder='请输入评论内容' type='textarea' row='4' v-model='inputVal'></mt-field>
        <mt-button size='small' @click.native='handleSubmit'>发表</mt-button>
      </div>
    </div>
    <div class="commentbox">
      <h3 class="line">评论详情</h3>
      <ul>
        <li v-for="(item,index) in commentList" :key='index'>
          <h4 class="comment-content">{{item.content}}</h4>
          <p><span class="comment-user">{{item.user_name}}</span><span class="comment-time">{{item.add_time | fmtTime}}</span></p>
        </li>
      </ul>
    </div>
    <div class="button-group">
      <mt-button type='danger' size='large' plain @click='loadMore' v-if="hasMore">加载更多</mt-button>
      <mt-button disabled size='large' plain v-else>没有更多了</mt-button>
    </div>
  </div>
 </div>
 </template>
<script>
import {getCommentList, submitComment} from '@/api'
import qs from 'qs'
import { Toast } from 'mint-ui'
export default {

  props: ['id'],
  data () {
    return {
      inputVal: '',
      pageindex: 1,
      commentList: [],
      hasMore: true
    }
  },
  created () {
    this.initComment()
  },
  methods: {
    initComment () {
      getCommentList(this.id, this.pageindex)
        .then(res => {
          console.log(res)
          // this.commentList = res.message
          let tempArr = this.commentList
          this.commentList = [...tempArr, ...res.message]
          if (res.message.length < 10) {
            this.hasMore = false
          }
        })
    },
    loadMore () {
      this.pageindex += 1
      this.initComment()
    },
    handleSubmit () {
      let content = {content: this.inputVal}
      let contentstr = qs.stringify(content)
      if (!this.inputVal.trim()) {
        Toast('评论内容不能为空')
      } else {
        submitComment(this.id, contentstr)
          .then(res => {
            Toast({
              message: '发表成功',
              iconClass: 'icon icon-success'
            })
            this.inputVal = []
            this.commentList = []
            this.pageindex = 1
            this.hasMore = true
            this.initComment()
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.inputbox {
  border: 1px solid #999;
}
.comment h3 {
  font-weight: bold;
  margin: 10px 0;
  font-size: 14px;
}
.line {
  border-top: 1px solid #999;
  padding-top: 10px;
}
.commentbox{
  li:not(:last-child) {
    border-bottom: 1px solid #999;
    margin: 5px 0;
  }
  p {
    font-size: 14px;
  }
  .comment-content {
    color: #999;
    font-size: 14px;
  }
}
.comment-user, .comment-time {
  font-size: 12px;
  color: #26a2ff;
}
</style>
