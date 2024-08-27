<script setup>
import Header from '../components/Header.vue'
import Subscribe from '../components/Subscribe.vue';
import Footer from '../components/Footer.vue';
import PostComponent from '@/components/PostComponent.vue';


const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

</script>

<template>
  <Header />

  <PostComponent :postId="props.id" />

  <Subscribe />
  <Footer />
</template>

<style scoped></style>