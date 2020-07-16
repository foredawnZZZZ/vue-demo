<template>
  <div>
    <!-- 一次性插值 插值就是文本解释-->
    <p v-once>{{ msg }}</p>
    <!-- 
      插值无法识别渲染标签
      站点上动态渲染任意的HTML都是危险的，容易受到XSS攻击！
      对可信内容使用，不要开放到用户层面
    -->
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <!-- 
      如果bind了只要是null,undefined,false这个属性都不会存在
      无论是插值还是bind都是可以写js单个表达式，语句不能使用
      bind也可以用于和响应式依赖进行绑定
    -->
    <button v-bind:disabled="isBtnDisabled">test ---- 简写就是:</button>
    <br>
    <br>
    <br>
    <!-- 
      v-on:监听DOM事件
      动态参数需要用[]包起来，而且式一个字符串，响应式依赖
    -->
    <a v-on:click="handleAclick">简写就是@</a>
    <input type="text" @[type]="doSomeThing">
    <div>{{txt}}</div>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.msg = "Hello World";
      // this.isBtnDisabled = true;
    }, 2000);
  },
  data() {
    return {
      msg: "Message: template",
      rawHtml: "<h1>MVVM</h1>",
      isBtnDisabled: false,
      type: "input",
      txt: ""
    };
  },
  methods: {
    handleAclick() {
      alert("监听事件触发 ---- click")
    },
    doSomeThing(ev) {
      this.txt = ev.target.value
    }
  }
};
</script>

<style>
</style>