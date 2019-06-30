<template>
<div class="goods-comment">
  <my-header mytitle='商品评论'></my-header>
  <comment :id="$route.params.id"></comment>
  </div>
</template>
<script>
import MyHeader from '@/components/myheader'
import Comment from '@/components/comment'
export default {
  components: {
    MyHeader,
    Comment

  }
}
</script>

<style lang="scss" scoped>
.goods-comment {
  margin-top: 55px;
}
</style>
