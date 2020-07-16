<template>
  <div>
    <p class="p">{{item}}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      default: "childs Prop"
    }
  }
};
</script>

<style lang="stylus" scoped>
  .p
   width 100px
   height 100px
   background-color yellow
</style>

