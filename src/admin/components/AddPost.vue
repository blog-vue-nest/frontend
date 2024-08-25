<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const categories = ref([]);

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


const photo = ref(null);

const uploadFile = (e) => {
  const [file] = e.target.files;
  
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      photo.value = e.target.result; // base64 строка      
      // console.log(e.target.result);  // Вывод base64 строки в консоль
    };
    reader.readAsDataURL(file); // Чтение файла в base64
  }
};

const previewFilePath = computed(() => {
  return photo.value ? photo.value : '#';
});


const categoryId = ref(0);
const titleEn = ref('');
const titleUa = ref('');
// const img = ref('');
const descriptionEn = ref('');
const descriptionUa = ref('');
const smallDescriptionEn = ref('');
const smallDescriptionUa = ref('');


const createPost = async () => {  
  try {
    // console.log('Preview File Path:', previewFilePath.value);

    axios.post(`http://localhost:3000/posts/create-post`, {
      "categoryId": +categoryId.value,
      "titleEn": titleEn.value,
      "titleUa": titleUa.value,
      "img": previewFilePath.value,
      "descriptionEn": descriptionEn.value,
      "descriptionUa": descriptionUa.value,
      "smallDescriptionEn": smallDescriptionEn.value,
      "smallDescriptionUa": smallDescriptionUa.value
    });

    // console.log(descriptionUa.value);
    // console.log(typeof descriptionUa.value);
    
    
    
  } catch (error) {
    console.error(`Error adding post`, error);
  }
}

</script>

<template>
  <div class="p-4 sm:ml-64">
    
<section>
  <h3 class="mb-3 font-raleway-700 text-center text-[24px]">Add post</h3>


<form @submit.prevent="handleSubmit, createPost()">

<label for="countries" class="block mb-2 text-sm font-medium text-dark-gray">Chose a category</label>
  <select v-model="categoryId" id="categories" required class="bg-gray-50 border border-gray-300 text-dark-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option v-for="category in categories" :key="category.id" :value="category.id" selected>{{ category.titleEn }} | {{ category.titleUa }}</option>
  </select>
  <p class="mt-1">
    {{ categoryId }}
  </p>

    <div class="grid gap-6 mt-3 mb-6 md:grid-cols-2">
        <div>
            <label for="titleEn" class="block mb-2 text-sm font-medium text-gray-900">English title</label>
            <input v-model="titleEn" type="text" id="titleEn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" required />
        </div>
        <div>
            <label for="titleUa" class="block mb-2 text-sm font-medium text-gray-900">Ukrainian title</label>
            <input v-model="titleUa" type="text" id="titleUa" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" required />
        </div>
    </div>

    <div class="mb-6">   
      <label class="block mb-2 text-sm font-medium text-dark-gray" for="file_input">Upload file</label>
      <input :v-model="photo" @change="uploadFile" class="block w-full text-sm text-dark-gray border border-dark-gray rounded-lg cursor-pointer bg-light-gray focus:outline-none" id="file_input" type="file" required />
      <img :src="previewFilePath" alt="" class="w-100 mt-2">
    </div> 

    <div class="mb-6">
      <label for="smallDescriptionEn" class="block mb-2 text-sm font-medium text-dark-gray">English small description</label>
      <textarea v-model="smallDescriptionEn" id="smallDescriptionEn" required rows="4" class="resize-none block p-2.5 w-full text-sm text-dark-gray bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write small description..."></textarea>
    </div>

    <div class="mb-6">
      <label for="smallDescriptionUa" class="block mb-2 text-sm font-medium text-dark-gray">Ukrainian small description</label>
      <textarea v-model="smallDescriptionUa" id="smallDescriptionUa" required rows="4" class="resize-none block p-2.5 w-full text-sm text-dark-gray bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write small description..."></textarea>
    </div>



    <div class="mb-6">
      <label for="descriptionEn">English description</label>
      <div class="mt-3">
        <quill-editor id="descriptionEn" toolbar="full" v-model:content="descriptionEn" contentType="html" theme="snow"></quill-editor>
        <!-- {{ descriptionEn }} -->
        <!-- <div v-html="descriptionEn"></div> -->
      </div>
    </div>

    <div class="mb-6">
      <label for="descriptionUa">Ukrainian description</label>
      <div class="mt-3">
        <!-- <QuillEditor toolbar="full" v-model="descriptionEn" /> -->
        <quill-editor id="descriptionUa" toolbar="full" v-model:content="descriptionUa" contentType="html" theme="snow"></quill-editor>
        <!-- {{ descriptionUa }} -->
        <!-- <div v-html="descriptionUa"></div> -->
      </div>
    </div>


    <!-- <div class="mb-6">
      <label for="descriptionEn" class="block mb-2 text-sm font-medium text-dark-gray">English full description</label>
      <textarea v-model="descriptionEn" id="descriptionEn" required rows="4" class="resize-none block p-2.5 w-full text-sm text-dark-gray bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write full description..."></textarea>
    </div> -->

    <!-- <div class="mb-6">
      <label for="descriptionUa" class="block mb-2 text-sm font-medium text-dark-gray">Ukrainian full description</label>
      <textarea v-model="descriptionUa" id="descriptionUa" required rows="4" class="resize-none block p-2.5 w-full text-sm text-dark-gray bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write full description..."></textarea>
    </div> -->



    <button type="submit" class="block mx-auto text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add post</button>
</form>





  </section>




  </div>
</template>

<style scoped>
</style>
