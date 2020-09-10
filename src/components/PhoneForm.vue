<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item prop="phone">
        <el-input placeholder="输入手机号" v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item prop="vCode">
        <el-row :gutter="18">
          <el-col :span="18">
            <el-input placeholder="输入验证号" v-model="ruleForm.vCode"></el-input>
          </el-col>
          <el-col :span="6">
            <el-button @click="sendCode" :disabled="disabled">{{defalutText}}</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :style="'width:' + size + 'px'" @click="submit('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { CHECK_PHONE } from "../utils/validate";
export default {
  name: "phoneForm",
  props: {
    ruleForm: {
      type: Object,
      required: true,
    },
    size: {
      type: Number,
      default: 500,
    },
    countDown: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    this.time = this.countDown;
  },
  data() {
    return {
      rules: {
        phone: [
          {
            validator: CHECK_PHONE,
            trigger: "change",
          },
        ],
        vCode: [
          {
            required: true,
            trigger: "blur",
            message: "验证码不能为空",
          },
        ],
      },
      time: 0,
      timer: null,
      disabled: false,
      defalutText: "发送验证码",
    };
  },
  methods: {
    sendCode() {
      this.$refs.ruleForm.validateField("phone", (errorMessage) => {
        if (errorMessage) {
          this.$message.error("按规则填写!");
        } else {
          let timer = setInterval(() => {
            this.time--;
            this.disabled = true;
            this.defalutText = `${this.time}秒后再次发送`;
            if (this.time === 0) {
              clearInterval(timer);
              this.defalutText = "重新发送";
              this.disabled = false;
              this.time = this.countDown;
            }
          }, 1000);
        }
      });
    },
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if(valid) {
          this.$emit("phoneSubmit")
        }
      })
    }
  }
};
</script>
