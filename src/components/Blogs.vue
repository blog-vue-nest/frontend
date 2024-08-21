<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';
import {formatDate, formatDateUa} from '@/utils/FormatDate'

const posts = ref([]);
const categories = ref([]);

const getPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts/get-all?page=1');    
    posts.value = response.data.items;

    // Загружаем категории для каждого поста
    await Promise.all(posts.value.map(async (post) => {
      if (!categories.value[post.categoryId]) {
        const category = await getCategory(post.categoryId);
        categories.value[post.categoryId] = category;
      }
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};


const getCategory = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/categories/get-category/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with id ${id}:`, error);
    return null; // Возвращаем null, если произошла ошибка
  }
};

onMounted(() => {
  getPosts();
});

</script>

<template>

  <div class="container px-[24px] pt-[39px] pb-[40px] md:px-[76px] md:pt-[45px] md:pb-[100px] 2xl:px-[104px] 2xl:pt-[77px] 2xl:pb-[131px]">

      <section class="flex flex-col items-center text-center">
        <span class="uppercase font-raleway-700 text-dark-gray text-[12px] leading-[150%] tracking-[1.124px]
        2xl:text-[16px] 2xl:tracking-[1.6px]">{{ $t('BlogsBlock.name') }}</span>
        <h2 class="mt-[12px] w-[195px] font-raleway-700 text-dark text-[24px] leading-[124.8%] lining-nums proportional-nums
        md:mt-[17.5px] md:w-[511px] md:text-[34px] md:leading-[133.3%]
        2xl:mt-[25px] 2xl:w-[728px] 2xl:text-[48px]">{{ $t('BlogsBlock.title') }}</h2>
        <p class="mt-[22px] w-[322px] font-roboto-400 text-dark-gray text-[12px] leading-[150%]
        md:mt-[17.5px] md:w-[532px]
        2xl:mt-[25px] 2xl:text-[16px]">{{ $t('BlogsBlock.describe') }}</p>
      </section>

      <section class="mt-[46px] md:mt-[80px] 2xl:mt-[114px]">
        <!-- <div class="mt-[37px] mb-[57px] mx-[19px] flex flex-col items-center gap-[45px]"> -->
          <div class="mx-[19px] md:mx-0 grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-y-[45px] lg:gap-y-[37px] lg:gap-x-[12px] 2xl:gap-y-[53px] 2xl:gap-x-[16px]">

          <article v-if="$i18n.locale === 'en'" v-for="post in posts" :key="post.id" class="w-auto">
            <div>
              <img class="w-[100%] h-[258px] 2sm:h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <!-- <span v-for="category in categories" :key="category.id" v-if="category.id === post.categoryId" class="font-roboto-700 text-dark">{{ category.titleEn }}</span> -->
               <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleEn || 'Unknown Category' }}</span>
              <span class="font-roboto-500 text-light-gray">{{ formatDate(post.createdAt) }}</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ post.titleEn }}</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">{{ post.smallDescriptionEn }}</p>
              <router-link :to="{ name: 'Post', params: {id: post.id} }"><button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button></router-link>
          </article>

          <article v-if="$i18n.locale === 'ua'" v-for="post in posts" :key="post.id" class="w-auto">
            <div>
              <img class="w-[100%] h-[258px] 2sm:h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <!-- <span class="font-roboto-700 text-dark">Travel</span> -->
               <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleUa || 'Unknown Category' }}</span>
              <span class="font-roboto-500 text-light-gray capitalize">{{ formatDateUa(post.createdAt) }}</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ post.titleUa }}</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">{{ post.smallDescriptionUa }}</p>
            <router-link :to="{ name: 'Post', params: {id: post.id} }"><button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Читати більше...</button></router-link>
          </article>
        </div>
      </section>
  </div>
</template>

<style scoped>
</style>
