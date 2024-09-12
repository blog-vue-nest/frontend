<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';

import { defineProps } from 'vue';

const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const props = defineProps({
  userId: String
})

const name = ref('');
const email = ref('');

const changeUser = async () => {
  const result = confirm('Are you sure?');
  if (result) {
    try {
      axios.post(`http://localhost:3000/users/update-user/${props.userId}`, {
        "name": name.value,
        "email": email.value
      });
    } catch (error) {
      console.error('Error changing user', error);
    }
    alert('User is changed');
  } else {
    alert('Action is canceled');
  }
}

  const getUser = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/users/get-user/${props.userId}`);

    name.value = response.data.name;
    email.value = response.data.email;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    return null; // Возвращаем null, если произошла ошибка
  }
};

onMounted(() => {
  getUser()
})
</script>
  
<template>

  <div class="p-4 sm:ml-64">

  <section class="mt-3">
    <h3 class="mb-3 font-raleway-700 text-center text-[24px]">{{ $t('AdminPanel.ChangeUser.title') }}</h3>

    <router-link :to="{ name: 'ViewUsers'}">
      <button type="submit" class="block mb-3 text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{{ $t('AdminPanel.ChangeUser.viewButton') }}</button>
    </router-link>

    

<form @submit.prevent="handleSubmit, changeUser()" class="mx-auto">


      <div class="grid gap-6 mt-3 mb-6 md:grid-cols-2">
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900">{{ $t('AdminPanel.ChangeUser.name') }}</label>
            <input v-model="name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" :placeholder="$t('AdminPanel.ChangeUser.name')" required />
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">{{ $t('AdminPanel.ChangeUser.email') }}</label>
            <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" :placeholder="$t('AdminPanel.ChangeUser.email')" required />
        </div>
    </div>
    <button type="submit" class="block mx-auto text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{{ $t('AdminPanel.ChangeUser.changeButton') }}</button>




</form>

</section>




  </div>




  <!-- <div class="p-4 sm:ml-64">
    <section>
      <h3 class="mb-8 font-raleway-700 text-center text-[24px]">Change category</h3>

       <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    English Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Ukrainian Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="category in categories" class="odd:bg-white even:bg-gray-50 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {{ category.id }}
                </th>
                <td class="px-6 py-4">
                  <input v-model="category.titleEn" required>
                </td>
                <td class="px-6 py-4">
                     <input v-model="category.titleUa" required>
                </td>
                <td class="px-6 py-4">
                    <span @click="changeCategory(category.id, category.titleEn, category.titleUa)" class="hover:cursor-pointer">Edit</span>
                </td>
            </tr>
        </tbody>
    </table>
  </div>

    </section>
    
  </div> -->
</template>