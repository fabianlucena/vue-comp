<template>
  <ButtonIcon @click="evt => toggleMode()">
    <IconSun v-if="isDarkMode" />
    <IconMoon v-else />
  </ButtonIcon>
</template>

<script setup>
import { ref } from 'vue';
import ButtonIcon from '../ButtonIcon.vue';
import IconSun from '../icons/Sun.vue';
import IconMoon from '../icons/Moon.vue';

defineOptions({
  name: 'ButtonLightDark',
});

const isDarkMode = ref(false);

function toggleMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light');
}
</script>

<style>
</style>