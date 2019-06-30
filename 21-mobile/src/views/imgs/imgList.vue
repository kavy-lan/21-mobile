<template>
  <div class="img-list">
   <my-header mytitle='图文资讯'></my-header>
    <div class="cate">
      <ul id="cateul" ref='ulref'>
        <li @click='initImg("0")'><span>全部</span></li>
        <li v-for="(item,index) in getimgcategory" :key='index' @click='initImg(item.id)'>
          <span>{{item.title}}</span>
          </li>
      </ul>
    </div>
    <div class="img-list-box">
      <ul>
        <li v-for="(item,index) in getImg" :key='index' >
          <router-link :to="`/img_list/${item.id}/detail`"><img  v-lazy="item.img_url" alt=""></router-link>
          <p><span class="title">{{item.title}}</span><br/>
          {{item.zhaiyao}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import MyHeader from '@/components/myheader'
import {getImgCategory, getImgList} from '@/api'
export default {
  components: {
    MyHeader

  },
  data () {
    return {
      getimgcategory: [],
      getImg: []
    }
  },
  created () {
    this.initList()
  },
  methods: {
    initList () {
      getImgCategory()
        .then(res => {
          console.log(res)
          this.getimgcategory = res.message
          let w = 60 * (res.message.length + 1)
          this.$refs.ulref.style.width = w + 'px'
        })
    },
    initImg (id) {
      getImgList(id)
        .then(res => {
          console.log(res)
          this.getImg = res.message
        })
    }
  }

}
</script>
<style lang="scss" scoped>
  .img-list {
    margin-bottom: 55px;
    margin-top: 40px;
  }
  .cate {
    max-width: 100%;
    margin: 0;
    overflow-x:auto;
    overflow-y: hidden;
    font-size: 14px;
    ul {
      padding-left: 10px;
      margin: 5px 0;
      li {
        list-style: none;
        display: inline-block;
        padding: 0 0 0 5px;
        span {
          color:#0094ff;
        }
      }
    }
  }
  .img-list-box {
    ul {
      padding: 0;
      li {
        list-style: none;
        position: relative;
      }
    }
    p {
      font-size: 14px;
      color: #fff;
      position: absolute;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0,0,0,0.4);
      .title {
        font-weight: bold;
      }
    }
    img {
      width: 100%;
    }
  }

  image[lazy=loading] {
    width: 100%;
    margin: auto;
  }
</style>
