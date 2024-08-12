<script setup>
import { Icon } from '@iconify/vue';

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

      <section class="mt-[73px] mb-[600px] md:mb-[380px] 2xl:mb-[400px] relative">  
        <div class="map w-[100vw] h-[382px] 2xl:h-[547px] ml-[50%] translate-x-[-50%]"></div>

        <div class="mx-auto absolute bottom-[-158%] md:bottom-[-112%] 2xl:bottom-[-95%] left-0 right-0 w-[327px] bg-white rounded-[12px] shadow-[4.888px_5.586px_37.708px_0px_rgba(124,78,228,0.07)]
        px-[55px] pt-[45px] pb-[45px] 
        md:w-[536px] md:px-[44px] md:py-[50px]
        2xl:w-[768px] 2xl:pt-[71px] 2xl:pb-[65px] 2xl:px-[62px] 2xl:rounded-[16px] 2xl:shadow-[7px_8px_54px_0px_rgba(124,78,228,0.07)]">
          <form action="#">
            <div class="grid grid-cols-1 gap-y-[20px] md:grid-cols-2 md:gap-x-[15px] 2xl:gap-x-[21px]">
              <label class="font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
              2xl:text-[16px] 2xl:tracking-[0.08px]" for="">
                {{ $t('Contact.ContactForm.name') }}
                <input type="text" class="mt-[5px] w-full py-[5px] px-[10px] border-[0.698px] bg-white border-[#C4C4C4] rounded-[6px] outline-none
                font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
                2xl:mt-[8px] 2xl:text-[16px] 2xl:tracking-[0.08px] 2xl:border-[1px] 2xl:rounded-[8px]">
              </label>

              <label class="font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
               2xl:text-[16px] 2xl:tracking-[0.08px]" for="">
                {{ $t('Contact.ContactForm.phone') }}
                <input type="text" class="mt-[5px] w-full py-[5px] px-[10px] border-[0.698px] bg-white border-[#C4C4C4] rounded-[6px] outline-none
                font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
                2xl:mt-[8px] 2xl:text-[16px] 2xl:tracking-[0.08px] 2xl:border-[1px] 2xl:rounded-[8px]">
              </label>
            </div>

            <div class="grid grid-cols-1 gap-y-[20px] md:mt-[15px] md:grid-cols-2 md:gap-x-[15px] 2xl:mt-[22px] 2xl:gap-x-[21px]">
              <label class="mt-[20px] font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
              md:m-0 2xl:text-[16px] 2xl:tracking-[0.08px]" for="">
                {{ $t('Contact.ContactForm.email') }}
                <input type="email" class="mt-[5px] w-full py-[5px] px-[10px] border-[0.698px] bg-white border-[#C4C4C4] rounded-[6px] outline-none
                font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
                2xl:mt-[8px] 2xl:text-[16px] 2xl:tracking-[0.08px] 2xl:border-[1px] 2xl:rounded-[8px]">
              </label>

              <label class="font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
              2xl:text-[16px] 2xl:tracking-[0.08px]" for="">
                {{ $t('Contact.ContactForm.subject') }}
                <input type="text" class="mt-[5px] w-full py-[5px] px-[10px] border-[0.698px] bg-white border-[#C4C4C4] rounded-[6px] outline-none
                font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
                2xl:mt-[8px] 2xl:text-[16px] 2xl:tracking-[0.08px] 2xl:border-[1px] 2xl:rounded-[8px]">
              </label>
            </div>

            <label class="block mt-[20px] font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
            md:mt-[15px] 2xl:mt-[22px] 2xl:text-[16px] 2xl:tracking-[0.08px]" for="">
                {{ $t('Contact.ContactForm.message') }}
                <textarea type="text" class="resize-none mt-[5px] w-full h-[164px] py-[5px] px-[10px] border-[0.698px] bg-white border-[#C4C4C4] rounded-[6px] outline-none
                font-raleway-600 text-[#4C4C4C] text-[12px] leading-[175%] tracking-[0.056px]
                2xl:mt-[8px] 2xl:text-[16px] 2xl:tracking-[0.08px] 2xl:border-[1px] 2xl:rounded-[8px]"></textarea>
              </label>
            
            <button class="capitalize block mt-[30px] mx-auto px-[22px] py-[12px] rounded-[4px] bg-violet font-raleway-700 text-white text-[12px]
              md:text-[13px] md:mt-[35px] 2xl:mt-[42px] 2xl:px-[36px] 2xl:py-[21px] 2xl:text-[15px]
              ">{{ $t('Contact.ContactForm.button') }}</button>
          </form>
        </div>
      </section>
    </div>
  </div>
  
</template>

<style scoped>
.map {
  /* background: url('./src/assets/img/contact-map.jpg') -233px -149.959px / 229.888% 178.504% no-repeat, #D9D9D9; */
  background: url('./src/assets/img/contact-map.jpg') 42% 70% / 249.888% 138.504% no-repeat, #D9D9D9;
}

@media screen and (min-width: 376px) {
.map {
  background: url('./src/assets/img/contact-map.jpg') 50% / cover no-repeat, #D9D9D9;
}
}
</style>
