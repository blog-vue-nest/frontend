<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import QuillWrapper from './QuillWrapper.vue';

const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const editorKey = ref(0); // ref для QuillEditor

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


const props = defineProps({
  postId: String
});

// const post = ref([]);

const formData = ref({
  categoryId: 0,
  titleEn: '',
  titleUa: '',
  img: null,
  descriptionEn: '',
  descriptionUa: '',
  smallDescriptionEn: '',
  smallDescriptionUa: ''
})

const getPost = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/posts/get-post/${props.postId}`);    
    const post = response.data;

    formData.value = {
      categoryId: post.categoryId,
      titleEn: post.titleEn,
      titleUa: post.titleUa,
      img: post.img,
      descriptionEn: post.descriptionEn,
      descriptionUa: post.descriptionUa,
      smallDescriptionEn: post.smallDescriptionEn,
      smallDescriptionUa: post.smallDescriptionUa
    }

    editorKey.value += 1;
    
  } catch (error) {
    console.error('Error fetching posts:', error);    
  }
};

onMounted(() => {
  getPost();
});

const uploadFile = (e) => {
  const [file] = e.target.files;
  
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      formData.value.img = e.target.result; // base64 строка      
      // console.log(e.target.result);  // Вывод base64 строки в консоль
    };
    reader.readAsDataURL(file); // Чтение файла в base64
  }
};

const previewFilePath = computed(() => {
  return formData.value.img ? formData.value.img : '#';
});


const changePost = async () => {  
  try {
    // console.log('Preview File Path:', previewFilePath.value);

    axios.patch(`http://localhost:3000/posts/update-post/${props.postId}`, formData.value);

    // formData.value = {
    //   categoryId: 0,
    //   titleEn: '',
    //   titleUa: '',
    //   descriptionEn: '',
    //   descriptionUa: '',
    //   smallDescriptionEn: '',
    //   smallDescriptionUa: ''
    // }

    // editorKey.value += 1;

  } catch (error) {
    console.error(`Error adding post`, error);
  }
}

</script>

<template>
  <div class="p-4 sm:ml-64">
    <section>
      <h3 class="mb-3 font-raleway-700 text-center text-[24px]">{{ $t('AdminPanel.ChangePost.title') }}</h3>

       <div class="my-6">
    <router-link :to="{ name: 'ViewPosts'}">
      <button type="submit" class="block mb-3 text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{{ $t('AdminPanel.ChangePost.viewButton') }}</button>
    </router-link>
  </div>


<form @submit.prevent="handleSubmit, changePost()">

<label for="categories" class="block mb-2 text-sm font-medium text-dark-gray">{{ $t('AdminPanel.ChangePost.choseCategory') }}</label>
  <select v-model="formData.categoryId" id="categories" required class="bg-gray-50 border border-gray-300 text-dark-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.titleEn }} | {{ category.titleUa }}</option>
  </select>
  <p class="mt-1">
    {{ formData.categoryId }}
  </p>

    <div class="grid gap-6 mt-3 mb-6 md:grid-cols-2">
        <div>
            <label for="titleEn" class="block mb-2 text-sm font-medium text-gray-900">{{ $t('AdminPanel.ChangePost.nameEn') }}</label>
            <input v-model="formData.titleEn" type="text" id="titleEn" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" :placeholder="$t('AdminPanel.ChangePost.nameEn')" required />
        </div>
        <div>
            <label for="titleUa" class="block mb-2 text-sm font-medium text-gray-900">{{ $t('AdminPanel.ChangePost.nameUa') }}</label>
            <input v-model="formData.titleUa" type="text" id="titleUa" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" :placeholder="$t('AdminPanel.ChangePost.nameUa')" required />
        </div>
    </div>

    <div class="mb-6">   
      <label class="block mb-2 text-sm font-medium text-dark-gray" for="file_input">{{ $t('AdminPanel.ChangePost.upload') }}</label>
      <input :v-model="formData.img" @change="uploadFile" class="block w-full text-sm text-dark-gray border border-dark-gray rounded-lg cursor-pointer bg-light-gray focus:outline-none" id="file_input" type="file" />
      <img :src="previewFilePath" alt="" class="w-100 mt-2">
    </div> 

    <div class="mb-6">
      <label for="smallDescriptionEn" class="block mb-2 text-sm font-medium text-dark-gray">{{ $t('AdminPanel.ChangePost.smallDescriptionEn') }}</label>
      <textarea v-model="formData.smallDescriptionEn" id="smallDescriptionEn" required rows="4" class="resize-none block p-2.5 w-full text-sm text-dark-gray bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" :placeholder="$t('AdminPanel.ChangePost.smallDescriptionPlaceholder')"></textarea>
    </div>

    <div class="mb-6">
      <label for="smallDescriptionUa" class="block mb-2 text-sm font-medium text-dark-gray">{{ $t('AdminPanel.ChangePost.smallDescriptionUa') }}</label>
      <textarea v-model="formData.smallDescriptionUa" id="smallDescriptionUa" required rows="4" class="resize-none block p-2.5 w-full text-sm text-dark-gray bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" :placeholder="$t('AdminPanel.ChangePost.smallDescriptionPlaceholder')"></textarea>
    </div>


    <div class="mb-6">
      <label for="descriptionEn">{{ $t('AdminPanel.ChangePost.descriptionEn') }}</label>
      <div class="mt-3">
        <QuillWrapper 
          id="descriptionEn" 
          v-model="formData.descriptionEn" 
          :key="editorKey"
        />
        <!-- <div v-html="formData.descriptionEn"></div> -->
      </div>
    </div>

    <div class="mb-6">
      <label for="descriptionUa">{{ $t('AdminPanel.ChangePost.descriptionUa') }}</label>
      <div class="mt-3">
        <QuillWrapper 
          id="descriptionUa" 
          v-model="formData.descriptionUa" 
          :key="editorKey"
        />
        <!-- <div v-html="formData.descriptionUa"></div> -->
      </div>
    </div>

    <button type="submit" class="block mx-auto text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{{ $t('AdminPanel.ChangePost.changeButton') }}</button>
</form>


    </section>
    
  </div>
</template>