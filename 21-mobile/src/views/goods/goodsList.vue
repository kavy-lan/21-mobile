<template>
<div class="goods-list">

   <my-header mytitle='商品列表'></my-header>
  <ul
  infinite-scroll-immediate-check="false" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1"
  >
    <!-- router-link的tag属性可以将router-link渲染为指定的标签名 -->
    <router-link class="goods-li" to="" tag="li" v-for="(item,index) in goodslist" :key='index' @click.native="jumpTo(item.id)">
      <div class="goods-container" >
        <img :src="item.img_url" alt="">
        <h4>{{item.title}}</h4>
        <div class="goods-info">
          <div class="price-info">
            <span class="price-new">{{item.sell_price}}</span>
            <span class="price-old">{{item.market_price}}</span>
            </div>
          <div class="sell-info">
            <span class="sell-status">热卖中</span>
            <span class="sell-leftcount">{{item.stock_quantity}}</span>
            </div>
        </div>
      </div>
    </router-link>
  </ul>
  </div>
</template>
<script>
import MyHeader from '@/components/myheader'
import {getGoodsList} from '@/api'
export default {
  components: {
    MyHeader

  },
  data () {
    return {
      pageindex: 1,
      goodslist: [],
      loading: false
    }
  },
  mounted () {
    getGoodsList(this.pageindex)
      .then(res => {
        console.log(res)
        this.goodslist = res.message
      })
  },
  methods: {

    loadMore () {
      this.loading = false
      this.pageindex += 1
      getGoodsList(this.pageindex)
        .then(res => {
          this.goodslist = [...this.goodslist, ...res.message]
          this.loading = true
        })
    },
    jumpTo (id) {
      this.$router.push({name: 'goodsdetail', params: {id: id}})
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-list {
  margin: 40px 0 0 0;
  background-color: #f4f4f4;
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 10px;
  }
  h4 {
    font-size: 12px;
    font-weight: bold;
    height: 32px;
    // 多行文本超出省略号
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .goods-li {
    width: 50%;
    box-sizing: border-box;
    padding-top: 5px;
    display: flex;
    justify-content: column;
    .goods-container {
      width: 100%;
      background-color: #fff;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .price-info {
      display: flex;
      justify-content: space-between;
      .price-new {
        color: red;
      }
      .price-old {
        text-decoration: line-through;
      }
    }
    .sell-info {
      display: flex;
      justify-content: space-between;
    }
  }

  .goods-li:nth-child(2n+1) {
    padding-right: 5px;
  }
  .goods-li:nth-child(2n) {
    padding-left: 5px;
  }
}
</style>
