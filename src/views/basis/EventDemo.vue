<template>
  <div>
    <!-- 
      可以直接跟一个简单的表达式,复杂时写一个方法名
      第一个参数就是原始event对象
      
      为什么要在HTML中监听事件
      直观,直接定位js代码中的方法
      无须手动绑定事件,你的ViewModel就是纯粹的逻辑,和DOM直接解耦
      当数据驱动销毁时,所有的事件处理器都是自动删除的,不用去手动remove他
     -->
    <p>{{count}}</p>
    <!-- <button @click="count += 1">Click Button</button> -->
    <!-- <button @click="AddCount">Click Button</button> -->
    <button @click="AddCount('javascript',$event)">Click Button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    AddCount(j,e) {
      this.count += 1;
      console.log(e);
      console.log(j);
    }
  }
};
</script>
