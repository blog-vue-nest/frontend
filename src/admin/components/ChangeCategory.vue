<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';

const categories = ref([]);

// const titleEn = ref('');
// const titleUa = ref('');

const changeCategory = async (id, titleEn, titleUa) => {
  const result = confirm('Are you sure?');
  if (result) {
    try {
      axios.patch(`http://localhost:3000/categories/update-category/${id}`, {
        "titleEn": titleEn,
        "titleUa": titleUa
      });
    } catch (error) {
      console.error(`Error changing category`, error);
    }
    alert('Category is changed');
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
    
  </div>
</template>