<template>
<div class="project-decs">
  <span v-html="code" v-for="code in codes" :key="code"></span>
  <span v-show="show">|</span>
</div>
</template>

<script>
export default {
  name:'',
  data(){
    return {
      msg:'AvueProject'.split('')
      .concat(['<br> ','{','<br>'],
      'return "tony"'.split(''),['<br>','}']),
      msgIndex:0,
      codes:[],
      show:true,
      timer1:null,
      timer2:null
    }
  },
  mounted() {
    this.timer2 = setInterval(this.addCodes,300)
  },
  methods: {
    addCodes(){
      this.codes.push(this.msg[this.msgIndex])
      this.msgIndex++
    }
  },
}
</script>

<style scoped>
  .project-decs{
    position: absolute;
    bottom:30px;
    left: 30px;
    font-size: 30px;
    font-weight: bold;
  }
</style>
