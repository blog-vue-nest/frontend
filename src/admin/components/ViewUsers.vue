<script setup>
import { ref, onMounted} from 'vue';
import axios from 'axios';

const users = ref([]);


const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const getUsers = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/users/get-all?page=1&limit=100`);
    users.value = response.data.items;    
  } catch (error) {
    console.error(`Error fetching users`, error);
    return null; // Возвращаем null, если произошла ошибка
  }
};

onMounted(() => {
  getUsers()
})

const deleteUser = async (id) => {
  const result = confirm('Are you sure?');
  if (result) {
    try {
      axios.delete(`http://localhost:3000/users/delete-user/${id}`);
    } catch (error) {
      console.error('Error deleting user', error);
    }
    alert('User is deleted');
    getUsers();
  } else {
    alert('Action is canceled');
  }
}

</script>

<template>
  <div class="p-4 sm:ml-64">
    
<section>
  <h3 class="mb-3 font-raleway-700 text-center text-[24px]">{{ $t('AdminPanel.ViewUsers.title') }}</h3>

  <router-link :to="{ name: 'AddUser'}">
    <button type="submit" class="block mb-3 text-white bg-violet focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{{ $t('AdminPanel.ViewUsers.addButton') }}</button>
  </router-link>

  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    {{ $t('AdminPanel.ViewUsers.name') }}
                </th>
                <th scope="col" class="px-6 py-3">
                    {{ $t('AdminPanel.ViewUsers.email') }}
                </th>
                <th scope="col" class="px-6 py-3">
                    {{ $t('AdminPanel.ViewUsers.action') }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" class="odd:bg-white even:bg-gray-50 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {{ user.id }}
                </th>
                <td class="px-6 py-4">
                    {{ user.name }}
                </td>
                <td class="px-6 py-4">
                     {{ user.email }}
                </td>
                <td class="flex gap-3 px-6 py-4">
                    <!-- <span @click="deleteCategory(category.id)" class="hover:cursor-pointer">X</span> -->


                    <Icon 
                      icon="rz:delete-circle" 
                      class="custom-icon w-[24px] h-[24px] hover:cursor-pointer" 
                      @click="deleteUser(user.id)"
                    />

                    <router-link :to="{ name: 'ChangeUser', params: {id:user.id}}">
                      <Icon 
                        icon="rz:edit-icon" 
                        class="custom-icon w-[24px] h-[24px] hover:cursor-pointer" 
                      />
                    </router-link>
                    <!-- <router-link :to="{ name: 'ChangeCategory', params: {id:category.id}}">Edit</router-link> -->
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</section>

  </div>
</template>

<style scoped>

</style>
