<template>
  <nav>
    <MenuItem
      class="menu-bar"
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

.menu-bar {
  background-color: #e0e0e0;
}

.menu-bar > li:not(:first-child) {
  border-left: .1em dotted #a0a0a0;
}

</style>