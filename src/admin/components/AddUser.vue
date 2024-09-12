<script setup>
import { ref } from 'vue';
import axios from 'axios';

// const titleEn = ref('');
// const titleUa = ref('');

const name = ref('');
const email = ref('');
const password = ref('');


// import { useAuthStore } from '@/store/auth.js';

// const authStore = useAuthStore();

// authStore.signIn("programmboy@gmail.com", "12345678");

const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


const addUser = async () => {  
  try {
    axios.post('http://localhost:3000/users/create-user', {
      'name': name.value,
      'email': email.value,
      'password': password.value
    });
    
  } catch (error) {
    console.error('Error adding user', error);
  }
}

</script>

<template>
  <div class="p-4 sm:ml-64">

  <section class="mt-3">
    <h3 class="mb-3 font-raleway-700 text-center text-[24px]">{{ $t('AdminPanel.AddUser.title') }}</h3>

    <router-link :to="{ name: 'ViewUsers'}">
      <button type="submit" class="block mb-3 text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{{ $t('AdminPanel.AddUser.viewButton') }}</button>
    </router-link>

    

<form @submit.prevent="handleSubmit, addUser()" class="mx-auto">

      <div class="grid gap-6 mt-3 mb-6 xl:grid-cols-3">
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">{{ $t('AdminPanel.AddUser.name') }}</label>
            <input v-model="name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" :placeholder="$t('AdminPanel.AddUser.name')" required />
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">{{ $t('AdminPanel.AddUser.email') }}</label>
            <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" :placeholder="$t('AdminPanel.AddUser.email')" required />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">{{ $t('AdminPanel.AddUser.password') }}</label>
          <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" :placeholder="$t('AdminPanel.AddUser.password')" required />
        </div>
    </div>
    <button type="submit" class="block mx-auto text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{{ $t('AdminPanel.AddUser.addButton') }}</button>




</form>

</section>




  </div>
</template>

<style scoped>
</style>
