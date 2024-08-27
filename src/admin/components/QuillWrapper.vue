<template>
  <QuillEditor 
  v-model:content="content" 
  content-type="html"
  :toolbar="toolbarOptions" 
  theme="snow" />
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const toolbarOptions = [
  { header: [1, 2, 3, false] }, // Заголовки 1-3 уровней
  'bold', 'italic', 'underline', 'strike', // Текстовое форматирование
  'blockquote',
  { list: 'ordered' }, { list: 'bullet' }, // Упорядоченные и неупорядоченные списки
  'image', // Вставка изображений
];

const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const content = ref(props.modelValue);

watch(content, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>