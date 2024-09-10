<script setup>
import Aside from '../components/Aside.vue';
import ChangeUser from '../components/ChangeUser.vue';

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

<ChangeUser :userId="props.id" />


</template>

<style scoped>
</style>