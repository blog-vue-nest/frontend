<script setup>
// import { Icon } from '@iconify/vue';

import { ref, onMounted} from 'vue';
import axios from 'axios';
import { formatDate, formatDateUa } from '@/utils/FormatDate';

const popularPosts = ref([]);
const recentPosts = ref([]);
const recentPost = ref([]);
const categories = ref([]);


const getPopularPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts/get-popular');    
    popularPosts.value = response.data;    
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const getRecentPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts/get-recent');    
    recentPosts.value = response.data;    

    recentPost.value = response.data[0];
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

onMounted(() => {
  getPopularPosts(),
  getRecentPosts()
});

</script>

<template>
  <div class="container px-[24px] pt-[42px] pb-[40px] md:px-[76px] md:pt-[94px] md:pb-[137px] 2xl:px-[104px] 2xl:pt-[131px] 2xl:pb-[191px]">
  <section>
      <article v-if="$i18n.locale === 'en'" class="relative px-[17px] pt-[20px] pb-[28px] border border-[#DBDBDB] rounded-[11.488px] md:p-0 md:border-none">
        <div>
          <!-- <img src="../assets/img/main-post.jpg" class="w-[293px] h-[200px] object-cover rounded-[5.5px]" alt="VR"> -->
           <img :src="recentPost.img" class="w-[100%] h-[50vw] object-cover rounded-[5.5px] md:rounded-[12px] 2xl:rounded-[16px]
           md:h-[35vw]" alt="VR">
        </div>
        <div class="mt-[26.7px] bg-white md:absolute md:bottom-[-80px] md:right-0 2xl:bottom-[-140px] md:w-[70%] md:rounded-[11.488px] md:px-[23px] lg:pr-[75px] md:pt-[23px] md:mb-[30px]
        2xl:pt-[32px] 2xl:pl-[32px] 2xl:pb-[42px] 2xl:pr-[104px] 2xl:rounded-[16px]">
          <div class="flex gap-[5.74px] text-[8.6px] 2xl:text-[12px] leading-[150%]">
            <!-- <span v-if="categories[recentPost.categoryId]" class="uppercase font-roboto-700 text-dark">{{ categories[recentPost.categoryId].titleEn || 'Unknown Category' }}</span> -->
            <span v-if="recentPost && recentPost.id" class="uppercase font-roboto-700 text-dark">{{ recentPost.category.titleEn }}</span>
            <span class="font-roboto-500 text-light-gray">{{ formatDate(recentPost.createdAt) }}</span>
          </div>
          <h3 class="mt-[18px] font-raleway-700 text-dark text-[23px] leading-[24.3px] tracking-[-0.71px]
          2xl:text-[32px] 2xl:leading-[45px] 2xl:tracking-[-1px]">{{ recentPost.titleEn }}</h3>
          <p class="mt-[27px] font-roboto-400 text-dark-gray text-[12px] leading-[150%] 2xl:text-[16px]">{{ recentPost.smallDescriptionEn }}
          </p>
          <router-link v-if="recentPost && recentPost.id" :to="{ name: 'Post', params: { id: recentPost.id } }"><button class="mt-[21px] border-[0.718px] border-violet rounded-[5.744px] px-[35px] py-[12px] capitalize font-roboto-700 text-[10px] leading-[150%] text-violet
          2xl:text-[14px] 2xl:px-[48px] 2xl:py-[16px] 2xl:rounded-[8px]">Read more</button></router-link>
        </div>
      </article>

      <article v-if="$i18n.locale === 'ua'" class="relative px-[17px] pt-[20px] pb-[28px] border border-[#DBDBDB] rounded-[11.488px] md:p-0 md:border-none">
        <div>
          <!-- <img src="../assets/img/main-post.jpg" class="w-[293px] h-[200px] object-cover rounded-[5.5px]" alt="VR"> -->
           <img :src="recentPost.img" class="w-[100%] h-[50vw] object-cover rounded-[5.5px] md:rounded-[12px] 2xl:rounded-[16px]
           md:h-[35vw]" alt="VR">
        </div>
        <div class="mt-[26.7px] bg-white md:absolute md:bottom-[-80px] md:right-0 2xl:bottom-[-140px] md:w-[70%] md:rounded-[11.488px] md:px-[23px] lg:pr-[75px] md:pt-[23px] md:mb-[30px]
        2xl:pt-[32px] 2xl:pl-[32px] 2xl:pb-[42px] 2xl:pr-[104px] 2xl:rounded-[16px]">
          <div class="flex gap-[5.74px] text-[8.6px] 2xl:text-[12px] leading-[150%]">
            <!-- <span v-if="categories[recentPost.categoryId]" class="uppercase font-roboto-700 text-dark">{{ categories[recentPost.categoryId].titleUa || 'Невідома Категорія' }}</span> -->
             <span v-if="recentPost && recentPost.id" class="uppercase font-roboto-700 text-dark">{{ recentPost.category.titleUa }}</span>
            <span class="font-roboto-500 text-light-gray">{{ formatDateUa(recentPost.createdAt) }}</span>
          </div>
          <h3 class="mt-[18px] font-raleway-700 text-dark text-[23px] leading-[24.3px] tracking-[-0.71px]
          2xl:text-[32px] 2xl:leading-[45px] 2xl:tracking-[-1px]">{{ recentPost.titleUa }}</h3>
          <p class="mt-[27px] font-roboto-400 text-dark-gray text-[12px] leading-[150%] 2xl:text-[16px]">{{ recentPost.smallDescriptionUa }}
          </p>
          <router-link v-if="recentPost && recentPost.id" :to="{ name: 'Post', params: { id: recentPost.id } }"><button class="mt-[21px] border-[0.718px] border-violet rounded-[5.744px] px-[35px] py-[12px] capitalize font-roboto-700 text-[10px] leading-[150%] text-violet
          2xl:text-[14px] 2xl:px-[48px] 2xl:py-[16px] 2xl:rounded-[8px]">Читати більше</button></router-link>
        </div>
      </article>
    </section>

      <section>
        <div class="flex justify-between items-center mt-[65px] md:mt-[125px] 2xl:mt-[160px]">
          <h2 class="capitalize font-raleway-700 text-dark text-[20px] leading-[36px] tracking-[-0.632px]
          md:text-[35px] 2xl:text-[48px] 2xl:leading-[50px] 2xl:tracking-[-0.88px]">{{ $t('MainPage.RecentPosts.title') }}</h2>
          <router-link :to="{name: 'BlogList'}"><button class="capitalize px-[35px] py-[12px] bg-violet rounded-[6px] font-roboto-700 text-white text-[10px] leading-[150%]
          2xl:text-[14px] 2xl:rounded-[8px] 2xl:py-[16px] 2xl:px-[48px]">{{ $t('MainPage.RecentPosts.button') }}</button></router-link>
        </div>

        <div class="hidden lg:block mt-[64px] mb-[45px] 2xl:mb-[63px] 2xl:mt-[90px]"> 
          <!-- <article class="flex gap-[40px]">
            <div class="w-[60%] 2xl:w-[55%]">
              <img src="../assets/img/posts/main-post.jpg" class="w-full h-[427px] 2xl:h-[547px] object-cover rounded-[16px]" alt="VR">
            </div>
            <div class="mt-[12px] w-[40%] 2xl:mt-[16px] 2xl:w-[45%]">
              <div class="flex gap-[5.74px] text-[8.6px] 2xl:text-[12px] leading-[150%]">
                <span class="uppercase font-roboto-700 text-dark">Development</span>
                <span class="font-roboto-500 text-light-gray">16 March 2023</span>
              </div>
              <h3 class="mt-[20px] font-raleway-700 text-dark text-[23px] leading-[24.3px] tracking-[-0.71px]
                2xl:mt-[27px] 2xl:text-[32px] 2xl:leading-[45px] 2xl:tracking-[-1px]">How to make a Game look more attractive with New VR & AI Technology</h3>
              <p class="mt-[10px] font-roboto-400 text-dark-gray text-[12px] leading-[150%] 2xl:mt-[13px] 2xl:text-[16px]">Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the`everyone.
              </p>
              <button class="mt-[45px] border-[0.718px] border-violet rounded-[5.744px] px-[35px] py-[12px] capitalize font-roboto-700 text-[10px] leading-[150%] text-violet
                2xl:mt-[61px] 2xl:text-[14px] 2xl:px-[48px] 2xl:py-[16px] 2xl:rounded-[8px]">Read more</button>
            </div>
          </article> -->

          
          <article v-if="$i18n.locale === 'en'" class="flex gap-[40px]">
            <div class="w-[60%] 2xl:w-[55%]">
              <img :src="recentPost.img" class="w-full h-[427px] 2xl:h-[547px] object-cover rounded-[16px]" alt="VR">
            </div>
            <div class="mt-[12px] w-[40%] 2xl:mt-[16px] 2xl:w-[45%]">
              <div class="flex gap-[5.74px] text-[8.6px] 2xl:text-[12px] leading-[150%]">
                 <!-- <span v-if="categories[recentPost.categoryId]" class="font-roboto-700 text-dark">{{ categories[recentPost.categoryId].titleEn || 'Unknown Category' }}</span> -->
                  <span v-if="recentPost && recentPost.categoryId" class="font-roboto-700 text-dark">{{ recentPost.category.titleEn }}</span>
                <span class="font-roboto-500 text-light-gray">{{ formatDate(recentPost.createdAt) }}</span>
              </div>
              <h3 class="mt-[20px] font-raleway-700 text-dark text-[23px] leading-[24.3px] tracking-[-0.71px]
                2xl:mt-[27px] 2xl:text-[32px] 2xl:leading-[45px] 2xl:tracking-[-1px]">{{ recentPost.titleEn }}</h3>
              <p class="mt-[10px] font-roboto-400 text-dark-gray text-[12px] leading-[150%] 2xl:mt-[13px] 2xl:text-[16px]">{{ recentPost.smallDescriptionEn }}
              </p>
              <router-link v-if="recentPost && recentPost.categoryId" :to="{ name: 'Post', params: { id: recentPost.id } }"><button class="mt-[45px] border-[0.718px] border-violet rounded-[5.744px] px-[35px] py-[12px] capitalize font-roboto-700 text-[10px] leading-[150%] text-violet
                2xl:mt-[61px] 2xl:text-[14px] 2xl:px-[48px] 2xl:py-[16px] 2xl:rounded-[8px]">Read more</button></router-link>
            </div>
          </article>

          <article v-if="$i18n.locale === 'ua'" class="flex gap-[40px]">
            <div class="w-[60%] 2xl:w-[55%]">
              <img :src="recentPost.img" class="w-full h-[427px] 2xl:h-[547px] object-cover rounded-[16px]" alt="VR">
            </div>
            <div class="mt-[12px] w-[40%] 2xl:mt-[16px] 2xl:w-[45%]">
              <div class="flex gap-[5.74px] text-[8.6px] 2xl:text-[12px] leading-[150%]">
                 <!-- <span v-if="categories[recentPost.categoryId]" class="font-roboto-700 text-dark">{{ categories[recentPost.categoryId].titleUa || 'Невідома Категорія' }}</span> -->
                <span v-if="recentPost && recentPost.categoryId" class="font-roboto-700 text-dark">{{ recentPost.category.titleUa }}</span>
                <span class="font-roboto-500 text-light-gray">{{ formatDateUa(recentPost.createdAt) }}</span>
              </div>
              <h3 class="mt-[20px] font-raleway-700 text-dark text-[23px] leading-[24.3px] tracking-[-0.71px]
                2xl:mt-[27px] 2xl:text-[32px] 2xl:leading-[45px] 2xl:tracking-[-1px]">{{ recentPost.titleUa }}</h3>
              <p class="mt-[10px] font-roboto-400 text-dark-gray text-[12px] leading-[150%] 2xl:mt-[13px] 2xl:text-[16px]">{{ recentPost.smallDescriptionUa }}
              </p>
              <router-link v-if="recentPost && recentPost.categoryId" :to="{ name: 'Post', params: { id: recentPost.id } }"><button class="mt-[45px] border-[0.718px] border-violet rounded-[5.744px] px-[35px] py-[12px] capitalize font-roboto-700 text-[10px] leading-[150%] text-violet
                2xl:mt-[61px] 2xl:text-[14px] 2xl:px-[48px] 2xl:py-[16px] 2xl:rounded-[8px]">Читати більше</button></router-link>
            </div>
          </article>

        </div>

        <!-- <div class="mt-[37px] mb-[57px] mx-[19px] flex flex-col items-center gap-[45px]"> -->
          <div class="mt-[37px] mb-[57px] mx-[19px] md:mx-0 grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-y-[45px] lg:gap-y-[28px] lg:gap-x-[12px] 2xl:gap-y-[53px] 2xl:gap-x-[16px]">

          <article v-if="$i18n.locale === 'en'" v-for="recentPost in recentPosts.slice(1)" :key="recentPost.id" class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="recentPost.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <!-- <span class="font-roboto-700 text-dark">Travel</span> -->
              <!-- <span v-if="categories[recentPost.categoryId]" class="font-roboto-700 text-dark">{{ categories[recentPost.categoryId].titleEn || 'Unknown Category' }}</span> -->
              <span v-if="recentPost && recentPost.categoryId" class="font-roboto-700 text-dark">{{ recentPost.category.titleEn }}</span>
              <span class="font-roboto-500 text-light-gray">{{ formatDate(recentPost.createdAt) }}</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ recentPost.titleEn }}</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">{{ recentPost.smallDescriptionEn }}</p>
            <router-link :to="{ name: 'Post', params: {id: recentPost.id} }"><button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button></router-link>
          </article>

          <article v-if="$i18n.locale === 'ua'" v-for="recentPost in recentPosts.slice(1)" class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="recentPost.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <!-- <span class="font-roboto-700 text-dark">Travel</span> -->
              <!-- <span v-if="categories[recentPost.categoryId]" class="font-roboto-700 text-dark">{{ categories[recentPost.categoryId].titleUa || 'Unknown Category' }}</span> -->
              <span v-if="recentPost && recentPost.categoryId" class="font-roboto-700 text-dark">{{ recentPost.category.titleUa }}</span>
              <span class="font-roboto-500 text-light-gray">{{ formatDateUa(recentPost.createdAt) }}</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ recentPost.titleUa }}</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">{{ recentPost.smallDescriptionUa }}</p>
            <router-link :to="{ name: 'Post', params: {id: recentPost.id} }"><button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Читати більше...</button></router-link>
          </article>
          
            <!-- <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/plane.jpg" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">Travel</span>
              <span class="font-roboto-500 text-light-gray">13 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">8 Rules of Travelling In Sea You Need To Know</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs </p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>

          <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/mac.jpg" alt="Macbook">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">DEVELOPMENT</span>
              <span class="font-roboto-500 text-light-gray">11 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">How to build strong portfolio and get a Job in UI/UX</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from </p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>

          <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/ball.jpg" alt="Ball">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">Sports</span>
              <span class="font-roboto-500 text-light-gray">10 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
             2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">How to Be a Professional Footballer in 2023</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive</p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>



 <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/plane.jpg" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">Travel</span>
              <span class="font-roboto-500 text-light-gray">13 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">8 Rules of Travelling In Sea You Need To Know</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs </p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>

          <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/mac.jpg" alt="Macbook">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">DEVELOPMENT</span>
              <span class="font-roboto-500 text-light-gray">11 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">How to build strong portfolio and get a Job in UI/UX</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from </p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>

          <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/ball.jpg" alt="Ball">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">Sports</span>
              <span class="font-roboto-500 text-light-gray">10 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
             2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">How to Be a Professional Footballer in 2023</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive</p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article> -->
        </div>
      </section>



       <section>
        <div class="flex justify-between items-center mt-[65px] md:mt-[125px] 2xl:mt-[160px]">
          <h2 class="capitalize font-raleway-700 text-dark text-[20px] leading-[36px] tracking-[-0.632px]
          md:text-[35px] 2xl:text-[48px] 2xl:leading-[50px] 2xl:tracking-[-0.88px]">{{ $t('MainPage.PopularPosts.title') }}</h2>
           <router-link :to="{name: 'BlogList'}"><button class="capitalize px-[35px] py-[12px] bg-violet rounded-[6px] font-roboto-700 text-white text-[10px] leading-[150%]
          2xl:text-[14px] 2xl:rounded-[8px] 2xl:py-[16px] 2xl:px-[48px]">{{ $t('MainPage.PopularPosts.button') }}</button></router-link>
        </div>

       <div class="mt-[37px] mb-[57px] mx-[19px] md:mx-0 grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-y-[45px] lg:gap-y-[28px] lg:gap-x-[12px] 2xl:gap-y-[53px] 2xl:gap-x-[16px]">
           
           
          <article v-if="$i18n.locale === 'en'" v-for="popularPost in popularPosts" :key="popularPost.id" class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="popularPost.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <!-- <span class="font-roboto-700 text-dark">Travel</span> -->
              <!-- <span v-if="categories[popularPost.categoryId]" class="font-roboto-700 text-dark">{{ categories[popularPost.categoryId].titleEn || 'Unknown Category' }}</span> -->
              <span v-if="popularPost && popularPost.categoryId" class="font-roboto-700 text-dark">{{ popularPost.category.titleEn }}</span>
              <span class="font-roboto-500 text-light-gray">{{ formatDate(popularPost.createdAt) }}</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ popularPost.titleEn }}</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">{{ popularPost.smallDescriptionEn }}</p>
            <router-link :to="{ name: 'Post', params: {id: popularPost.id} }"><button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button></router-link>
          </article>

          <article v-if="$i18n.locale === 'ua'" v-for="popularPost in popularPosts" :key="popularPost.id" class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]" :src="popularPost.img" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <!-- <span class="font-roboto-700 text-dark">Travel</span> -->
              <!-- <span v-if="categories[popularPost.categoryId]" class="font-roboto-700 text-dark">{{ categories[popularPost.categoryId].titleUa || 'Unknown Category' }}</span> -->
              <span v-if="popularPost && popularPost.categoryId" class="font-roboto-700 text-dark">{{ popularPost.category.titleUa }}</span>
              <span class="font-roboto-500 text-light-gray">{{ formatDateUa(popularPost.createdAt) }}</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">{{ popularPost.titleUa }}</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">{{ popularPost.smallDescriptionUa }}</p>
            <router-link :to="{ name: 'Post', params: {id: popularPost.id} }"><button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Читати більше...</button></router-link>
          </article>


           
         <!-- <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/plane.jpg" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">Travel</span>
              <span class="font-roboto-500 text-light-gray">13 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">8 Rules of Travelling In Sea You Need To Know</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs </p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>

          <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/mac.jpg" alt="Macbook">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">DEVELOPMENT</span>
              <span class="font-roboto-500 text-light-gray">11 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">How to build strong portfolio and get a Job in UI/UX</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from </p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>

          <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/ball.jpg" alt="Ball">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">Sports</span>
              <span class="font-roboto-500 text-light-gray">10 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
             2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">How to Be a Professional Footballer in 2023</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive</p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>



 <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/plane.jpg" alt="Plane">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">Travel</span>
              <span class="font-roboto-500 text-light-gray">13 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">8 Rules of Travelling In Sea You Need To Know</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs </p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>



          
          <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/mac.jpg" alt="Macbook">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">DEVELOPMENT</span>
              <span class="font-roboto-500 text-light-gray">11 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
            2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">How to build strong portfolio and get a Job in UI/UX</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from </p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article>

          <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/posts/ball.jpg" alt="Ball">
            </div>
            <div class="mt-[28px] flex gap-[6px] text-[9px] leading-[150%] 2xl:mt-[40px] 2xl:text-[12px]">
              <span class="font-roboto-700 text-dark">Sports</span>
              <span class="font-roboto-500 text-light-gray">10 March 2023</span>
            </div>
            <h3 class="mt-[11px] capitalize font-raleway-700 text-dark text-[17px] leading-[23px] lining-nums proportional-nums
             2xl:mt-[16px] 2xl:text-[24px] 2xl:leading-[32px]">How to Be a Professional Footballer in 2023</h3>
            <p class="mt-[5px] 2xl:mt-[16px] font-roboto-400 text-dark-gray text-[12px] 2xl:text-[16px] leading-[150%]">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive</p>
            <button class="mt-[14px] 2xl:mt-[19px] capitalize font-roboto-700 text-violet text-[13px] 2xl:text-[18px] leading-[150%] underline">Read more...</button>
          </article> --> 
        </div>
      </section>
  </div>
</template>

<style scoped>
</style>
