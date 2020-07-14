<template>
  <div>
    <!-- 
			当需要在数据变化时执行异步或者开销较大的操作时，侦听器更合适的
			immediate：侦听器第一次绑定的时候，不会执行监听函数，只有发生改变了才会执行
				比如父组件向子组件传值，子组件的prop接收到默认值，就需要调用执行函数
			deep: 深度监听 普通的侦听器是无法观测到对象内部的变化的
				添加深度监听其实就是给每个属性都加watcher 监听属性： "queryOptions.forced"
		-->
    <input type="text" v-model="quesstion" />

    <p>{{ quesstion }}</p>

    <button @click="handleBtnClick">test</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this._getAnswer();
  },
  data() {
    return {
      quesstion: "",
      queryOptions: {}
    };
  },
  methods: {
    handleBtnClick() {
			this.queryOptions.forced = true;
		},
    _getAnswer() {
      axios.get("https://yesno.wtf/api").then(res => {
        if (res.status === 200) {
          this.queryOptions = res.data;
          this.quesstion = res.data.answer;
        }
      });
    }
  },
  watch: {
    quesstion(newQuession, oldQuession) {
      console.log(newQuession, oldQuession);
    },
    queryOptions: {
      handler(newQuession, oldQuession) {
        console.log(newQuession, oldQuession);
      },
      immediate: true,
      deep: true
    }
  }
};
</script>