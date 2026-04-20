<template>
  <button
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup>

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
});

</script>

<style>
</style>