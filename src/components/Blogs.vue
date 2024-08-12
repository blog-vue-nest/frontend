<script setup>

</script>

<template>
  <div class="container px-[24px] pt-[39px] pb-[40px] md:px-[76px] md:pt-[45px] md:pb-[100px] 2xl:px-[104px] 2xl:pt-[77px] 2xl:pb-[131px]">

      <section class="flex flex-col items-center text-center">
        <span class="uppercase font-raleway-700 text-dark-gray text-[12px] leading-[150%] tracking-[1.124px]
        2xl:text-[16px] 2xl:tracking-[1.6px]">{{ $t('BlogsBlock.name') }}</span>
        <h2 class="mt-[12px] w-[195px] font-raleway-700 text-dark text-[24px] leading-[124.8%] lining-nums proportional-nums
        md:mt-[17.5px] md:w-[511px] md:text-[34px] md:leading-[133.3%]
        2xl:mt-[25px] 2xl:w-[728px] 2xl:text-[48px]">{{ $t('BlogsBlock.title') }}</h2>
        <p class="mt-[22px] w-[322px] font-roboto-400 text-dark-gray text-[12px] leading-[150%]
        md:mt-[17.5px] md:w-[532px]
        2xl:mt-[25px] 2xl:text-[16px]">{{ $t('BlogsBlock.describe') }}</p>
      </section>

      <section class="mt-[46px] md:mt-[80px] 2xl:mt-[114px]">
        <!-- <div class="mt-[37px] mb-[57px] mx-[19px] flex flex-col items-center gap-[45px]"> -->
          <div class="mx-[19px] md:mx-0 grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-y-[45px] lg:gap-y-[37px] lg:gap-x-[12px] 2xl:gap-y-[53px] 2xl:gap-x-[16px]">
          <article class="w-auto">
            <div>
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/plane.jpg" alt="Plane">
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
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/Macbook.jpg" alt="Macbook">
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
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/ball.jpg" alt="Ball">
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
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/plane.jpg" alt="Plane">
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
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/Macbook.jpg" alt="Macbook">
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
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/ball.jpg" alt="Ball">
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
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/plane.jpg" alt="Plane">
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
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/Macbook.jpg" alt="Macbook">
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
              <img class="w-[100%] max-h-[258px] 2sm:max-h-[400px] lg:h-[23vw] object-cover rounded-[12px] 2xl:rounded-[16px]"src="../assets/img/ball.jpg" alt="Ball">
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
        </div>
      </section>
  </div>
</template>

<style scoped>
</style>
