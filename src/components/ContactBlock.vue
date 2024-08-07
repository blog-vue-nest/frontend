<script>
// import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default{
  name: 'ContactBlock',
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
  <section class="bg-[#FAFAFA]">
    <div class="container px-[24px] pt-[22px] pb-[84px] md:px-[76px] md:pt-[94px] md:pb-[137px] 2xl:px-[104px] 2xl:pt-[131px] 2xl:pb-[191px]">
      <section class="flex flex-col items-center text-center">
        <h2 class="font-raleway-700 text-dark text-[24px] leading-[165%] lining-nums proportional-nums">{{ $t('Contact.title') }}</h2>
        <p class="mt-[13px] w-[279px] font-raleway-400 text-light-gray text-[12px] leading-[150%]">{{ $t('Contact.describe') }}</p>

        <div class="mt-[45px] flex flex-col gap-[30px] items-center">
          <article class="w-[260px] h-[170px] bg-white rounded-[11.173px] flex flex-col items-center gap-[14px] px-[22px] py-[28px] shadow-[2.095px_0.698px_30.027px_0px_rgba(124,78,228,0.04)]">
            <div class="w-[49px] h-[49px] shrink-0 bg-violet rounded-[50%] flex justify-center items-center">
              <Icon icon="rz:office" class="fill-none stroke-white w-[17px] h-[17px]" />
            </div>
            <h3>Office</h3>
            <p>Victoria Street, London, UK</p>
          </article>

          <article class="w-[260px] h-[170px] bg-white rounded-[11.173px] flex flex-col items-center gap-[14px] px-[22px] py-[28px] shadow-[2.095px_0.698px_30.027px_0px_rgba(124,78,228,0.04)]">
            <div class="w-[49px] h-[49px] shrink-0 bg-violet rounded-[50%] flex justify-center items-center">
              <Icon icon="rz:email" class="fill-none stroke-white w-[17px] h-[17px]" />
            </div>
            <h3>Office</h3>
            <p>Victoria Street, London, UK</p>
          </article>

          <article class="w-[260px] h-[170px] bg-white rounded-[11.173px] flex flex-col items-center gap-[14px] px-[22px] py-[28px] shadow-[2.095px_0.698px_30.027px_0px_rgba(124,78,228,0.04)]">
            <div class="w-[49px] h-[49px] shrink-0 bg-violet rounded-[50%] flex justify-center items-center">
              <Icon icon="rz:phone" class="fill-none stroke-white w-[17px] h-[17px]" />
            </div>
            <h3>Office</h3>
            <p>Victoria Street, London, UK</p>
          </article>
        </div>
      </section>
    </div>
  </section>
  
</template>

<style scoped>
</style>
