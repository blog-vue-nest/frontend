<template>
  <QuillEditor 
  v-model:content="content" 
  content-type="html"
  :toolbar="toolbarOptions" 
  theme="snow" />
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import { QuillEditor, Quill } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// const toolbarOptions = [
//   { header: [1, 2, 3, false] }, // Заголовки 1-3 уровней
//   'bold', 'italic', 'underline', 'strike', // Текстовое форматирование
//   'blockquote', 'code-block',
//   { list: 'ordered' }, { list: 'bullet' }, // Упорядоченные и неупорядоченные списки
//   'image', // Вставка изображений
// ];

const Font = Quill.import('formats/font');
Font.whitelist = ['raleway', 'roboto'];
Quill.register(Font, true);

const Size = Quill.import('formats/size');
Size.whitelist = ['small', 'medium', 'large', 'extra-large'];
Quill.register(Size, true);

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
 // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
 // [{ 'direction': 'rtl' }],                         // text direction

  // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'size': ['small', 'medium', 'large', 'extra-large'] }],
 // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
 // [{ 'font': [] }],
  [{ 'font': ['raleway', 'roboto'] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
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

<style>
/* Настройка кастомных шрифтов */
.ql-editor {
  font-family: 'Roboto-Regular', sans-serif;
}

.ql-font-raleway {
  font-family: 'Raleway-Regular', sans-serif;
}

.ql-font-roboto {
  font-family: 'Roboto-Regular', sans-serif;
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="raleway"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="raleway"]::before {
  content: 'Raleway';
  font-family: 'Raleway-Regular', sans-serif;
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="roboto"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="roboto"]::before {
  content: 'Roboto';
  font-family: 'Roboto-Regular', sans-serif;
}


/* Настройка кастомных размеров шрифта */
.ql-size-small {
  font-size: 12px;
}

.ql-size-medium {
  font-size: 16px;
}

.ql-size-large {
  font-size: 26px;
}

.ql-size-extra-large {
  font-size: 32px;
}

/* Настройка отображаемого текста в тулбаре */
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: 'Small';
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="medium"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="medium"]::before {
  content: 'Medium';
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: 'Large';
}

.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="extra-large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="extra-large"]::before {
  content: 'Extra Large';
}


/* Стили для блока цитаты (blockquote) */
.ql-editor blockquote {
  border-left: 4px solid #7C4EE4;
  padding-left: 16px;
  margin-left: 0;
  margin-right: 0;
  font-style: italic;
  color: #555;
  background-color: #f9f9f9;
  border-radius: 4px;
  padding: 12px 16px;
}

.ql-editor blockquote::before {
  content: "“";
  font-size: 24px;
  font-weight: bold;
  color: #ccc;
  margin-right: 8px;
  vertical-align: top;
}

.ql-editor blockquote::after {
  content: "”";
  font-size: 24px;
  font-weight: bold;
  color: #ccc;
  margin-left: 8px;
  vertical-align: bottom;
}
</style>