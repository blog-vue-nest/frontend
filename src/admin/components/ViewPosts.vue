<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { formatDate, formatDateUa } from '@/utils/FormatDate';
// import AddPost from './AddPost.vue';

const posts = ref([]);
const totalPages = ref(null);
const currentPage = ref(null);

const listOfPages = ref([]);

const generateArray = () => {
    for (let i = 1; i <= totalPages.value; i++) {
      listOfPages.value.push(i);
  } 
};


const getPosts = async (page = 1) => {
  try {
    const response = await axios.get(`http://localhost:3000/posts/get-all?page=${page}`);    
    posts.value = response.data.items;
    totalPages.value = response.data.meta.totalPages;
    currentPage.value = response.data.meta.currentPage;

    listOfPages.value = [];
    generateArray();
  } catch (error) {
    console.error('Error fetching posts:', error);    
  }
};

onMounted(() => {
  getPosts();
});

const deletePost = async (id) => {
  const result = confirm('Are you sure?');
  if (result) {
    try {
      axios.delete(`http://localhost:3000/posts/delete-post/${id}`);
    } catch (error) {
      console.error(`Error deleting post`, error);
    }
    alert('Post is deleted');
  } else {
    alert('Action is canceled');
  }
}

</script>

<template>

  <div class="p-4 sm:ml-64">
    <section>
      <h3 class="mb-8 font-raleway-700 text-center text-[24px]">Posts</h3>

      <div class="my-6">
        <router-link :to="{ name: 'AddPost'}">
          <button type="submit" class="block mb-3 text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add post</button>
        </router-link>
      </div>

       <div class="mx-[19px] md:mx-0 grid grid-cols-1 justify-items-center 2sm:grid-cols-2 2sm:gap-3 md:grid-cols-3 lg:grid-cols-4 gap-y-[45px] md:gap-y-[37px] md:gap-x-[12px] 2xl:gap-y-[53px] 2xl:gap-x-[16px]">

          <article v-if="$i18n.locale === 'en'" v-for="post in posts" :key="post.id" class="w-auto p-3 border border-dark rounded-md bg-[#AFD0CE]">
            <div>
              <img class="w-[100%] h-[128px] lg:h-[188px] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[18px] flex gap-[6px] text-[9px] leading-[150%] 2xl:text-[12px]">
              <!-- <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleEn || 'Unknown Category' }}</span> -->
              <span v-if="post && post.categoryId" class="font-roboto-700 text-dark">{{ post.category.titleEn }}</span>
              <span class="font-roboto-500 text-light-gray">{{ formatDate(post.createdAt) }}</span>
            </div>
            <h3 class="mt-[12px] capitalize font-raleway-700 text-dark text-[14px] leading-[23px] lining-nums proportional-nums
            2xl:text-[16px] 2xl:leading-[22px]">{{ post.titleEn }}</h3>
            <p class="mt-[5px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[120%]">{{ post.smallDescriptionEn }}</p>
              <router-link :to="{ name: 'Post', params: {id: post.id} }"><button class="mt-[14px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[14px] leading-[120%] underline">Read more...</button></router-link>
              <div class="mt-2 flex justify-center gap-3">
                    <Icon 
                      icon="rz:delete-circle" 
                      class="w-[24px] h-[24px] hover:cursor-pointer" 
                      @click="deletePost(post.id)"
                    />

                  <router-link v-if:="post && post.id" :to="{ name: 'ChangePost', params: { id: post.id } }">
                    <Icon 
                      icon="rz:edit-icon" 
                      class="w-[24px] h-[24px] hover:cursor-pointer" 
                    />
                 </router-link>
              </div>
              
          </article>

          <article v-if="$i18n.locale === 'ua'" v-for="post in posts" :key="post.id" class="w-auto p-3 border border-dark rounded-md bg-[#AFD0CE]">
            <div>
              <img class="w-[100%] h-[128px] lg:h-[188px] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[18px] flex gap-[6px] text-[9px] leading-[150%] 2xl:text-[12px]">
              <!-- <span class="font-roboto-700 text-dark">Travel</span> -->
               <!-- <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleUa || 'Unknown Category' }}</span> -->
              <span v-if="post && post.categoryId" class="font-roboto-700 text-dark">{{ post.category.titleUa }}</span>
              <span class="font-roboto-500 text-light-gray capitalize">{{ formatDateUa(post.createdAt) }}</span>
            </div>
            <h3 class="mt-[12px] capitalize font-raleway-700 text-dark text-[14px] leading-[23px] lining-nums proportional-nums
            2xl:text-[16px] 2xl:leading-[22px]">{{ post.titleUa }}</h3>
            <p class="mt-[5px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[120%]">{{ post.smallDescriptionUa }}</p>
            <router-link :to="{ name: 'Post', params: {id: post.id} }"><button class="mt-[14px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[14px] leading-[120%] underline">Читати більше...</button></router-link>
            <div class="mt-2 flex justify-center gap-3">
                    <Icon 
                      icon="rz:delete-circle" 
                      class="w-[24px] h-[24px] hover:cursor-pointer" 
                      @click="deletePost(post.id)"
                    />

                  <router-link v-if:="post && post.id" :to="{ name: 'ChangePost', params: { id: post.id } }">
                    <Icon 
                      icon="rz:edit-icon" 
                      class="w-[24px] h-[24px] hover:cursor-pointer" 
                    />
                 </router-link>
              </div>
          </article>
        </div>



        <div class="flex justify-center mt-6">
          

<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-sm">
    <li>
      <a v-if="currentPage > 1" @click="getPosts(--currentPage)" class="hover:cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-dark-gray bg-white border border-e-0 border-light-gray rounded-s-lg hover:bg-light-gray hover:text-dark-gray">Previous</a>
      <a v-else class="hover:cursor-not-allowed flex items-center justify-center px-3 h-8 ms-0 leading-tight text-dark-gray bg-white border border-e-0 border-light-gray rounded-s-lg hover:bg-light-gray">Previous</a>
    </li>



    <li v-if="listOfPages !== null" v-for="page in listOfPages" :key="page">
      <a v-if="currentPage !== page" @click="getPosts(page)" class="hover:cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-dark-gray bg-white border border-light-gray hover:bg-light-gray hover:text-dark-gray">
        {{ page }}
      </a>
      <a v-else class="hover:cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-dark-gray bg-white border border-light-gray hover:bg-light-gray hover:text-dark-gray">
        {{ page }}
      </a>
    </li>

    
    <li>
      <a v-if="currentPage < totalPages" @click="getPosts(++currentPage)" class="hover:cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-dark-gray bg-white border border-light-gray rounded-e-lg hover:bg-light-gray">Next</a>
      <a v-else class="hover:cursor-not-allowed flex items-center justify-center px-3 h-8 ms-0 leading-tight text-dark-gray bg-white border border-light-gray rounded-e-lg hover:bg-light-gray">Next</a>
    </li>
  </ul>
</nav>
</div>

    </section>
    
  </div>
</template>