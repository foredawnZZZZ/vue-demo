<template>
  <div>
    <!-- 注册在组件上的事件默认都是自定义事件，如果想使用原生事件在后面加上.native修饰符 -->
    <EmitOn @input="handleMyInput" @myClick="handleMyClick"></EmitOn>
    <p>{{myVal}} {{myNum}}</p>

    
  </div>
</template>

<script>
import EmitOn from "../../components/EmitOn";
export default {
  data() {
    return {
      myVal: "",
      myNum: 0
    };
  },
  methods: {
    handleMyInput(val) {
      this.myVal = val;
    },
    handleMyClick(val) {
      this.myNum = val;
    }
  },
  components: {
    EmitOn,
  },
};
</script>
