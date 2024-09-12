<script setup>

import { ref } from 'vue';

import { useRouter } from 'vue-router';


const router = useRouter();

import { useAuthStore } from '@/store/auth.js';
const authStore = useAuthStore();

const token = ref(null);
token.value = localStorage.getItem('token');

const email = ref('');
const password = ref('');

const auth = async () => {
  try {
    await authStore.signIn(email.value, password.value);
    token.value = localStorage.getItem('token');
    // console.log('Полученный токен:', token.value);
    if (token.value) {
      // console.log('Токен существует!');
      await router.push({ name: 'ViewCategories' });
    } else {
      console.log('Токен не существует.');
    }
  } catch (error) {
    console.error('Ошибка при аутентификации:', error);
  }
};

</script>

<template>

<div class="bg-light-gray w-[90%] md:w-[50%] xl:w-[30%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
px-[20px] py-[20px] rounded-xl">
  <h1 class="font-raleway-500 text-[20px] text-gray-900 text-center pb-[20px]">{{ $t('AdminPanel.Authorization.title') }}</h1>

  <form @submit.prevent="auth" class="w-full px-[30px] flex flex-col gap-5 font-roboto-400 text-[16px]">
    <div>
      <label for="email" class="block text-md mb-2 font-roboto-400 text-black">{{ $t('AdminPanel.Authorization.email') }}</label>
      <input v-model="email" id="email" class="w-full rounded-md px-[10px] py-[5px] outline-none" type="email" required>
    </div>
    <div>
      <label for="password" class="block text-md mb-2 font-roboto-400 text-black">{{ $t('AdminPanel.Authorization.password') }}</label>
      <input v-model="password" id="password" class="w-full rounded-md px-[10px] py-[5px] outline-none" type="password" required>
    </div>
    <button class="w-fit mx-auto bg-violet px-[20px] py-[10px] rounded-[12px] font-raleway-700 text-white">{{ $t('AdminPanel.Authorization.button') }}</button>
  </form>
</div>

</template>

