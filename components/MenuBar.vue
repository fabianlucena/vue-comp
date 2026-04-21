<template>
  <nav>
    <MenuItem
      class="button menu menu-bar"
      :items="props.items"
    />
  </nav>
</template>

<script setup>

import MenuItem from './MenuItem.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

</script>

<style>

.menu-bar {
  display: flex;
}

.menu-bar > li:not(:first-child) {
  border-left: .1em dotted #a0a0a0;
}

</style>