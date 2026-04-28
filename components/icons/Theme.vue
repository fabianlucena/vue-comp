<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <!-- Sun -->
    <circle cx="12" cy="12" r="5" fill="#FFD700" stroke="#FFD700"/>

    <!-- Sun rays -->
    <line x1="12" y1="1" x2="12" y2="4" stroke="#FFD700" stroke-width="2" stroke-linecap="round"/>
    <line x1="12" y1="20" x2="12" y2="23" stroke="#FFD700" stroke-width="2" stroke-linecap="round"/>
    <line x1="20" y1="12" x2="23" y2="12" stroke="#FFD700" stroke-width="2" stroke-linecap="round"/>
    <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" stroke="#FFD700" stroke-width="2" stroke-linecap="round"/>
    <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" stroke="#FFD700" stroke-width="2" stroke-linecap="round"/>

    <!-- Moon -->
    <path
      d="M12 21.5a8.5 8.5 0 0 1-7.2-12.9A8.8 8.8 0 1 0 17 20.8 8.5 8.5 0 0 1 12 21.5Z"
      transform="translate(3.5 -4.0)"
      fill="#1A1A80"
      stroke="#1A1A80"
    />
  </svg>
</template>

<script setup>

defineOptions({
    name: 'IconTheme',
});

</script>