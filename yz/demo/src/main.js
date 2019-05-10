// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Fullpage from '@/components/fullPage.vue'
import page1 from './components/page1.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    bgColor:['red','yellow','green','pink'],
  },
  components:{
    Fullpage,
    page1,
  }
})
