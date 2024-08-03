<script>
// import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import FeaturedPost from './components/FeaturedPost.vue';
import MainPagePosts from './components/MainPagePosts.vue';
// import { useI18n } from "vue-i18n";

// const {t} = useI18n({useScope: 'global'})

export default {
  components: { Header, FeaturedPost, MainPagePosts },
  data() {
    return {
    }
  }
};
</script>

<template>
  <Header />
  <FeaturedPost />
  <MainPagePosts />
</template>

<style scoped></style>
