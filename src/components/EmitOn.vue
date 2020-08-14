<template>
  <div>
    <!-- 
      子组件通过使用$emit去派发自定义事件(子传父)
     -->
    <input type="text" :value="val" @input="handleInput">
    <button @click="handleClick">TEST Emit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      num: 0
    };
  },
  mounted() {
    console.log(123);
    this.$emit("my_events","first")
  },
  methods: {
    handleInput(e) {
      this.$emit("input",e.target.value)
    },
    handleClick() {
      this.$emit("myClick",this.num++);
    },
    handleEvents(ev) {
      console.log(ev)
    }
  },
};
</script>
