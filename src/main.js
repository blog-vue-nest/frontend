import './index.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router';

import './assets/iconify/index.ts';
import { Icon } from '@iconify/vue';

import { languages, defaultLocale } from './i18n';
import { createI18n } from 'vue-i18n';

import { QuillEditor } from '@vueup/vue-quill';
import 'quill/dist/quill.snow.css';

const messages = Object.assign(languages);
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
});

const app = createApp(App);

app.use(i18n)
app.use(router)
app.component('Icon', Icon)
app.component('QuillEditor', QuillEditor);
app.mount('#app');


