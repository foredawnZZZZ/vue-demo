<template>
  <div>
    <p>{{msg}}</p>
    <button v-loading="flag" @click="handleShow">test</button>
    <!-- <Test/> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      msg: "",
    };
  },
  methods: {
    handleShow() {
      this.flag = true;
      setTimeout(() => {
        this.msg = "ajax -- cbs";
        this.flag = false;
      }, 3000);
    },
  },
};
</script>
