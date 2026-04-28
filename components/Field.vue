<template>
  <div>
    <label :for="for">
      {{ label }}
    </label>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  for: String,
  label: [String, Object],
});
</script>