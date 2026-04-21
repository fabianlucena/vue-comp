<template>
  <header>
    <slot></slot>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .25em;
  font-size: 150%;
}
</style>