import Vue from 'vue'
import router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'




Vue.use(router)
//配置路由
export default new router({
  routes:[{
    name:'helloworld',
    path:'/helloworld/:worldmsg',//指定要跳转的路径
    component:HelloWorld//指定要跳转的组件
  },
  {
    name:'helloearth',
    path:'/helloearth/:earthmsg',//指定要跳转的路径
    component:HelloEarth//指定要跳转的组件
  }]
})