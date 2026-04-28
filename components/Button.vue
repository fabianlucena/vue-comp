<template>
  <button
    :type="type"
    :class="['clickable button', props.class]"
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

  class: {
    type: [String, Array, Object],
    default: '',
  },
});

</script>

<style>
</style>