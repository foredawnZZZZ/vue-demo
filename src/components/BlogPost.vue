<template>
  <div>
    <!-- 
    prop验证
      - type：单个类型，多个类型用[] (它是构造函数)
      - default: 设置默认值,也可以写个函数
      - validator: 具体的匹配校验规则
    非prop特性
      1.当我父级组件向子组件传值时,子组件也表示去接受这个值并且存放在props里 那么父传子接 该属性不会显示在dom标签上 成为prop特性
      2.当父级组件向子组件传值时,子组件声明不去接受这个值 那么该属性就不会被子组件使用 并且显示在了dom标签上 体现在替换和合并的特性 为非prop特性
    -->
    <p>{{son_title}}</p>
    <!-- 
      这种情况就不会被改变,就是如果只想去观测存贮一数据去做些对比,其实就可以在created中,创建出来
      Vue.js在开头提过只有在data中的数据才是响应式的(props,computed同理)都是响应式依赖,vue会在底层对
      这些里面的property去添加getter和setter来个DOM做数据绑定
     -->
    <p>{{myTitle}}</p>

    <button @click="handleTest">test</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "hello!",
    },
  },
  created() {
    setTimeout(() => {
      this.son_title = "dispatch!";
    }, 3000);
    this.myTitle = "Lin!"
  },
  data() {
    return {
      son_title: this.title,
    };
  },
  methods: {
    handleTest() {
      this.myTitle = "!!!!!!!!"
    }
  }
};
</script>
