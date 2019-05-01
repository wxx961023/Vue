<template>
  <div class="hello">
    <h1>HelLoEacrth</h1>
    <h2>Essential Links</h2>
    <h3>{{$route.params.earthmsg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelLoEacrth', //全局id,出问题方便调试
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    color: blue;
  }
</style>
