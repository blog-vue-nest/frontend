<script setup>
import { ref } from 'vue';
import axios from 'axios';

const titleEn = ref('');
const titleUa = ref('');

const addCategory = async () => {  
  try {
    axios.post(`http://localhost:3000/categories/create-category`, {
      'titleEn': titleEn.value,
      'titleUa': titleUa.value
    });
    
  } catch (error) {
    console.error(`Error adding category`, error);
  }
}

</script>

<template>
  <div class="p-4 sm:ml-64">

  <section class="mt-3">
    <h3 class="mb-3 font-raleway-700 text-center text-[24px]">Add category</h3>

    

<form @submit.prevent="handleSubmit, addCategory()" class="mx-auto">

  <!-- <div class="relative z-0 w-full mb-5 group">
    <input v-model="titleEn" type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-dark-gray bg-transparent border-0 border-b-2 border-light-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#039be5] peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-light-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#039be5] peer-placeholder-shown:scale-80 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-8">English title</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input v-model="titleUa" type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-dark-gray bg-transparent border-0 border-b-2 border-light-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#039be5] peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-light-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#039be5] peer-placeholder-shown:scale-80 peer-placeholder-shown:translate-y-0 peer-focus:scale-80 peer-focus:-translate-y-8">Ukrainian title</label>
  </div>
  <button type="submit" class="block mx-auto text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add category</button> -->



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
    <button type="submit" class="block mx-auto text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add category</button>




</form>

</section>




  </div>
</template>

<style scoped>
</style>
