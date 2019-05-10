<template>
  <div @wheel="wheelEvent($event)">
    <transition-group tag="div" :name="name">
      <div
        class="block"
        v-for="(list,index) in pages"
        :key="list"
        :style="{'background-color':bgColor&&bgColor[index]?bgColor[index]:baseBgc}"
        v-show="index===curIndex"
        @transitionend="end"
      >{{list}}
      <slot v-if="index === 1"></slot>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props:{
    bgColor:{
      type:Array
    },
    baseBgc:{
      default:'#c90'
    },
    pages:{
      type:Number,
      required:true,
    }
  },
  data(){
      return {
        curIndex:0,
        name:'',
        canWheel:true,
        endCount:0
      }
  },
  methods: {
    wheelEvent(e){
      if(!this.canWheel){
          return
      }
      this.canWheel = false
      if(e.deltaY>0){
          //禁止向下滑动
          if(this.curIndex === this.pages-1){
              this.canWheel = true
              this.endCount = 0
              return
          }
          this.curIndex++;
          this.name = 'down'
      }
      if(e.deltaY<0){
          //禁止向上滑动
          if(this.curIndex === 0){
              this.canWheel = true
              this.endCount = 0
              return
          }
          this.curIndex--;
          this.name = 'up'
      }
    },
    end(){
      console.log("end")
      this.endCount++
      if(this.endCount === 2){
        this.canWheel = true
        this.endCount = 0
      }
    }
  }
}
</script>

<style scoped>
.block {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: pink;
}

.down-enter-active {
  transition: all 1s ease;
  transform: translateY(0);
}
.down-leave-active {
  transition: all 1s ease;
  transform: translateY(-100%);
}
.down-enter {
  transform: translateY(100%);
}
.down-leave {
  transform: translateY(0);
}

.up-enter-active {
  transition: all 1s ease;
  transform: translateY(0);
}
.up-leave-active {
  transition: all 1s ease;
  transform: translateY(100%);
}
.up-enter {
  transform: translateY(-100%);
}
.up-leave {
  transform: translateY(0);
}
</style>
