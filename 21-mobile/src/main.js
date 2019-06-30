// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.use(MintUI)

// 创建全局过滤器
Vue.filter('fmtTime', function (time) {
  let timeObj = new Date(time)
  let y = timeObj.getFullYear()
  let m = timeObj.getMonth()
  let d = timeObj.getDate()
  return y + '/' + m + '/' + d
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
