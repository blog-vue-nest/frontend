<script setup>
// import { defineComponent } from 'vue'
import Header from '../components/Header.vue'
import Subscribe from '../components/Subscribe.vue';
import Footer from '../components/Footer.vue';
// import PostComponent from '@/components/PostComponent.vue';
import {formatDate, formatDateUa} from '@/utils/FormatDate'

import { ref, onMounted, defineProps } from 'vue';
import axios from 'axios';
// import { format } from 'date-fns';


const props = defineProps({
  id: {
    type: String,
    required: true
  }
})


const post = ref([]);
const category = ref([]);


const getPost = async () => {
  try {
    // Загружаем пост по id
    const response = await axios.get(`http://localhost:3000/posts/get-post/${props.id}`);
    post.value = response.data;
    const categoryId = response.data.categoryId;

    if (post.value && categoryId) {
      await getCategory(categoryId);
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

const getCategory = async (categoryId) => {
   try {
    // Загружаем категорию по id
    const response = await axios.get(`http://localhost:3000/categories/get-category/${categoryId}`);
    
    category.value = response.data;
  } catch (error) {
    console.error(`Error fetching category with id ${categoryId}:`, error);
    category.value = null; // Возвращаем null, если произошла ошибка
  }
};

onMounted(() => {
  getPost();
});
</script>

<template>
  <Header />

  <!-- <PostComponent /> -->

    <div class="container px-[24px] pt-[39px] pb-[40px] md:px-[76px] md:pt-[45px] md:pb-[100px] 2xl:px-[104px] 2xl:pt-[77px] 2xl:pb-[131px]">

      <section class="mt-[46px] md:mt-[80px] 2xl:mt-[114px]">
        <!-- <div class="mt-[37px] mb-[57px] mx-[19px] flex flex-col items-center gap-[45px]"> -->
          <div class="mx-[19px] md:mx-0 grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-y-[45px] lg:gap-y-[37px] lg:gap-x-[12px] 2xl:gap-y-[53px] 2xl:gap-x-[16px]">

          <article v-if="$i18n.locale === 'en'" class="w-auto">
            <div>
              <img class="w-[100%] h-[258px] 2sm:h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">{{ category.titleEn }}</span>
               <!-- <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleEn || 'Unknown Category' }}</span> -->
              <!-- <span class="font-roboto-500 text-light-gray">{{ formatDate(post.createdAt) }}</span> -->
               <span class="font-roboto-500 text-light-gray">{{ formatDate(post.createdAt) }}</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ post.titleEn }}</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">{{ post.smallDescriptionEn }} {{ post.img }}</p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>

        <article v-if="$i18n.locale === 'ua'" class="w-auto">
            <div>
              <img class="w-[100%] h-[258px] 2sm:h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">{{ category.titleUa }}</span>
               <!-- <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleUa || 'Unknown Category' }}</span> -->
              <span class="font-roboto-500 text-light-gray capitalize">{{ formatDateUa(post.createdAt) }}</span> 
              </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ post.titleUa }}</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">{{ post.smallDescriptionUa }}</p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Читати більше...</button>
          </article>
        </div>
      </section>
  </div>

  <Subscribe />
  <Footer />
</template>

<style scoped></style>