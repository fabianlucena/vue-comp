<template>
  <ul
    :class="classes"
    :style="style"
  >
    <li
      v-for="item in localItems" :key="item.name"
      :class="{ 'menu-item': true, 'has-submenu': item.items }"
    >
      <a
        :href="item.link || '#'"
        class="label"
        :data-item-name="item.name"
        @click.prevent.stop="handleClick"
      >
        {{ item.label || item.name }}
      </a>
      <MenuItem
        v-if="item.items && item.showSubmenu"
        :class="item.class ? item.class + ' submenu' : 'submenu'"
        :items="item.items"
        @hide="handleHide"
      />
    </li>
  </ul>
</template>

<script setup>

defineOptions({
  name: 'MenuItem'
});

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    required: true
  },
});

import { onMounted, onUnmounted, inject, ref, isProxy } from 'vue';

onMounted(() => window.addEventListener('click', hideSubmenusGlobal, true));
onUnmounted(() => window.removeEventListener('click', hideSubmenusGlobal, true));

function hideSubmenusGlobal(evt) {
  if (evt.target.closest('.menu')) {
    return;
  }

  hideSubmenus();
}

const emitHide = defineEmits(['hide']);

const localItems = isProxy(props.items) ? props.items : ref(structuredClone(props.items));
const mainStyle = inject('style', {});
const style = {
  ...mainStyle?.menu,
};

const classes = ['menu', props.class].filter(Boolean).join(' ');

function getItemForEvent(evt) {
  const itemName = evt.target.dataset.itemName;
  return (localItems.value || localItems)
    ?.find(item => item.name === itemName);
}

function hideSubmenus(items) {
  (localItems.value || localItems)
    ?.forEach(item => {
    item.showSubmenu = false;
  });
}

function handleClick(evt) {
  const item = getItemForEvent(evt);
  if (!item) {
    return;
  }

  if (item.items) {
    item.showSubmenu = !item.showSubmenu;
  }

  emitHide('hide', evt);
}

function handleHide(evt) {
  hideSubmenus();
  emitHide('hide', evt);
}

</script>

<style scoped>

ul.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

li.menu-item {
  margin: 0;
}

.menu-item > .label {
  display: block;
  padding: .3em .8em;
  text-decoration: none;
  color: #333;
}

.menu-item > .label:hover {
  box-shadow: .1em .1em .1em .1em #ccc;
}

.has-submenu .label::after {
  content: '▸';
}

.submenu {
  position: fixed;
  background-color: #f0f0f0;
}

</style>