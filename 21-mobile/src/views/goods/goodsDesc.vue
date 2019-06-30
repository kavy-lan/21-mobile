<template>
  <div class="goods-desc ">
     <my-header mytitle='图文介绍'></my-header>
    <h3 class="desc-title">{{goodsdesc.title}}</h3>
    <div class="desc-content" v-html="goodsdesc.content"></div>
  </div>
</template>
<script>
import MyHeader from '@/components/myheader'
import {getGoodsdDesc} from '@/api'
export default {
  components: {
    MyHeader

  },
  data () {
    return {
      goodsdesc: ''
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    getGoodsdDesc(this.$route.params.id)
      .then(res => {
        console.log(res)
        this.goodsdesc = res.message[0]
      })
  }
}
</script>
<style lang="scss" scoped>
.goods-desc {
  margin-top: 50px;
  h3 {
    font-weight: bold;
    color: #26a2ff;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .desc-content {
    font-size: 14px;
  }
}
</style>
