<script>
import Header from '../Header.vue'
import FeaturedPost from '../FeaturedPost.vue';
import MainPagePosts from '../MainPagePosts.vue';
import Subscribe from '../Subscribe.vue';
import Footer from '../Footer.vue';


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
  <!-- <h3 class="text-[52px]">It`s a home page</h3> -->
  <FeaturedPost />
  <MainPagePosts />
  <Subscribe />
  <Footer />
</template>

<style scoped></style>
