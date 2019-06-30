import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Car from '@/views/Car'
import Member from '@/views/Member'
import NewsList from '@/views/news/NewsList'
import NewsDetail from '@/views/news/NewsDetail'
import ImgList from '@/views/imgs/imgList'
import ImgDetail from '@/views/imgs/imgDetail'
import GoodsList from '@/views/goods/goodsList'
import GoodsDetail from '@/views/goods/goodsDetail'
import GoodsDesc from '@/views/goods/goodsDesc'
import GoodsComment from '@/views/goods/goodsComment'
import Cart from '@/views/Cart'
Vue.use(Router)

export default new Router({
  routes: [
    { name: 'test', path: '/test', component: Test },
    { name: 'home', path: '/', component: Home },
    { name: 'search', path: '/search', component: Search },
    { name: 'car', path: '/car', component: Car },
    { name: 'member', path: '/member', component: Member },
    { name: 'newslist', path: '/newslist', component: NewsList },
    { name: 'newsdetail', path: '/newsdetail', component: NewsDetail },
    { name: 'imglist', path: '/imglist', component: ImgList },
    { name: 'imgdetail', path: '/img_list/:id/detail', component: ImgDetail },
    { name: 'goodslist', path: '/goodslist', component: GoodsList },
    { name: 'goodsdetail', path: '/goodsdetail', component: GoodsDetail },
    { name: 'goodsdesc', path: `/goods_list/:id/goods_detail/goods_desc`, component: GoodsDesc },
    { name: 'goodscomment', path: `/goods_list/:id/goods_detail/goods_comment`, component: GoodsComment },
    {name: 'cart', path: '/cart', component: Cart}
  ]
})
