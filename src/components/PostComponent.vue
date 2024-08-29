<script setup>
import {formatDate, formatDateUa} from '@/utils/FormatDate'

import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
  postId: String,
})


const post = ref([]);

const getPost = async () => {
  try {
    // Загружаем пост по id
    const response = await axios.get(`http://localhost:3000/posts/get-post/${props.postId}`);
    post.value = response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

onMounted(() => {
  getPost();
});
</script>

<template>

    <div class="container px-[24px] pt-[39px] pb-[40px] md:px-[76px] md:pt-[45px] md:pb-[100px] 2xl:px-[104px] 2xl:pt-[77px] 2xl:pb-[131px]">

      <section class="mt-[46px] md:mt-[80px] 2xl:mt-[114px]">
        <!-- <div class="mt-[37px] mb-[57px] mx-[19px] flex flex-col items-center gap-[45px]"> -->
          <div class="mx-[19px]">

          <article v-if="$i18n.locale === 'en'" class="w-auto">
            <div>
              <img class="w-[100%] h-[258px] lg:h-[30vw] object-center object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span v-if="post && post.categoryId" class="font-roboto-700 text-dark">{{ post.category.titleEn }}</span>
               <!-- <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleEn || 'Unknown Category' }}</span> -->
              <!-- <span class="font-roboto-500 text-light-gray">{{ formatDate(post.createdAt) }}</span> -->
               <span class="font-roboto-500 text-light-gray">{{ formatDate(post.createdAt) }}</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ post.titleEn }}</h3>
              <div v-html="post.descriptionEn" class="current-post-description test mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]"></div>
            <!-- <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button> -->
          </article>

        <article v-if="$i18n.locale === 'ua'" class="w-auto">
            <div>
              <img class="w-[100%] h-[258px] 2sm:h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="post.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span v-if="post && post.categoryId" class="font-roboto-700 text-dark">{{ post.category.titleUa }}</span>
               <!-- <span v-if="categories[post.categoryId]" class="font-roboto-700 text-dark">{{ categories[post.categoryId].titleUa || 'Unknown Category' }}</span> -->
              <span class="font-roboto-500 text-light-gray capitalize">{{ formatDateUa(post.createdAt) }}</span> 
              </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ post.titleUa }}</h3>
            <p v-html="post.descriptionUa" class="current-post-description mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]"></p>
            <!-- <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Читати більше...</button> -->
          </article>
        </div>
      </section>
  </div>


</template>

<style>
.current-post-description > h1 {
  font-size: 54px;
  line-height: 120%;
}

.current-post-description > h2 {
  font-size: 44px;
  line-height: 120%;
}

.current-post-description > h3 {
  font-size: 34px;
  line-height: 120%;
}

.current-post-description > p {
  color: red;
}

.current-post-description img {
  margin: 30px auto;
}
</style>
