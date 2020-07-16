<template>
  <div>
    <!-- 
      v-bind可以与普通class共存 配合计算属性使用最好
      也可以定义一个class列表 数组语法中也可以使用对象语法,如果你不喜欢在数组写三元
      组件如果使用class属性时,作用到组件的根元素上面,不会覆盖原有的class
    -->
    <!-- <div class="box" :class="{active : isActive}">Class Names</div> -->
    <br>
    <!-- <div :class="classObj">Class Object</div> -->
    <br>
    <!-- <div :class="[boxClass,activeClass]"></div> -->
    <!-- <div :class="[isActive ? 'active' : '' ,boxClass]"></div> -->
    <div :class="[{'active' : isActive},boxClass]"></div>
    <button @click="handleToggClass">togg</button>

    <!-- style定义内联对象,数组传递多个内联对象 -->
    <div :style="styleObj1">content</div>
    <div :style="[styleObj1,styleObj2]">content</div>

    <Child :class="childClass"></Child>
  </div>
</template>

<script>
import Child from '../components/Child'
export default {
  data() {
    return {
      isActive: true,
      activeClass: "active",
      boxClass: "box",
      childClass: "child",
      styleObj1: {
        color: "red",
        fontSize: "15px",
        backgroundColor: "pink"
      },
      styleObj2: {
        width: "100px",
        height: "200px"
      }
    };
  },
  methods: {
    handleToggClass() {
      this.isActive = !this.isActive;
    },
  },
  computed: {
    classObj() {
      return {
        active: this.isActive,
        box: this.isActive,
      };
    },
  },
  components: {
    Child
  }
};
</script>

<style lang="stylus" scoped>
.box
  width 200px
  height 200px
  background blue
.active
  background red
.child
  margin 20px;
  display inline-block;
  box-shadow: 10px 10px 5px #888888;
</style>
