<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';

const categories = ref([]);

const deleteCategory = async (id) => {
  const result = confirm('Are you sure?');
  if (result) {
    try {
      axios.delete(`http://localhost:3000/categories/delete-category/${id}`);
    } catch (error) {
      console.error(`Error deleting category`, error);
    }
    alert('Category is deleted');
  } else {
    alert('Action is canceled');
  }

  
}

  const getCategories = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/categories/get-all?page=1&limit=100`);
    categories.value = response.data.items;    
  } catch (error) {
    console.error(`Error fetching category with id ${id}:`, error);
    return null; // Возвращаем null, если произошла ошибка
  }
};

onMounted(() => {
  getCategories()
})
</script>

<template>
  <div class="p-4 sm:ml-64">
    
<section>
  <h3 class="mb-3 font-raleway-700 text-center text-[24px]">All categories</h3>


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
                    {{ category.titleEn }}
                </td>
                <td class="px-6 py-4">
                     {{ category.titleUa }}
                </td>
                <td class="px-6 py-4">
                    <span @click="deleteCategory(category.id)" class="hover:cursor-pointer">X</span>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</section>

  </div>
</template>

<style scoped>
</style>
