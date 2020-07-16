<template>
  <div>
    <!-- 
      传递静态或者动态的prop (v-bind)
      动态的就表示传递的是一个js表达式

      单项数据流:
      父级prop的更新会向下流动到子组件中，但是反过来不行，防止意外变更父级组件的状态。
      每次父级组件发生变化时，子组件中所有的prop都将刷新为最新值，也意味着你不该再子组件内部修改prop
      - 这个prop用来传递一个初始值，但是子组件需要将他作为一个本地的prop数据来使用 （可以存放自己的data当中）
      - 这个prop以一种原始值传入需要进行转换。（定义一个计算属性 尤其是数组对象它们时按引用来传入的）
    -->
    <BlogPost v-if="flag" title="post.title --- ForeDawn"></BlogPost>
    <BlogPost v-else :title="title"></BlogPost>
    <button @click="ToggComponent">test</button>
  </div>
</template>

<script>
import BlogPost from "../../components/BlogPost";
export default {
  data() {
    return {
      title: "post.title --- ForeDawn ---- flag",
      flag: false
    };
  },
  methods: {
    ToggComponent() {
      this.flag = !this.flag;
    }
  },
  components: {
    BlogPost,
  },
};
</script>
