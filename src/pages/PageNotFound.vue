<script setup>
import Header from '../components/Header.vue'
import Subscribe from '../components/Subscribe.vue';
import Footer from '../components/Footer.vue';
import Error404 from '@/components/Error404.vue';
</script>

<template>
  <Header />
  
  <Error404 />

  <Subscribe />
  <Footer />
</template>

<style scoped></style>
