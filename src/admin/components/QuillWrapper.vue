<template>
  <quill-editor
    v-model="localContent"
    :options="editorOptions"
    @blur="emitContent"
  ></quill-editor>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);
const localContent = ref(props.modelValue);

const editorOptions = {
  theme: 'snow', // Используем правильную тему
};

const emitContent = () => {
  emit('update:modelValue', localContent.value);
};

// Следим за изменениями modelValue и обновляем localContent
watch(() => props.modelValue, (newVal) => {
  localContent.value = newVal;
});
</script>