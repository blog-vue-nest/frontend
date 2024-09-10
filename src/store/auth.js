// store/auth.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    // isLoggedIn: localStorage.getItem('token') ? true : false,
    isLoggedIn: false,
  }),
  actions: {
    async fetchUser() {
      // Здесь выполните запрос к API для получения данных пользователя
      // Например, используйте Fetch API или Axios
      // Обновите состояние user
    },
    async signIn(email, password) {
      try {
    const response = await axios.post(`http://localhost:3000/auth/login`, {
      email,
      password
    });
    const token = response.data.token;
    // console.log('Полученный токен:', token); // Добавьте эту строку
    localStorage.setItem('token', token);
   // console.log('Токен сохранен в localStorage.'); // Добавьте эту строку
  } catch (error) {
    console.error('Ошибка при аутентификации:', error);
  }
    },
    async signUp(email, password) {
      // Здесь выполните запрос к API для регистрации пользователя
      // Обновите состояние user
    },
async checkUser(token) {
  try {
    const response = await axios.get(`http://localhost:3000/auth/check-user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    this.user = response.data.name;
    this.isLoggedIn = !!response.data;
    return this.isLoggedIn;
    
   // return response.data; // Убедитесь, что возвращаете данные
  } catch (error) {
    console.error('Такого пользователя не существует: ', error);
    localStorage.removeItem('token');
    this.user = null;
    this.isLoggedIn = false;
    return this.isLoggedIn;
    // throw error; // Пробрасываем ошибку дальше, чтобы она была обработана в вызывающем коде
  }
    },
//     async checkUser(token) {
//   try {
//     const response = await axios.get(`http://localhost:3000/auth/check-user`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       console.error("Авторизация не удалась. Токен недействителен или истек.");
//       // Можете добавить логику для перенаправления на страницу входа
//     } else {
//       console.error("Ошибка при проверке пользователя:", error);
//     }
//     throw error;
//   }
// },
    logout() {
      // Очистите состояние user при выходе
      this.user = null;
    },
  },
});
