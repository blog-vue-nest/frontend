<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';

import { defineProps } from 'vue';

const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


const props = defineProps({
  categoryId: String
})

const titleEn = ref('');
const titleUa = ref('');

const changeCategory = async () => {
  const result = confirm('Are you sure?');
  if (result) {
    try {
      axios.patch(`http://localhost:3000/categories/update-category/${props.categoryId}`, {
        "titleEn": titleEn.value,
        "titleUa": titleUa.value
      });
    } catch (error) {
      console.error(`Error changing category`, error);
    }
    alert('Category is changed');
  } else {
    alert('Action is canceled');
  }
}

  const getCategory = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/categories/get-category/${props.categoryId}`);

    titleEn.value = response.data.titleEn;
    titleUa.value = response.data.titleUa;
  } catch (error) {
    console.error(`Error fetching category with id ${id}:`, error);
    return null; // Возвращаем null, если произошла ошибка
  }
};

onMounted(() => {
  getCategory()
})
</script>
  
<template>

  <div class="p-4 sm:ml-64">

  <section class="mt-3">
    <h3 class="mb-3 font-raleway-700 text-center text-[24px]">Change category</h3>

    <router-link :to="{ name: 'ViewCategories'}">
      <button type="submit" class="block mb-3 text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">View categories</button>
    </router-link>

    

<form @submit.prevent="handleSubmit, changeCategory()" class="mx-auto">


      <div class="grid gap-6 mt-3 mb-6 md:grid-cols-2">
        <div>
            <label for="titleEn" class="block mb-2 text-sm font-medium text-gray-900">English title</label>
            <input v-model="titleEn" type="text" id="titleEn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="English title" required />
        </div>
        <div>
            <label for="titleUa" class="block mb-2 text-sm font-medium text-gray-900">Ukrainian title</label>
            <input v-model="titleUa" type="text" id="titleUa" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ukrainian title" required />
        </div>
    </div>
    <button type="submit" class="block mx-auto text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Change category</button>

      </form>

    </section>
  </div>
</template>