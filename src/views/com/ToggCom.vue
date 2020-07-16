<template>
  <div>
    <!-- 
      HOOKS:就是实例在初始化时,某一时刻自动执行的函数,this就指向它的实例(不要把hooks写成箭头函数!) 初始化阶段 -- 挂载模板阶段 -- 运行阶段 -- 销毁阶段
      组件的切换就是创建与销毁的过程 无论你是动态组件还是v-if控制切换(v-show除外) ,当组件结构复杂时耗费性能
      keep-alive 会缓存组件! 同时添加两个钩子
       - activated 激活
       - deactivated 停用
      如果是SSR服务端渲染的话:出了beforeCreate和Created可以用,其他的所有钩子都不可以了.包括keep-alive的

      初次加载时:
      父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
      子组件更新过程:
      父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
      销毁过程:
      父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

      Vue.observable(object)返回的对象直接用于渲染函数中,让一个对象响应
    -->

    <keep-alive include="ComA,ComB">
      <component :is="currentView"></component>
    </keep-alive>
    <button @click="toggleView('A')">testA</button>
    <br>
    <br>
    <button @click="toggleView('B')">testB</button>
    <br>
    <br>
    <button @click="toggleView('C')">testC</button>
  </div>
</template>

<script>
import Vue from "vue";
const stateA = Vue.observable({
  title: "COMPONENT ---- ComA",
});
const ComA = {
  render: (h) =>
    h(
      "h3",
      {
        on: {
          click: () => {
            stateA.title = "hello world!!!!";
          },
        },
      },
      `${stateA.title}`
    ),
  created() {
    // setTimeout(() => {
    //   stateA.title = "hello world!!!!!"
    // },5000)
    console.log("children ---- ComA ---- Created");
  },
  beforeMount() {
    console.log("children ---- ComA ---- BeforeMount!");
  },
  mounted() {
    console.log("children ---- ComA ---- Mounted!");
  },
  activated() {
    console.log("children ---- ComA ---- Activated!");
  },
  deactivated() {
    console.log("children ---- ComA ---- Deactivated!");
  },
  beforeUpdate() {
    console.log("children ---- ComA ---- BeforeUpdate!");
  },
  updated() {
    console.log("children ---- ComA ---- Update!");
  },
  destroyed() {
    console.log("children ---- ComA ---- Destroyed!");
  },
};
const ComB = {
  render: (h) => h("h3", "COMPONENT ---- ComB"),
  created() {
    console.log("COMPONENT ---- ComB ---- LifeCycle");
  },
  beforeUpdate() {
    console.log("children ---- ComA ---- BeforeUpdate!");
  },
  updated() {
    console.log("children ---- ComA ---- Update!");
  },
  activated() {
    console.log("children ---- ComB ---- Activated!");
  },
  deactivated() {
    console.log("children ---- ComB ---- Deactivated!");
  },
  destroyed() {
    console.log("children ---- ComB ---- Destroyed!");
  },
};
const ComC = {
  render: (h) => h("h3", "COMPONENT ---- ComC"),
  created() {
    console.log("COMPONENT ---- ComC ---- LifeCycle");
  },
  destroyed() {
    console.log("children ---- ComC ---- Destroyed!");
  },
};

export default {
  beforeCreate() {
    //实例初始化后 数据观测和事件配置之前
    console.log("parent ---- BeforeCreate!");
  },
  created() {
    // 实例创建完毕了 数据观测和事件配置已完成(发送ajax)
    console.log("parent ---- Created!");
  },
  data() {
    return {
      currentView: "ComA",
    };
  },
  methods: {
    toggleView(str) {
      this.currentView = "Com" + str;
    },
  },
  // HAS EL OPTIONS(是否有el选项,有继续向下执行,没有就等待实例执行$mount方法)
  // HAS TEMPLATE OPTIONS(判断是否有template选项,有进入渲染,没有就把el的HTML结构当做模板)
  beforeMount() {
    // 模板挂载之前,render函数首次触发 (模板和数据也尚未结合)
    console.log("parent ---- BeforeMount!");
  },
  mounted() {
    //  实例被挂载完 但是他不会保证所有的子组件都会挂载,可以$nextTick保证整个视图渲染完毕 (ref访问)
    console.log("parent ---- Mounted!");
  },
  // WHEN DATA CHANGES 何时数据改变
  beforeUpdate() {
    // 虚拟DOM在修改,只能访问现有的DOM
    console.log("parent ---- BeforeUpdate!");
  },
  updated() {
    // 虚拟DOM修改和渲染完毕 (最好用计算属性和侦听器 他不会保证子组件也一起被重绘如果需要用$nextTick)
    console.log("parent ---- Update!");
  },
  components: {
    ComA,
    ComB,
    ComC,
  },
  // WHEN DESTORY 何时实例销毁
  beforeDestroy() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    console.log("parent ---- BeforeDestroy!");
  },
  destroyed() {
    // 对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
    console.log("parent ---- Destroyed!");
  },
};
</script>
