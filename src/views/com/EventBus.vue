<template>
  <div>
    <!-- 注册在组件上的事件默认都是自定义事件，如果想使用原生事件在后面加上.native修饰符 -->
    <EmitOn @input="handleMyInput" @myClick="handleMyClick"></EmitOn>
    <p>{{myVal}} {{myNum}}</p>
    <button @click="handleTest">test</button>
  </div>
</template>

<script>
import EmitOn from "../../components/EmitOn";
export default {
  data() {
    return {
      myVal: "",
      myNum: 0,
    };
  },
  created() {
    // this.$on(["my_events","my_events2"], this.handleEvents);
    this.$on("my_events",this.handleEvents1);
  },
  methods: {
    handleMyInput(val) {
      this.myVal = val;
    },
    handleMyClick(val) {
      this.myNum = val;
    },
    handleEvents(ev1) {
      console.log(ev1);
    },
    handleEvents1(ev) {
      console.log(ev);
    },
    handleEvents2(ev) {
      console.log(ev);
    },
    handleTest() {
      this.handleEvents1(); 
    }
  },
  components: {
    EmitOn,
  },
};
</script>
