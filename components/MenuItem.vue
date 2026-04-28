<template>
  <ul
    :class="classes"
    :style="style"
  >
    <li
      v-for="item in localItems" :key="toRaw(item.name)"
      :class="{ 'button': true, 'menu': true, 'clickable': true, 'menu-item': true, 'has-submenu': item.items }"
    >
      <component
        :is="props.itemType || 'a'"
        :href="item.link || '#'"
        class="label"
        :data-item-name="toRaw(item.name)"
        @click.prevent.stop="onClick"
      >
        {{ item.label || toRaw(item.name) }}
      </component>
      <MenuItem
        v-if="item.items && item.showSubmenu"
        :class="item.class ? item.class + ' submenu' : 'submenu'"
        :items="item.items"
        :itemType="props.itemType"
        @hide="onHide"
        @action="(evt, item) => emit('action', evt, item)"
      />
    </li>
  </ul>
</template>

<script setup>
import { computed, toRaw } from 'vue';

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
  itemType: [Object, Function],
});

import { onMounted, onUnmounted, inject, ref, isProxy, toValue } from 'vue';

onMounted(() => window.addEventListener('click', hideSubmenusGlobal, true));
onUnmounted(() => window.removeEventListener('click', hideSubmenusGlobal, true));

function hideSubmenusGlobal(evt) {
  if (evt.target.closest('.menu')) {
    return;
  }

  hideSubmenus();
}

const emit = defineEmits(['hide', 'action']);

const localItems = computed(() => props.items.map(item => {
  const name = toValue(item.name)
      || toValue(item.label)
      || Math.random().toString(36).slice(2, 10);

  return {
    ...item,
    name,
  };
}));

const mainStyle = inject('style', {});
const style = {
  ...mainStyle?.button,
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

function onClick(evt) {
  const item = getItemForEvent(evt);
  if (!item) {
    return;
  }

  if (item.items) {
    item.showSubmenu = !item.showSubmenu;
  }

  emit('hide', evt);
  emit('action', evt, item);
}

function onHide(evt) {
  hideSubmenus();
  emit('hide', evt);
}

</script>

<style scoped>

ul.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

li.menu-item {
  margin: 0;
}

.menu-item > .label {
  display: block;
  padding: .3em .8em;
  text-decoration: none;
  color: inherit;
}

.has-submenu .label::after {
  content: '▸';
}

.submenu {
  position: fixed;
}

</style>