<script>
// import { defineComponent } from 'vue'
import Header from '../Header.vue'
import Subscribe from '../Subscribe.vue';
import Footer from '../Footer.vue';
import Blogs from '../Blogs.vue';
// import { useI18n } from "vue-i18n";

// const {t} = useI18n({useScope: 'global'})

export default {
  components: { Header, Blogs, Subscribe, Footer},
  data() {
    return {
    }
  }
};
</script>

<template>
  <Header />
  <Blogs />
  <Subscribe />
  <Footer />
</template>

<style scoped></style>