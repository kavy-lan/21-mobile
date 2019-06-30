import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/api'
// 获取新闻列表
export const getnewsList = () => axios.get('/getnewslist').then(res => res.data)
// 获取新闻详情
export const getnewsDetail = (id) => axios.get(`/getnew/${id}`).then(res => res.data)
// 获取评论列表
export const getCommentList = (id, pageindex) => axios.get(`/getcomments/${id}?pageindex=${pageindex}`).then(res => res.data)
// 提交评论
export const submitComment = (id, content) => axios.post(`/postcomment/${id}`, content).then(res => res.data)
// 获取图片列表头部
export const getImgCategory = () => axios.get('/getimgcategory').then(res => res.data)
// 获取图片列表
export const getImgList = id => axios.get(`/getimages/${id}`).then(res => res.data)
// 获取图片描述
export const imgDesc = id => axios.get(`/getimageInfo/${id}`).then(res => res.data)
// 获取图片缩略图
export const getDhumbImgs = id => axios.get(`/getthumimages/${id}`).then(res => res.data)
// 获取商品列表
export const getGoodsList = pageindex => axios.get(`/getgoods?pageindex=${pageindex}`).then(res => res.data)
// 获取商品文字描述
export const getGoodsinfo = id => axios.get(`/goods/getinfo/${id}`).then(res => res.data)
// 获取商品图文介绍
export const getGoodsdDesc = id => axios.get(`/goods/getdesc/${id}`).then(res => res.data)
// 获取购物车页面数据
export const getCart = ids => axios.get(`/goods/getshopcarlist/${ids}`).then(res => res.data)
