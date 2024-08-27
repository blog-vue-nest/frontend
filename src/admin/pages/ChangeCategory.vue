<script setup>
import Aside from '../components/Aside.vue';
import ChangeCategory from '../components/ChangeCategory.vue';

import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

</script>

<template>


<Aside />

<ChangeCategory :categoryId="props.id" />


</template>

<style scoped>
</style>
