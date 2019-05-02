<template>
  <div class="hello">
    <h3>我说axiosApp，用来发送请求，拦截响应</h3>
    <button @click="getData">点我发送请求</button>
    <ul >
      <li  :key="key" v-for="(item,key) in items">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

Vue.prototype.$http = axios

export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[]
    }
  },
  methods:{
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topics')
        .then((res)=>{
          this.items = res.data.data
          console.log(res.data.data)
        })
        .catch(function(err){
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
