<template>
  <div class="cart">
  <div class="empty-cart" v-if="cartList.length === 0">
    <img src="" alt="" class="empty-cart-img">
    <div class="empty-cart-text">购物车还是空的</div>
    <div class="btn">去逛逛</div>
  </div>
  <div class="cart-container" v-else v-for="(item,index) in cartList" :key='index'>
    <span class="iconfont toogle" :class="item.seleteState ? 'icon-checkbox-marked-circ' : 'icon-checkbox-blank-circle-outline'" @click='toggleState(index)'></span>
    <div class="item-detail">
      <img :src="item.img" alt="">
      <div class="item-info">
        <h3>{{item.title}}</h3>
        <div class="pay">
          <div class="pay-price">￥{{item.price}}</div>
          <div class="edit-quantity">
            <p class="operate-btn iconfont icon-minus" @click='handleNum(index,-1,"minus")'></p>
            <p class="btn-input">{{item.num}}</p>
            <p class="operate-btn iconfont icon-plus" @click='handleNum(index,1,"plus")'></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cart-footer">
    <div class="cart-footer-left" @click.native="toggleAll"><span class="iconfont toogle" :class="seleteAll ? 'icon-checkbox-marked-circ' : 'icon-checkbox-blank-circle-outline'" ></span><span>全选</span></div>
    <div class="cart-footer-center"><span>合计：</span><span class="total-price">￥{{totalPrice}}</span></div>
    <div class="cart-footer-right"><span class="goto-pay">结算({{totalNum}})</span></div>
  </div>

  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      cartList: ''

    }
  },
  mounted () {
    this.cartList = JSON.parse(localStorage.getItem('cartList') || '[]')
    console.log(this.cartList)
  },
  computed: {
    totalNum () {
      let total = 0
      this.cartList.map(item => {
        if (item.seleteState) {
          total += item.num
        }
      })
      return total
    },
    totalPrice () {
      let price = 0
      this.cartList.map(item => {
        if (item.seleteState) {
          price += (item.num * item.price)
        }
      })
      return price
    },
    seleteAll () {
      let selete = true
      this.cartList.map(item => {
        if (item.seleteState === false) {
          selete = false
        }
      })
      return selete
    }
  },
  methods: {
    toggleState (index) {
      this.cartList[index].seleteState = !this.cartList[index].seleteState
    },
    toggleAll () {
      let selectAll = this.seleteAll
      this.cartList.map(item => {
        item.seleteState = !selectAll
      })
    },
    handleNum (index, num, type) {
      if (this.cartList[index].num === 1 && type === 'minus') {
        MessageBox.confirm('确定执行此操作?').then(action => {
          this.cartList.splice(index, 1)
          return false
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.cartList[index].num += num
      }
    }
  }

}
</script>
<style lang="scss" scoped>
.cart {
  height: 320px;
  margin-top: 45px;
  font-size: 14px;
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    .empty-cart-img {
      height: 90px;
      width: 90px;
    }
    .empty-cart-text {
      font-size: 20px;
      color: #999;
      padding: 15px 0;
    }
    .btn {
      font-size: 20px;
      padding: 15px 55px;
      text-align: center;
      margin: 0 auto;
      border-radius: 10px;
      background: #ed601b;
      color: #fff;
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 8px 10px;
    border: 1px solid #eeeeee;
    border-radius: 20px;
    .toogle {
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 20px;
    }
    .icon-checkbox-marked-circ {
      color: #ff5500;
    }
    .icon-checkbox-blank-circle-outline {
      color: #666666;
    }
  }
  .item-detail {
    display: flex;
    flex: 1;
    img {
      margin: 2px 0 2px 5px;
      width: 90px;
      height: 90px;
    }
    .item-info {
      width: 100%;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h3 {
        font-size: 16px;
        font-weight: 400;
      }
      .pay {
        display: flex;
        justify-content: space-between;
        .pay-price {
          color: #ff5500;
          font-weight: bold;
          line-height: 30px;
        }
        .edit-quantity {
          display: flex;
          height: 30px;
          line-height: 30px;
          .operate-btn {
            padding: 0 10px;
            font-size: 20px;
            color: #bababa;
          }
          .btn-minus {
            font-size: 14px;
          }
        }
      }
    }
  }
  .cart-footer {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    width: 100%;
    border-top: 1px solid #e7e7e7;
    background-color: #fff;
    .cart-footer-left {
      display: flex;
      justify-content: cneter;
      align-items: center;
      span {
        display: block;
        height: 50px;
        padding: 0 5px;
      }
    }
    .cart-footer-center {
      .total-price {
        color: #ff5500;
        font-weight: bold;
      }
    }
    .cart-footer-right {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      background-color: #ff5500;
      .goto-pay {
        color: #fff;
      }
    }
    .icon-checkbox-marked-circ {
      color: #ff5500;
    }
    .icon-checkbox-blank-circle-outline {
      color: #666666;
    }
  }
}
</style>
