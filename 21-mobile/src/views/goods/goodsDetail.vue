<template>
<div class="goods-detail">
  <my-header mytitle='商品详情'></my-header>
<mt-swipe class="swiperbox" >
  <mt-swipe-item v-for="(item,index) in  DhumbImgs" :key='index'><img :src="item.src" alt=""></mt-swipe-item>
</mt-swipe>
<div>
  <h4 class="goods-title">{{goodsinfo.title}}</h4>
  <p class="goods-price"><span class="market-price">￥{{goodsinfo.market_price}}</span><span class="sell-price">￥{{goodsinfo.sell_price}}</span></p>
</div>
<div class="goods-info">
  <h4 class="goods-desc">商品参数</h4>
  <p>商品编号:{{goodsinfo.goods_no}}</p>
  <p>库存:{{goodsinfo.stock_quantity}}</p>
  <p>上架时间:{{goodsinfo.add_time | fmtTime}}</p>
</div>
<mt-button type="primary" @click='jump(`/goods_list/${goodsinfo.id}/goods_detail/goods_desc`)'>图文介绍</mt-button>
<mt-button type="danger" @click="jump(`/goods_list/${goodsinfo.id}/goods_detail/goods_comment`)">商品评论</mt-button>
<div class="goods-footer">
  <div class="goods-footer-item contact"><span class="iconfont icon-kefu"></span><span>联系客服</span></div>
  <div class="goods-footer-item cart">
    <span class="iconfont icon-gouwuche"></span>
    <span>购物车</span>
    <span class="badge">4</span>
  </div>
  <div class="goods-footer-item add" @click='addToCar'><span>加入购物车</span></div>
  <div class="goods-footer-item buy" @click='jumpToCart'><span>立即购买</span></div>
</div>
</div>
</template>
<script>
import MyHeader from '@/components/myheader'
import {getGoodsinfo, getDhumbImgs, getCart} from '@/api'
export default {
  components: {
    MyHeader

  },
  data () {
    return {
      goodsinfo: '',
      DhumbImgs: '',

      id: this.$route.params.id
    }
  },
  created () {
    console.log(this.$route.params.id)
    getGoodsinfo(this.$route.params.id)
      .then(res => {
        console.log(res)
        this.goodsinfo = res.message[0]
      })
    getDhumbImgs(this.$route.params.id)
      .then(res => {
        console.log(res)
        this.DhumbImgs = res.message
      })
  },
  methods: {
    jump (path) {
      this.$router.push(path)
    },
    addToCar () {
      getCart(this.id)
        .then(res => {
          console.log(res)
          let carObj = {
            id: this.id,
            title: this.goodsinfo.title,
            price: this.goodsinfo.sell_price,
            img: res.message[0].thumb_path,
            num: 1,
            seleteState: true
          }
          let cartList = JSON.parse(localStorage.getItem('cartList') || '[]')
          let idx = cartList.findIndex(item => item.id === this.id)
          if (idx === -1) {
            cartList.push(carObj)
            localStorage.setItem('cartList', JSON.stringify(cartList))
          } else {
            cartList[idx].num += 1
            localStorage.setItem('cartList', JSON.stringify(cartList))
          }
        })
    },
    jumpToCart () {
      this.$router.push({name: 'cart'})
    }
  }

}
</script>
<style lang="scss" scoped>
.goods-detail {
  margin-bottom: 50px;
  padding: 0 10px;
}
.swiperbox {
  height: 300px;
  img {
    width: 100%;
  }
}

.goods-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}
.goods-price {
  font-size: 14px;
  .market-price {
    text-decoration: line-through;
  }
  .sell-price {
    color: #e4393c;
  }
}

.goods-info {
  font-size: 14px;
   .goods-desc {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
}

.goods-footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid #e7e7e7;
  background-color: #fff;
  .goods-footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact, .cart {
    width: 40%;
    font-size: 12px;
    position: relative;
  }
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
  }
  .add, .buy {
    width: 60%;
    color: white;
    &>span {
      font-size: 20px;
    }
  }
  .add {
    background-color: #ff9600;
  }
  .buy {
    background-color: #e4393c;
  }
}
</style>
