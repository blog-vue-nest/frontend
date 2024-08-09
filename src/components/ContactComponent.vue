<script>
// import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default{
  name: 'ContactComponent',
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
  <div class="bg-[#FAFAFA]">
    <div class="container px-[24px] pt-[22px] pb-[84px] md:px-[76px] md:pt-[94px] md:pb-[137px] 2xl:px-[104px] 2xl:pt-[106px] 2xl:pb-[251px]">
      <section class="flex flex-col items-center text-center">
        <h2 class="font-raleway-700 text-dark text-[24px] leading-[165%] lining-nums proportional-nums
        2xl:text-[48px] 2xl:leading-[133.3%]">{{ $t('Contact.title') }}</h2>
        <p class="mt-[13px] w-[279px] md:w-[308px] font-raleway-400 text-light-gray text-[12px] leading-[150%]
        2xl:mt-[16px] 2xl:w-[442px] 2xl:text-[16px]">{{ $t('Contact.describe') }}</p>

        <div class="mt-[45px] lg:mt-[40px] flex flex-col gap-[30px] items-center
        lg:flex-row lg:gap-[15px] 2xl:gap-[21px]">
          <article class="w-[80vw] lg:w-[27vw] bg-white rounded-[11.173px] flex flex-col items-center gap-[14px] px-[22px] py-[28px] shadow-[2.095px_0.698px_30.027px_0px_rgba(124,78,228,0.04)]
          2xl:py-[40px] 2xl:px-[32px] 2xl:rounded-[16px] 2xl:shadow-[3px_1px_43px_0px_rgba(124,78,228,0.04)]">
            <div class="w-[49px] h-[49px] 2xl:w-[70px] 2xl:h-[70px] shrink-0 bg-violet rounded-[50%] flex justify-center items-center">
              <Icon icon="rz:office" class="fill-none stroke-white w-[17px] h-[17px] 2xl:w-[24px] 2xl:h-[24px]" />
            </div>
            <h3 class="mt-[14px] font-raleway-700 text-violet text-[14px] tracking-[0.07px]
            2xl:mt-[20px] 2xl:text-[20px] 2xl:tracking-[0.1px]">Office</h3>
            <p class="mt-[14px] font-raleway-500 text-[#7A7A7A] text-[12px] leading-[175%] tracking-[0.056px]
            2xl:mt-[20px] 2xl:text-[16px] 2xl:tracking-[0.08px]">Victoria Street, London, UK</p>
          </article>

          <article class="w-[80vw] lg:w-[27vw] bg-white rounded-[11.173px] flex flex-col items-center gap-[14px] px-[22px] py-[28px] shadow-[2.095px_0.698px_30.027px_0px_rgba(124,78,228,0.04)]
          2xl:py-[40px] 2xl:px-[32px] 2xl:rounded-[16px] 2xl:shadow-[3px_1px_43px_0px_rgba(124,78,228,0.04)]">
            <div class="w-[49px] h-[49px] 2xl:w-[70px] 2xl:h-[70px] shrink-0 bg-violet rounded-[50%] flex justify-center items-center">
              <Icon icon="rz:email" class="fill-none stroke-white w-[17px] h-[17px] 2xl:w-[24px] 2xl:h-[24px]" />
            </div>
            <h3 class="mt-[14px] font-raleway-700 text-violet text-[14px] tracking-[0.07px]
            2xl:mt-[20px] 2xl:text-[20px] 2xl:tracking-[0.1px]">Email</h3>
            <p class="mt-[14px] font-raleway-500 text-[#7A7A7A] text-[12px] leading-[175%] tracking-[0.056px]
            2xl:mt-[20px] 2xl:text-[16px] 2xl:tracking-[0.08px]">hello@zarrin.com</p>
          </article>

          <article class="w-[80vw] lg:w-[27vw] bg-white rounded-[11.173px] flex flex-col items-center gap-[14px] px-[22px] py-[28px] shadow-[2.095px_0.698px_30.027px_0px_rgba(124,78,228,0.04)]
          2xl:py-[40px] 2xl:px-[32px] 2xl:rounded-[16px] 2xl:shadow-[3px_1px_43px_0px_rgba(124,78,228,0.04)]">
            <div class="w-[49px] h-[49px] 2xl:w-[70px] 2xl:h-[70px] shrink-0 bg-violet rounded-[50%] flex justify-center items-center">
              <Icon icon="rz:phone" class="fill-none stroke-white w-[17px] h-[17px] 2xl:w-[24px] 2xl:h-[24px]" />
            </div>
            <h3 class="mt-[14px] font-raleway-700 text-violet text-[14px] tracking-[0.07px]
            2xl:mt-[20px] 2xl:text-[20px] 2xl:tracking-[0.1px]">Phone</h3>
            <p class="mt-[14px] font-raleway-500 text-[#7A7A7A] text-[12px] leading-[175%] tracking-[0.056px]
            2xl:mt-[20px] 2xl:text-[16px] 2xl:tracking-[0.08px]">(001) 2342 3451</p>
          </article>
        </div>
      </section>

      <section class="mt-[73px]">
          <!-- <div class="w-[100vw] h-[382px] ml-[50%] translate-x-[-50%] bg-contact-map"></div> -->
           <div class="w-[100vw] h-[382px] 2xl:h-[547px] ml-[50%] translate-x-[-50%]" 
           style="background: url('./src/assets/img/contact-map.jpg') 50% / cover no-repeat, lightgray"></div>
      </section>
    </div>
  </div>
  
</template>

<style scoped>
</style>
