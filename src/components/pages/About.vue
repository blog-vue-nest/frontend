<script>
// import { defineComponent } from 'vue'
import Header from '../Header.vue'
import FeaturedPost from '../FeaturedPost.vue';
import MainPagePosts from '../MainPagePosts.vue';
import Subscribe from '../Subscribe.vue';
import Footer from '../Footer.vue';
// import { useI18n } from "vue-i18n";

// const {t} = useI18n({useScope: 'global'})

export default {
  components: { Header, FeaturedPost, MainPagePosts, Subscribe, Footer},
  data() {
    return {
    }
  }
};
</script>

<template>
  <Header />
  <!-- <FeaturedPost /> -->
  <h3 class="text-[52px]">About us</h3>
  <Subscribe />
  <Footer />
</template>

<style scoped></style>
