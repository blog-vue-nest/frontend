<script setup>
import Aside from '../components/Aside.vue';
import ChangePost from '../components/ChangePost.vue';

// import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

</script>

<template>


<Aside />

<ChangePost :postId="props.id" />

</template>

<style scoped>
</style>
