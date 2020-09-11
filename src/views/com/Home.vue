<template>
  <div>
    <el-button type="primary" @click="handleToPath('/backToOne')">去页面1</el-button>
    <el-button type="primary" @click="handleToPath('/backToTwo')">去页面2</el-button>
    <br>
    <br>
    <br>
    <br>
    <el-button type="primary" @click="handleCommit">{{cityVal || 'test store'}}</el-button>
    <ul>
      <li v-for="(item,index) in filterList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "home",
  data() {
    return {
      cityVal: ""
    }
  },
  methods: {
    handleToPath(path) {
      this.$router.push(path)
    },
    handleCommit() {
      this.$store.commit('changeCity');
      this.$store.dispatch('changeList',{
        title: 'test',
        id: 4
      });
    },
  },
  computed : {
    ...mapGetters([
      'filterList'
    ])
  }
}
</script>
