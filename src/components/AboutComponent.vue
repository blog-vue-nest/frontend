<script setup>
// import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="bg-[#FAFAFA]">
    <div class="container px-[24px] pt-[60px] pb-[28px] md:px-[76px] md:pt-[70px] md:pb-[116px] 2xl:px-[104px] 2xl:pt-[74px] 2xl:pb-[161px]">
      <section class="flex flex-col items-center text-center">
        <span class="uppercase font-raleway-700 text-dark-gray text-[12px] leading-[150%] tracking-[1.143px]
        2xl:text-[16px] 2xl:tracking-[1.6px]">{{ $t('About.FirstSection.name') }}</span>
        <h2 class="mt-[18px] font-raleway-700 text-dark text-[24px] leading-[136%] lining-nums proportional-nums
        md:text-[35px] md:leading-[133.3%] md:max-w-[520px]
        2xl:mt-[25px] 2xl:text-[48px] 2xl:leading-[133.3%] 2xl:max-w-[728px]">{{ $t('About.FirstSection.title') }}</h2>
        <p class="mt-[24px] font-roboto-400 text-dark-gray text-[12px] leading-[150%]
        md:mt-[17px] md:max-w-[722px]
        2xl:mt-[24px] 2xl:w-[1010px] 2xl:text-[16px]">{{ $t('About.FirstSection.description') }}</p>
        <div class="mt-[60px] w-full h-[198px] rounded-[12px]
        md:h-[434px] md:mt-[88px] 2xl:h-[608px] 2xl:rounded-[16px] 2xl:mt-[123px]" style="background: url('./src/assets/img/about.jpg') 50% / cover no-repeat, #CCE9FF;"></div>
      </section>

      <section class="mt-[72px] flex flex-col text-left">
        <span class="uppercase font-raleway-700 text-dark-gray text-[12px] leading-[150%] tracking-[1.143px]
        2xl:text-[16px] 2xl:tracking-[1.6px]">{{ $t('About.HowWeWork.name') }}</span>
        <div class="md:flex md:justify-between md:items-end md:mt-[23px] 2xl:mt-[32px]">
          <h2 class="mt-[12px] font-raleway-700 text-dark text-[24px] max-w-[301px] leading-[132%] lining-nums proportional-nums
            md:mt-0 md:text-[35px] md:leading-[133.3%] md:max-w-[437px]
            2xl:text-[48px] 2xl:leading-[133.3%] 2xl:max-w-[600px]">{{ $t('About.FirstSection.title') }}</h2>
          <p class="mt-[24px] font-roboto-400 text-dark-gray text-[12px] leading-[150%]
            md:mt-0 md:max-w-[307px] xl:max-w-[387px]
            2xl:max-w-[516px] 2xl:text-[16px]">{{ $t('About.FirstSection.description') }}</p>
        </div>


        <div class="mt-[59px] lg:mt-[58px] 2xl:mt-[80px] grid grid-cols-1 gap-[30px] lg:grid lg:grid-cols-3 lg:justify-between lg:gap-[12px] 2xl:gap-[16px]">
          <article class="max-w-[286px] md:max-w-[100%] lg:max-w-full bg-violet rounded-[12px] pt-[17px] pb-[20px] px-[17px] 2xl:p-[24px] 2xl:rounded-[16px]">
            <span class="font-raleway-700 text-white text-[52px] leading-[133.3%] lining-nums proportional-nums
            2xl:text-[72px]">{{ $t('About.AboutCard1.number') }}</span>
            <h3 class="mt-[6px] font-raleway-700 text-white text-[17px] leading-[133.3%] lining-nums proportional-nums
            2xl:mt-[8px] 2xl:text-[24px]">{{ $t('About.AboutCard1.title') }}</h3>
            <p class="mt-[12px] font-roboto-400 text-[#F7F6FE] text-[12px] leading-[150%] opacity-[0.7]
            2xl:mt-[16px] 2xl:text-[16px]">{{ $t('About.AboutCard1.text') }}</p>
            <button class="capitalize mt-[24px] font-roboto-700 text-white text-[10px] leading-[150%]
            2xl:mt-[32px] 2xl:text-[14px]
            after:block after:mt-[2px] after:content-[''] after:h-[3px] after:w-full after:bg-white after:2xl:mt-[3px] after:2xl:h-[4px]">{{ $t('About.AboutCard1.button') }}</button>
          </article>

          <article class="max-w-[286px] md:max-w-[100%] lg:max-w-full bg-[#F5F5F5] rounded-[12px] pt-[17px] pb-[47px] px-[17px] 2xl:p-[24px] 2xl:pb-[64px] 2xl:rounded-[16px]">
            <span class="font-raleway-700 text-dark-gray text-[52px] leading-[133.3%] lining-nums proportional-nums
            2xl:text-[72px]">{{ $t('About.AboutCard2.number') }}</span>
            <h3 class="mt-[6px] font-raleway-700 text-violet text-[17px] leading-[133.3%] lining-nums proportional-nums
            2xl:mt-[8px] 2xl:text-[24px]">{{ $t('About.AboutCard2.title') }}</h3>
            <p class="mt-[12px] font-roboto-400 text-dark-gray text-[12px] leading-[150%] opacity-[0.7]
            2xl:mt-[16px] 2xl:text-[16px]">{{ $t('About.AboutCard2.text') }}</p>
          </article>

          <article class="max-w-[286px] md:max-w-[100%] lg:max-w-full bg-[#F5F5F5] rounded-[12px] pt-[17px] pb-[47px] px-[17px] 2xl:p-[24px] 2xl:pb-[64px] 2xl:rounded-[16px]">
            <span class="font-raleway-700 text-dark-gray text-[52px] leading-[133.3%] lining-nums proportional-nums
            2xl:text-[72px]">{{ $t('About.AboutCard3.number') }}</span>
            <h3 class="mt-[6px] font-raleway-700 text-violet text-[17px] leading-[133.3%] lining-nums proportional-nums
            2xl:mt-[8px] 2xl:text-[24px]">{{ $t('About.AboutCard3.title') }}</h3>
            <p class="mt-[12px] font-roboto-400 text-dark-gray text-[12px] leading-[150%] opacity-[0.7]
            2xl:mt-[16px] 2xl:text-[16px]">{{ $t('About.AboutCard3.text') }}</p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
</style>
