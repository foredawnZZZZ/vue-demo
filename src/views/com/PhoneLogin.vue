<template>
  <div>
    <h1>后台管理系统</h1>
    <div class="form-content">
      <phone-form
        :ruleForm="ruleForm"
        @phoneSubmit="handleSubmit"
      ></phone-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'phoneLogin',
  data() {
    return {
      ruleForm: {
        phone: "",
        vCode: ""
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$message.success("成功了")
    }
  }
}
</script>

<style lang="less" scoped>
.form-content {
  width: 500px;
  height: 300px;
}
</style>
