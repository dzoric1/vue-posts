<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.button {
  border: none;
  background-color: aquamarine;
  padding: 5px 10px;
}

.button:hover {
  background-color: green;
}
</style>
