<template>
  <div>
    <!-- 
      数组方式： (item,index) in items
      对象方式:  (value,name,index) in items
      接收值范围： item in 10

      数组更新检测: 通过修改数组的长度和索引对应数组项，不会使视图发生变化
      对象更细检测: 无法通过.语法追加对象属性，delete也不生效

      当v-for遇到v-if时，优先级要高于v-if，每次循环都会执行一次v-if，把他放在外层
    -->
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item.message }}</li>
    </ul>

    <ul>
      <li v-for="(value, key, index) in obj" :key="index">
        {{ value }}----{{ key }}
      </li>
    </ul>

    <button @click="handleAddItems">add</button>
    <br />
    <br />
    <br />
    <br />
    <button @click="handleAddOjb">add</button>
    <br />
    <br />
    <br />
    <br />
    <Child v-for="item in items" :key="item.item" :item="item" />
  </div>
</template>

<script>
import Child from "../components/Child";

export default {
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      obj: {
        a: 10,
        b: 11,
        c: 12,
        d: 13
      }
    };
  },
  methods: {
    handleAddItems() {
      this.items.push({
        message: "Baz"
      });
      // this.items.length = 0;
      // this.items[1] = "12";
    },
    handleAddOjb() {
      this.obj.e = 14;
      delete this.obj.d;
    }
  },
  components: {
    Child
  }
};
</script>

<style>
</style>