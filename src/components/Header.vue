<script>
// import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default{
  name: 'Header',
  components: {
    Icon,
  },
  data() {
    
    return {

    }

  }

}

</script>

<template>
  <header>
    <div class="container px-[24px] md:px-[75px] 2xl:px-[100px] py-[20px] flex justify-between items-center">
      <div class="flex items-center gap-[15px]">
         <Icon icon="rz:zarrin" class="w-[32px] h-[32px] 2xl:w-[44px] 2xl:h-[44px]" />
         
        <span class="font-raleway-800 text-[34px] text-dark 2xl:text-[34px]">Zarrin</span>
      </div>

      <img src="../assets/img/menu.png" alt="Menu" class="w-[34px] h-[34px] hover:cursor-pointer md:hidden">

      <div class="hidden md:block">
        <menu class="flex gap-[30px] 2xl:gap-[42px]">
          <nav class="flex gap-[40px] 2xl:gap-[58px] items-center">
          <a href="#"><li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-violet">{{ $t('HeaderBlock.blog') }}</li></a>
          <a href="#"><li class="font-raleway-600 text-[12px] 2xl:text-[16px] leading-[150%] text-dark">{{ $t('HeaderBlock.about') }}</li></a>
        </nav>
        <div class="flex gap-[25px] 2xl:gap-[36px] items-center">
          <img src="../assets/img/search-minus.svg" alt="Search" class="w-[16px] h-[16px] 2xl:h-[22px] 2xl:w-[22px]">
          <button class="capitalize bg-violet font-raleway-600 text-white text-[12px] text-nowrap leading-[150%] px-[35px] py-[12px] rounded-[6px]
          2xl:text-[16px] 2xl:px-[48px] 2xl-[py-16px] 2xl:rounded-[8px]
          ">{{ $t('HeaderBlock.contact') }}</button>
        </div>
        </menu>
      </div>

    </div>
  </header>
</template>

<style scoped>
</style>
