<template>
  <div>
    <h1>后台管理系统</h1>
    <div class="login-content">
      <login-form
        :ruleForm="ruleForm"
        :rules="rules"
        @loginScs="handleLoginScs"
        @loginErr="handleLoginErr"
      ></login-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "accountLogin",
  data() {
    return {
      ruleForm: {
        userName: "",
        passWord: "",
      },
      rules: {
        userName: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "长度在3-5个字符之间"
          }
        ],
        passWord: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
          {
            min: 6,
            max: 15,
            message: "长度在6-15个字符之间"
          }
        ],
      },
    };
  },
  methods: {
    handleLoginScs() {
      this.$message.success("成功");
    },
    handleLoginErr() {
      this.$message.error("失败");
    }
  }
};
</script>

<style lang="less" scoped>
.login-content {
  width: 500px;
  height: 300px;
}
</style>


