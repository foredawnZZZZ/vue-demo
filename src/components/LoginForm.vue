<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="loginForm">
      <el-form-item prop="userName">
        <el-input placeholder="请输入账号" v-model="ruleForm.userName">
          <i slot="prefix" class="el-icon-s-custom"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input placeholder="请输入密码" v-model="ruleForm.passWord" show-password>
          <i slot="prefix" class="el-icon-s-custom"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:500px;" @click="submit('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  props: {
    rules: {
      type: Object,
      required: true,
    },
    ruleForm: {
      type: Object,
      required: true,
    },
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("loginScs")
        } else {
          this.$emit("loginErr")
        }
      });
    },
  },
};
</script>
