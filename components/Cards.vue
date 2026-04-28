<template>
  <div class="cards">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.cards {
  display: flex;
  gap: .5em;
  flex-wrap: wrap;
}
</style>