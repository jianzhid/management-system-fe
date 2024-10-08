<template>
    <div>
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
      <div v-if="userInfo">
        <p>User ID: {{ userInfo.user_id }}</p>
      </div>
      <div v-else>
        <p>User not logged in.</p>
      </div>
    </div>
  </template>
   
  <script>
  import axios from 'axios';
   
  export default {
    data() {
      return {
        userInfo: null,
      };
    },
    methods: {
      login() {
        // 假设这里有登录逻辑，成功后跳转到带有用户信息的页面
        axios.post('http://localhost:5000/login').then(() => {
          this.fetchUserInfo();
        });
      },
      logout() {
        axios.get('http://localhost:5000/logout').then(() => {
          this.userInfo = null;
        });
      },
      fetchUserInfo() {
        axios.get('http://localhost:5000/me').then(response => {
          this.userInfo = response.data;
        }).catch(error => {
          console.error('Error fetching user info:', error);
        });
      }
    },
    created() {
      this.fetchUserInfo();
    }
  };
  </script>