<template>
  <button :class="[$style.btn]" @click="onBtnClicked"><slot></slot></button>
</template>

<script>
export default {
  methods: {
    onBtnClicked() {
      this.$emit("mySuperEvent")
    },
  },
}
</script>

<style module>
.btn {
  display: inline-block;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: #f08080;
  padding: 4px 12px;
  color: #9400d3;
  user-select: none;
}

.btn:hover {
  background: #dc143c;
  color: #fff;
}
</style>
