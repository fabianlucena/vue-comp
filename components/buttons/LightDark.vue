<template>
  <ButtonIcon>
    <IconSun v-if="value === 'light'" />
    <IconMoon v-else-if="value === 'dark'" />
    <IconTheme v-else />
  </ButtonIcon>
</template>

<script setup>
import ButtonIcon from '../ButtonIcon.vue';
import IconSun from '../icons/Sun.vue';
import IconMoon from '../icons/Moon.vue';
import IconTheme from '../icons/Theme.vue';

defineOptions({
  name: 'ButtonLightDark',
});

defineProps({
  value: String,
});

</script>

<style>
</style>