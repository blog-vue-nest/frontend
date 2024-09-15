<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import Cookies from 'js-cookie';
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';

// const language = useI18n();

// const currentLanguage = ref(language.locale.value);

const { locale } = useI18n();

const language = ref(locale.value);

if (Cookies.get('language') && (Cookies.get('language') === 'en' || Cookies.get('language') === 'ua')) {
  language.value = Cookies.get('language');
  locale.value = Cookies.get('language');
}

const isActive = ref(false);

const isActiveHamburger = ref(false);

const toggleHamburger = () => {
  event.stopPropagation();
  isActiveHamburger.value = !isActiveHamburger.value;
}

const toggleClass = (event) => {
  event.stopPropagation();
  isActive.value = !isActive.value;
}


const dropdown = ref(null);
const dropdownHamburger = ref(null);

const closeDropdown = () => {
  isActive.value = false
}

const closeDropdownHamburger = () => {
  isActiveHamburger.value = false
}

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    closeDropdown()
  }
}

const handleClickOutsideHamburger = (event) => {
  if (dropdownHamburger.value && !dropdownHamburger.value.contains(event.target)) {
    closeDropdownHamburger()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('click', handleClickOutsideHamburger)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('click', handleClickOutsideHamburger)
})

</script>

<template>
  <header>
    <div class="container px-[24px] md:px-[75px] 2xl:px-[100px] py-[20px] flex justify-between items-center">
      <router-link :to="{name: 'Home'}">
        <div class="flex items-center gap-[15px] hover:cursor-pointer">
          <Icon icon="rz:zarrin" class="w-[32px] h-[32px] 2xl:w-[44px] 2xl:h-[44px]" />
          <span class="font-raleway-800 text-[34px] text-dark 2xl:text-[34px]">Zarrin</span>
        </div>
      </router-link>

      <img src="../assets/img/menu.png" alt="Menu" @click="toggleHamburger" class="w-[34px] h-[34px] hover:cursor-pointer md:hidden">

      <div ref="dropdownHamburger" v-if="isActiveHamburger" class="md:hidden fixed top-0 right-0 z-20 w-[50%] h-[50%] bg-light-gray rounded-bl-[30px]
      px-[20px] py-[10px]">
      <Icon @click="toggleHamburger" icon="rz:cross-solid" width="40" height="40" class="absolute top-2 right-2 cursor-pointer"></Icon>
        <menu class="flex flex-col">
          <nav class="flex flex-col gap-[20px] 2xl:gap-[30px]">
          <li class="pt-[10px] font-raleway-600 text-[18px] leading-[133%] text-dark">
            <RouterLink @click="closeDropdownHamburger" :to="{name: 'BlogList'}">{{ $t('HeaderBlock.blog') }}</RouterLink></li>
          <li class="font-raleway-600 text-[18px] leading-[133%] text-dark">
            <router-link @click="closeDropdownHamburger" :to="{ name: 'About' }">{{ $t('HeaderBlock.about') }}</router-link></li>
          <li class="font-raleway-600 text-[18px] leading-[133%] text-dark">
            <RouterLink @click="closeDropdownHamburger" :to="{name: 'Contact'}">{{ $t('HeaderBlock.contact') }}</RouterLink></li>
        </nav>
        </menu>
      </div>

      <div class="hidden md:block">
        <menu class="flex gap-[30px] 2xl:gap-[42px]">
          <nav class="flex gap-[40px] 2xl:gap-[58px] items-center">
          <!-- <a href="#"><li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-violet">{{ $t('HeaderBlock.blog') }}</li></a>
          <a href="#"><li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-dark">{{ $t('HeaderBlock.about') }}</li></a> -->
          <li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-violet">
            <RouterLink :to="{name: 'BlogList'}">{{ $t('HeaderBlock.blog') }}</RouterLink></li>
          <li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-dark">
            <router-link :to="{ name: 'About' }">{{ $t('HeaderBlock.about') }}</router-link></li>
        </nav>
        <div class="flex gap-[25px] 2xl:gap-[36px] items-center">
          <img src="../assets/img/search-minus.svg" alt="Search" class="w-[16px] h-[16px] 2xl:h-[22px] 2xl:w-[22px]">


          <router-link :to="{name: 'Contact'}">
            <button class="capitalize bg-violet font-raleway-600 text-white text-[12px] text-nowrap leading-[150%] px-[35px] py-[12px] rounded-[6px]
            2xl:text-[16px] 2xl:px-[48px] 2xl-[py-16px] 2xl:rounded-[8px]">{{ $t('HeaderBlock.contact') }}</button>
          </router-link>


  <div class="relative">
    <button v-if="language === 'en'" id="dropdownDefaultButton" @click="toggleClass" class="bg-violet font-raleway-600 text-white text-[12px] text-nowrap leading-[150%] px-[12px] py-[6px] rounded-[6px]
                2xl:text-[16px] 2xl:px-[14px] 2xl:rounded-[8px] text-center inline-flex items-center outline-none" type="button">
      <Icon icon="rz:flag-en" class="w-[30px] h-[30px] 2xl:w-[36px] 2xl:h-[36px]" />
      <svg id="arrow" :class="{'rotate-[180deg]': isActive}" class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>

    <button v-else-if="language === 'ua'" id="dropdownDefaultButton" @click="toggleClass" class="bg-violet font-raleway-600 text-white text-[12px] text-nowrap leading-[150%] px-[12px] py-[6px] rounded-[6px]
                2xl:text-[16px] 2xl:px-[14px] 2xl:rounded-[8px] text-center inline-flex items-center outline-none" type="button">
      <Icon icon="rz:flag-ua" class="w-[30px] h-[30px] 2xl:w-[36px] 2xl:h-[36px]" /> 
      <svg id="arrow" class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>

    <div id="dropdown" ref="dropdown" v-if="isActive" class="absolute top-[50px] z-20 w-auto bg-white rounded-lg shadow">
      <ul class="py-2 text-sm text-gray-700">
        <li @click="$i18n.locale = 'en'; language = 'en'; closeDropdown()" class="flex items-center justify-start gap-2 px-4 py-2 hover:cursor-pointer">
          <Icon icon="rz:flag-en" class="w-[32px] h-[32px] 2xl:w-[44px] 2xl:h-[44px]" />
          <a class="block font-raleway-500 text-dark text-[14px] leading-[150%] 2xl:text-[16px]">{{ $t('HeaderBlock.language.english') }}</a>
        </li>
        <li @click="$i18n.locale = 'ua'; language = 'ua'; closeDropdown()" class="flex items-center gap-2 px-4 py-2 hover:cursor-pointer">
          <Icon icon="rz:flag-ua" class="w-[32px] h-[32px] 2xl:w-[44px] 2xl:h-[44px]" />
          <a class="block font-raleway-500 text-dark text-[14px] leading-[150%] 2xl:text-[16px]">{{ $t('HeaderBlock.language.ukrainian') }}</a>
        </li>
      </ul>
    </div>
  </div>


          <!-- <router-link :to="{name: 'ViewCategories'}">Admin</router-link> -->

        </div>
        </menu>
      </div>

    </div>
  </header>
</template>

<style scoped>
</style>
