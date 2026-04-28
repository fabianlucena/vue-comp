<template>
  <nav>
    <MenuItem
      :class="['button menu menu-bar', props.class]"
      :items="props.items"
      :itemType="props.itemType"
    />
  </nav>
</template>

<script setup>
import MenuItem from './MenuItem.vue';

const props = defineProps({
  class: {
    type: [String, Array, Object],
    default: '',
  },

  items: {
    type: Array,
    required: true,
  },
  
  itemType: {
    type: [Object, Function],
    default: "a"
  },
});
</script>

<style>

.menu-bar {
  display: flex;
  flex: 1;
}

.menu-bar.vertical {
  flex-direction: column;
  height: 100%;
}

.menu-bar > li:not(:first-child) {
  border-left: .1em dotted #a0a0a0;
}

</style>