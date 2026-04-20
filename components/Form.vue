<template>
  <form>
    <slot></slot>
    <Button
      v-if="submit || submit === null && attrs.onSubmit"
      type="submit"
    >
      {{ !submit || submit === true ? _('Submit') : submit }}
    </Button>
    
    <Button
      v-if="cancel || cancel === null && attrs.onCancel"
      @click="evt => $emit('cancel', evt)"
    >
      {{ !cancel || cancel === true ? _('Cancel') : cancel }}
    </Button>
  </form>
</template>

<script setup>

import { useAttrs } from 'vue';
import { _ } from './locale.js';
import Button from './Button.vue';

const props = defineProps({
  submit: {
    type: [ String, Boolean ],
    default: true,
  },
  cancel: {
    type: [ String, Boolean ],
    default: null,
  },
});

const attrs = useAttrs();

</script>

<style>
</style>