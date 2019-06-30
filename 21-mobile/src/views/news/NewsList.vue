<template>

    <div class="news-list" >
  <my-header mytitle='新闻资讯'></my-header>
      <ul>
        <li v-for="(item,index) in imgList" :key='index' @click='jumpDetail(item.id)'>
          <div class="news-item">
            <img :src="item.img_url" :alt="item.title">
            <div class="content">
              <p class="content-title">{{item.title}}</p>
              <p class="content-info"><span class="content-time">{{item.add_time | fmtTime}}</span><span class="content-click">{{item.click}}</span></p>
            </div>
          </div>
        </li>
      </ul>
    </div>

</template>
<script>
import {getnewsList} from '@/api'
import MyHeader from '@/components/myheader'
export default {
  components: {
    MyHeader
  },
  data () {
    return {
      imgList: []
    }
  },
  mounted () {
    getnewsList()
      .then(res => {
        this.imgList = res.message
      })
  },
  methods: {
    jumpDetail (id) {
      this.$router.push({name: 'newsdetail', params: {id: id}})
    }
  }
}
</script>
<style lang="scss" scoped>
.news-list {
  ul {
    padding: 40px 0 0 0;
    li {
      padding: 5px;
    }
  }
  .news-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 100px;
      height: 50px;
      margin-right: 10px;
      flex: 1;
    }
    .content {
      flex: 2;
      width: 250px;
      .content-title {
        font-size: 14px;
        font-weight: bold;
      }
      .content-info {
        display: flex;
        justify-content: space-between;
        color: #26a2ff;
        font-size: 12px;
      }
    }
  }
}
</style>
