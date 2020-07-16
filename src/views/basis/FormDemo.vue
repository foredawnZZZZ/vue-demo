<template>
  <div>
    <!--
      v-model指令在表单元素上创建双向数据绑定 就是一个语法糖
      不同表单绑不同事件
      text 和 textarea 元素使用 value property 和 input 事件；
      checkbox 和 radio 使用 checked property 和 change 事件；
      select 字段将 value 作为 prop 并将 change 作为事件。
      textarea: 无法使用插值,直接v-model
      单个checkbox绑定布尔值 多个就绑定数组
    -->
    <textarea id="1" cols="30" rows="10" v-model="textValue"></textarea>
    <p>{{textValue}}</p>
    <br>
    <input type="checkbox" value="firstBox" v-model="checkNames">
    <input type="checkbox" value="secondBox" v-model="checkNames">
    <input type="checkbox" value="thirdBox" v-model="checkNames">
    <br>
    <p>{{checkNames}}</p>
    <br>
    <input type="radio" value="One" v-model="radioValue">
    <input type="radio" value="two" v-model="radioValue">
    <input type="radio" value="three" v-model="radioValue">
    <p>{{radioValue}}</p>
    <br>
    <select id="2" v-model="selectValue">
      <option disabled value="">请选择</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <p>{{selectValue}}</p>
    <Vmodel :textValue="textValue" @change="handleChange" />
  </div>
</template>

<script>
import Vmodel from '../components/Vmodel'
export default {
  data() {
    return {
      textValue: "",
      checkNames: [],
      radioValue: "",
      selectValue: ""
    };
  },
  methods: {
    handleChange(val) {
      this.textValue = val;
    }
  },
  components: {
    Vmodel
  }
};
</script>