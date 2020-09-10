<template>
  <div>
    <el-button type="primary" @click="handleToPath('/backToOne')">去页面1</el-button>
    <el-button type="primary" @click="handleToPath('/backToTwo')">去页面2</el-button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    handleToPath(path) {
      this.$router.push(path)
    }
  }
}
</script>
