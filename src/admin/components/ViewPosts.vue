<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';
import {formatDate, formatDateUa} from '@/utils/FormatDate'

const posts = ref([]);

const getPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts/get-all?page=1');    
    posts.value = response.data.items;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

onMounted(() => {
  getPosts();
});

</script>

<template>
  <div class="p-4 sm:ml-64">
    <section>
      <h3 class="mb-8 font-raleway-700 text-center text-[24px]">View posts</h3>

       <div class="mx-[19px] md:mx-0 grid grid-cols-1 justify-items-center 2sm:grid-cols-2 2sm:gap-3 md:grid-cols-3 lg:grid-cols-4 gap-y-[45px] md:gap-y-[37px] md:gap-x-[12px] 2xl:gap-y-[53px] 2xl:gap-x-[16px]">

          <article v-if="$i18n.locale === 'en'" v-for="post in posts" :key="post.id" class="w-auto">
            <div>
              <img class="w-[100%] h-[198px] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <!-- <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleEn || 'Unknown Category' }}</span> -->
              <span v-if="post && post.categoryId" class="font-roboto-700 text-dark">{{ post.category.titleEn }}</span>
              <span class="font-roboto-500 text-light-gray">{{ formatDate(post.createdAt) }}</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ post.titleEn }}</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">{{ post.smallDescriptionEn }}</p>
              <router-link :to="{ name: 'Post', params: {id: post.id} }"><button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button></router-link>
          </article>

          <article v-if="$i18n.locale === 'ua'" v-for="post in posts" :key="post.id" class="w-auto">
            <div>
              <img class="w-[100%] h-[198px] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <!-- <span class="font-roboto-700 text-dark">Travel</span> -->
               <!-- <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleUa || 'Unknown Category' }}</span> -->
              <span v-if="post && post.categoryId" class="font-roboto-700 text-dark">{{ post.category.titleUa }}</span>
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