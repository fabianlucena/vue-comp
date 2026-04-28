<template>
  <Label :label="props.label" :for="id">
    <input
      :type="props.type"
      :name="props.name"
      :id="id"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </Label>
</template>

<script setup>
import Label from './Field.vue';

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  label: String,
  name: String,
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const id = props.id || Math.random().toString(36).slice(2, 10);
</script>