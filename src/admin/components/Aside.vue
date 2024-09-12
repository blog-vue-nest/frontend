<script setup>
const logOut = () => {
   localStorage.removeItem('token');
}
</script>

<template>
<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <router-link :to="{ name: 'ViewCategories'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">{{ $t('AdminPanel.Aside.categories') }}</span>
            </router-link>
         </li>
         <!-- <li>
            <router-link :to="{ name: 'ChangeCategory'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Change category</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </router-link>
         </li> -->
         <!-- <li>
            <router-link :to="{ name: 'AddCategory'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Add category</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </router-link>
         </li> -->
         <li>
            <router-link :to="{ name: 'ViewPosts'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">{{ $t('AdminPanel.Aside.posts') }}</span>
            </router-link>
         </li>

         <li>
            <router-link :to="{ name: 'ViewUsers'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">{{ $t('AdminPanel.Aside.users') }}</span>
            </router-link>
         </li>
         <!-- <li>
            <router-link :to="{ name: 'ChangePost'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Change post</span>
            </router-link>
         </li> -->
         <!-- <li>
            <router-link :to="{ name: 'AddPost'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Add post</span>
            </router-link>
         </li> -->
         <li>
            <router-link :to="{ name: 'Home'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">{{ $t('AdminPanel.Aside.exit') }}</span>
            </router-link>
         </li>


         <li>
            <router-link @click="logOut" :to="{ name: 'Home'}" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      
<svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"><path fill="black" d="M13.063 4c-.874 0-1.647.45-2.188 1.03c-.54.582-.935 1.31-1.28 2.095c-.534 1.21-.91 2.554-1.25 3.813c-1.087.316-2.01.71-2.75 1.187C4.727 12.683 4 13.457 4 14.5c0 .908.553 1.632 1.25 2.156c.593.446 1.324.816 2.188 1.125c.048.234.126.47.218.69c-.843.477-2.178 1.397-3.468 3.156l-.594.844l.844.593l3.28 2.25l-.624 1.25L6.374 28h19.25l-.72-1.438l-.623-1.25l3.283-2.25l.844-.593l-.593-.846c-1.29-1.76-2.626-2.68-3.47-3.156c.093-.222.17-.457.22-.69c.863-.308 1.594-.678 2.187-1.124c.698-.524 1.25-1.248 1.25-2.156c0-1.045-.724-1.817-1.593-2.375c-.742-.477-1.664-.87-2.75-1.188c-.373-1.303-.787-2.67-1.312-3.874c-.34-.775-.715-1.49-1.25-2.062c-.536-.57-1.296-1-2.157-1c-.583 0-1.024.162-1.5.28c-.475.12-.958.22-1.437.22c-.96 0-1.764-.5-2.937-.5zm0 2c.205 0 1.436.5 2.937.5c.75 0 1.42-.15 1.938-.28c.518-.132.913-.22 1-.22c.23 0 .403.072.687.375s.62.843.906 1.5c.545 1.243.96 2.94 1.408 4.5c0-.002.054-.048-.093.03c-.25.137-.772.313-1.407.408c-1.27.19-3 .187-4.437.187c-1.43 0-3.164-.02-4.437-.22c-.636-.097-1.15-.268-1.406-.405c-.078-.042-.107-.026-.125-.03v-.033c.004-.01 0-.02 0-.03l.033-.032a1 1 0 0 0 .124-.438v-.03c.36-1.328.76-2.735 1.25-3.845c.293-.667.61-1.212.906-1.53c.297-.32.5-.407.72-.407zm-4.876 7.094c.226.47.624.844 1.032 1.062c.605.325 1.306.477 2.06.594c1.51.234 3.274.25 4.72.25c1.437 0 3.206.007 4.72-.22c.754-.112 1.45-.26 2.06-.592c.41-.223.807-.618 1.03-1.094c.62.22 1.138.454 1.5.687c.58.376.69.655.69.72c0 .06-.053.25-.47.564s-1.137.674-2.06.968c-1.853.59-4.52.97-7.47.97s-5.62-.38-7.47-.97c-.925-.293-1.645-.654-2.06-.968C6.05 14.75 6 14.56 6 14.5c0-.066.078-.315.656-.688c.363-.233.9-.49 1.532-.718zm2.594 5.47c.33.053.656.142 1 .186c.13.877.816 1.652 1.91 1.72c.84.05 1.79-.348 1.873-1.47c.15.002.288 0 .438 0s.29.002.44 0c.082 1.122 1.032 1.52 1.874 1.47c1.092-.068 1.776-.843 1.906-1.72c.345-.044.67-.133 1-.188l-.095.625c-.308 1.643-1.044 3.17-1.97 4.22c-.923 1.05-2.01 1.61-3.155 1.593c-1.176-.017-2.24-.584-3.156-1.625c-.918-1.04-1.64-2.537-1.97-4.188l-.093-.625zM23 19.998c.372.218 1.35.86 2.47 2.094l-3.032 2.093l-.72.47l.376.78l.28.563H19.22a7.8 7.8 0 0 0 1.436-1.28c1.1-1.25 1.84-2.89 2.25-4.657c.034-.02.06-.043.094-.062zm-14.03.03c.038.024.083.042.124.064c.428 1.745 1.165 3.363 2.25 4.593c.45.51.973.95 1.53 1.313h-3.25l.282-.563l.375-.78l-.716-.47l-3.032-2.093c1.06-1.168 2.023-1.812 2.44-2.063z"/></svg>
               <span class="flex-1 ms-3 whitespace-nowrap">{{ $t('AdminPanel.Aside.logOut') }}</span>
            </router-link>
         </li>
      </ul>
   </div>
</aside>
</template>