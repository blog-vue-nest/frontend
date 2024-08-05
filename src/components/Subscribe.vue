<script>
// import { defineComponent } from 'vue';
// import { Icon } from '@iconify/vue';
export default {
  name: 'Subscribe',
  data() {
   
    return {

    }
  }

}

</script>

<template>
  <section class="bg-violet relative">
    <div class="container flex flex-col items-center px-[24px] md:px-[76px] 2xl:px-[104px] pt-[61px] pb-[43px] md:pt-[88px] md:pb-[95px] 2xl:pt-[123px] 2xl:pb-[132px]">
      <h2 class="w-[285px] font-raleway-700 text-white text-[24px] text-center leading-[35px] tracking-[0.144px]
      md:w-[551px] md:text-[37px]
      2xl:w-[768px] 2xl:text-[52px] 2xl:leading-[48px] 2xl:tracking-[0.2px]">{{ $t('SubscribeBlock.title') }}</h2>
      <form action="#" class="mt-[35px] 2xl:mt-[48px] flex gap-[5px]">
        <input type="email" :placeholder="$t('SubscribeBlock.input')" class="w-[211px] rounded-[6px] bg-white px-[15px] py-[12px] outline-none font-raleway-400 text-[#5A7184] text-[11px] opacity-[0.75]
        2xl:w-[320px] 2xl:px-[23px] 2xl:py-[18px] 2xl:text-[16px]">
        <button class="px-[22px] py-[12px] rounded-[6px] border-[1.324px] border-white font-raleway-700 text-white text-[12px]
        md:text-[13px] 2xl:px-[32px] 2xl:py-[17px] 2xl:text-[18px]
        ">{{ $t('SubscribeBlock.button') }}</button>
      </form>
      <p class="mt-[35px] md:mt-[17px] 2xl:mt-[24px] w-[282px] md:w-[398px] 2xl:w-[555px] font-raleway-400 text-[#BBB] text-[12px] 2xl:text-[16px] text-center leading-[175%]">{{ $t('SubscribeBlock.paragraph') }}</p>
    </div>

    <div class="absolute top-[-19px] left-[-60px] w-[298px] h-[123px] rounded-bl-[50%_50%] rounded-br-[50%_50%] rounded-tl-[50%_50%] rounded-tr-[50%_50%] overflow-hidden">
      <!-- <img src="../assets/img/subscribe-mobile-first.svg" alt="Vector" class="w-full"> -->
       <div class="bg-[url('./assets/img/subscribe-mobile-first.svg')] w-[583px] h-[113px] mt-[0] ml-[-38px] bg-cover bg-no-repeat"></div>
    </div>
  </section>
</template>

<style scoped>
</style>
