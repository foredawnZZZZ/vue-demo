<template>
  <div>
    <!-- 
      v-if是一个指令必须放在一个元素上，如果想切换多个元素可以用template包起来 v-else-if
      添加key： 因为v-if成功是移除dom节点 Vue会高效渲染元素，通常是复用已有的元素不是从头渲染的
        在控制台看Elements发现input只是placeholder在变，元素没有变 添加key就具有唯一性

      v-show 作用的元素会保留在dom节点上，只是开启了离线模式 切换的是display属性 他不支持template（slot）
         他们都是Vue内置的比较抽象的元素

      v-show与v-if的区别
       - v-if是真正的条件渲染,在条件内部的组件里的事件监听和子组件都被不断的创建与销毁(直接在DOM树上干掉了) 
        但是他是惰性的,只有在真值的时候才会去条件渲染
  
       - v-show,不管条件时什么,他都会渲染(设置display属性)
    -->
    <template v-if="awesome">
      <h1>Vue is awesome!</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <template v-else>
      <h1>Oh no 😢</h1>
      <p>Paragraph 3</p>
      <p>Paragraph 4</p>
    </template>

    <!-- <template v-show="flag">
      <h1>Vue is awesome! -- show</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <template v-show="flag">
      <h1>Oh no 😢 -- show</h1>
      <p>Paragraph 3</p>
      <p>Paragraph 4</p>
    </template> -->

    <h1 v-show="flag">Vue is awesome!</h1>
    <h1 v-show="!flag">Oh no 😢</h1>

    <br />
    <br />
    <br />
    <br />

    <template v-if="awesome">
      <label>UserName</label>
      <input type="text" placeholder="change your username" key="username" />
    </template>
    <template v-else>
      <label>PassWord</label>
      <input type="text" placeholder="change your password" key="password" />
    </template>

    <button @click="handleTogAws">toogle</button>
    <br />
    <br />
    <br />
    <br />
    <button @click="handleTogFlag">toogle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: false,
      flag: false
    };
  },
  methods: {
    handleTogAws() {
      this.awesome = !this.awesome;
    },
    handleTogFlag() {
      this.flag = !this.flag;
    }
  }
};
</script>

<style>
</style>