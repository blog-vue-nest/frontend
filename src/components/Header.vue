<script setup>
// import { defineComponent } from 'vue';


import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';

const dropdown = () => {
  const dropdownButton = document.getElementById('dropdown');
  const arrow = document.getElementById('arrow');

  dropdownButton.classList.toggle('hidden');
  if (dropdownButton.classList.contains('hidden')) {
    arrow.style.transform = 'rotate(360deg)';
  } else {
    arrow.style.transform = 'rotate(180deg)';
  }
}

const closeList = () => {
  const dropdownButton = document.getElementById('dropdown');
  const arrow = document.getElementById('arrow');

  dropdownButton.classList.add('hidden');
  arrow.style.transform = 'rotate(360deg)';
}
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

      <img src="../assets/img/menu.png" alt="Menu" class="w-[34px] h-[34px] hover:cursor-pointer md:hidden">

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


          <div class="relative">

<button id="dropdownDefaultButton" @click="dropdown()" class="bg-violet font-raleway-600 text-white text-[12px] text-nowrap leading-[150%] px-[35px] py-[12px] rounded-[6px]
            2xl:text-[16px] 2xl:px-[48px] 2xl-[py-16px] 2xl:rounded-[8px] text-center inline-flex items-center outline-none" type="button">
  {{ $t('HeaderBlock.language.title') }}<svg id="arrow" class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<!-- Dropdown menu -->
<div id="dropdown" class="absolute top-[50px] z-20 hidden w-auto bg-white rounded-lg shadow">
    <ul class="py-2 text-sm text-gray-700">
      <li @click="$i18n.locale = 'en', closeList()" class="flex items-center justify-start gap-2 px-4 py-2 hover:cursor-pointer">
        <Icon icon="rz:flag-en" class="w-[32px] h-[32px] 2xl:w-[44px] 2xl:h-[44px]" />
        <a class="block font-raleway-500 text-dark text-[14px] leading-[150%] 2xl:text-[16px]">{{ $t('HeaderBlock.language.english') }}</a>
      </li>
      <li @click="$i18n.locale = 'ua', closeList()" class="flex items-center gap-2 px-4 py-2 hover:cursor-pointer">
        <Icon icon="rz:flag-ua" class="w-[32px] h-[32px] 2xl:w-[44px] 2xl:h-[44px]" />
        <a class="block font-raleway-500 text-dark text-[14px] leading-[150%] 2xl:text-[16px]">{{ $t('HeaderBlock.language.ukrainian') }}</a>
      </li>
    </ul>
</div>

          </div>


          <router-link :to="{name: 'Contact'}">
            <button class="capitalize bg-violet font-raleway-600 text-white text-[12px] text-nowrap leading-[150%] px-[35px] py-[12px] rounded-[6px]
            2xl:text-[16px] 2xl:px-[48px] 2xl-[py-16px] 2xl:rounded-[8px]">{{ $t('HeaderBlock.contact') }}</button>
          </router-link>

          <router-link :to="{name: 'ViewCategories'}">Admin</router-link>
        </div>
        </menu>
      </div>

    </div>
  </header>
</template>

<style scoped>
</style>
