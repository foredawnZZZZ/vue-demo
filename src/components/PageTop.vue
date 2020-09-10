<template>
  <div class="page-component__scroll">
    <el-backtop target=".page-component__scroll"></el-backtop>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageTop"
}
</script>

<style>
.page-component__scroll {
  /* 需要一个容器去撑满这个 */
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-x: auto;
}
</style>
