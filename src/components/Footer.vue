<script setup>
// import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
</script>

<template>
  <footer>
    <div class="container px-[24px] pt-[36px] pb-[61px] md:px-[75px] md:pb-[39px] 2xl:px-[100px] 2xl:pt-[51px] 2xl:pb-[54px] flex flex-col items-center">
      <router-link :to="{name: 'Home'}">
        <div class="flex items-center gap-[11px] 2xl:gap-[15px] hover:cursor-pointer">
          <Icon icon="rz:zarrin" class="w-[32px] h-[32px] 2xl:w-[44px] 2xl:h-[44px]" />
          <span class="font-raleway-800 text-[24px] text-[#150E06] 2xl:text-[34px]">Zarrin</span>
        </div>
      </router-link>

        <menu class="mt-[29px] 2xl:mt-[40px]">
          <nav class="flex gap-[33px] 2xl:gap-[56px]">
            <!-- <a href="#"><li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-[#150E06]">{{ $t('FooterBlock.home') }}</li></a>
            <a href="#"><li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-[#150E06]">{{ $t('FooterBlock.blog') }}</li></a>
            <a href="#"><li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-[#150E06]">{{ $t('FooterBlock.about') }}</li></a>
            <a href="#"><li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-[#150E06]">{{ $t('FooterBlock.contact') }}</li></a> -->
            <li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-[#150E06]">
              <router-link :to="{name: 'Home'}">{{ $t('FooterBlock.home') }}</router-link></li>
            <li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-[#150E06]">
              <router-link :to="{name: 'BlogList'}">{{ $t('FooterBlock.blog') }}</router-link></li>
            <li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-[#150E06]">
              <router-link :to="{name: 'About'}">{{ $t('FooterBlock.about') }}</router-link></li>
            <li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-[#150E06]">
              <router-link :to="{name: 'Contact'}">{{ $t('FooterBlock.contact') }}</router-link></li>
          </nav>
        </menu>

        <div class="mt-[29px] 2xl:mt-[40px] flex gap-[11.5px] 2xl:gap-[16px]">
          <div class="w-[29px] h-[29px] 2xl:w-[40px] 2xl:h-[40px] bg-violet rounded-[50%] flex items-center justify-center hover:cursor-pointer">
            <span class="font-raleway-700 text-white text-[12px] leading-[150%] 2xl:text-[16px]">FB</span>
          </div>

          <div class="w-[29px] h-[29px] 2xl:w-[40px] 2xl:h-[40px] bg-violet rounded-[50%] flex items-center justify-center hover:cursor-pointer">
            <span class="font-raleway-700 text-white text-[12px] leading-[150%] 2xl:text-[16px]">IG</span>
          </div>

          <div class="w-[29px] h-[29px] 2xl:w-[40px] 2xl:h-[40px] bg-violet rounded-[50%] flex items-center justify-center hover:cursor-pointer">
            <span class="font-raleway-700 text-white text-[12px] leading-[150%] 2xl:text-[16px]">LN</span>
          </div>

          <div class="w-[29px] h-[29px] 2xl:w-[40px] 2xl:h-[40px] bg-violet rounded-[50%] flex items-center justify-center hover:cursor-pointer">
            <span class="font-raleway-700 text-white text-[12px] leading-[150%] 2xl:text-[16px]">YT</span>
          </div>
        </div>

        <div class="mt-[29px] 2xl:mt-[40px] w-[100vw] h-[0.718px] 2xl:h-[1px] bg-violet xl:w-[100%]"></div>

        <p class="mt-[29px] 2xl:mt-[40px] font-raleway-400 text-[#150E06] text-[12px] 2xl:text-[16px] leading-[150%]">{{ $t('FooterBlock.copyright') }}</p>

    </div>
  </footer>
</template>

<style scoped>
</style>
