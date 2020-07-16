<template>
  <div>
    <!-- 不建议在模板上写大量的逻辑，当逻辑复杂起来显得臃肿 -->
    <!--
        计算属性它写起来像一个方法，但用起来就是一个属性
        他也是一个响应式依赖（getter和setter），必须有一个返回值还不能和data中的property重名
        计算属性默认是一个getter，但是可以写一个setter
        跟方法进行对比：
         - 方法也可以进行这种操作 但是页面上的响应式依赖发生了变化他就会自动执行（过程中其实他自己的依赖没有变）
         - 方法的返回值其实不是一个响应式依赖，性能差了点，人家执行关你啥事
         - 而计算属性式根据响应式依赖进行缓存的
        跟侦听器对比：watch式命令式的回调，会去拿你变之前和变之后的状态，如果当你的一些数据发生变化需要其他数据跟随变化，最好就是使用计算属性
    -->
    <p>{{ getMsg + count }}</p>
    <p>{{ reverseMethod() + count }}</p>
    <p>{{ flag ? 1 : 2 }}</p>
    <button @click="handleTestClick">test</button>
    <br />

    <input type="text" v-model="text" />
    <span>{{ fullName }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "MVVM-MVP-MVC",
      count: 1,
      flag: true,
      firstName: "Fore",
      lastName: "Dawn",
      text: ""
    };
  },
  methods: {
    handleTestClick() {
      this.count++;
      this.timer = setTimeout(() => {
        this.flag = false;
        console.log("**********");
      }, 5000);
    },
    reverseMethod() {
      console.log("methods");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    getMsg() {
      console.log("computed");
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    fullName: {
      get() {
        return this.firstName + "  " + this.lastName;
      },
      set(newVal) {
        let newName = newVal.split(" ");
        this.firstName = newName[0];
        this.lastName = newName[newName.length - 1];
        console.log(this.firstName);
        console.log(this.lastName);
      }
    }
  },
  watch: {
    text() {
      this.fullName += "0";
    }
  }
};
</script>

<style>
</style>