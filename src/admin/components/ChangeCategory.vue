<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';

import { defineProps } from 'vue';

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
    <h3 class="mb-3 font-raleway-700 text-center text-[24px]">Add category</h3>

    <router-link :to="{ name: 'ViewCategories'}">View categories</router-link>

    

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