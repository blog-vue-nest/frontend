<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);

const getPosts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/posts/get-all/');
    posts.value = response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

onMounted(() => {
  getPosts();
});
</script>