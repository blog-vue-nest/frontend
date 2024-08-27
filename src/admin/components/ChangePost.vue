<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  postId: String
});

console.log(props.postId);


</script>

<template>
  <div class="p-4 sm:ml-64">
    <section>
      <h3 class="mb-3 font-raleway-700 text-center text-[24px]">Change post</h3>

    </section>
    
  </div>
</template>