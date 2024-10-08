<template>
    <div>
      <child-component :parentValue="parentValue"></child-component>
    </div>
  </template>
   
  <script>
import ChildComponent from './Test5VIew.vue';
import axios from 'axios';
   
  export default {
    components: {
      ChildComponent
    },
    data() {
      return {
        parentValue: '',
        userInfo: null,
      };
    },

    methods: {
        fetchUserInfo() {
        axios.get('http://localhost:5000/me').then(response => {
          this.parentValue = response.data.user_id;
        }).catch(error => {
          console.error('Error fetching user info:', error);
          this.$router.push("/login");
        });
      },
      

    },

    created() {
      this.fetchUserInfo();
    }



  };
  </script>