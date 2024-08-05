<script>
// import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import FeaturedPost from './components/FeaturedPost.vue';
import MainPagePosts from './components/MainPagePosts.vue';
import Subscribe from './components/Subscribe.vue';
// import { useI18n } from "vue-i18n";

// const {t} = useI18n({useScope: 'global'})

export default {
  components: { Header, FeaturedPost, MainPagePosts, Subscribe},
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
  <Subscribe />
</template>

<style scoped></style>
