<template>
  <div>
    <input type="text" :value="textValue" @input="$emit('change',$event.target.value)" placeholder="自定义v-model">
  </div>
</template>

<script>
export default {
  model: {
    prop: "textValue",
    event: "change"
  },
  props: {
    textValue: String
  }
}
</script>
