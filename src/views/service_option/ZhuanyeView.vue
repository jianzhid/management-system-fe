<template>
      <div>
        <h1>User ID: {{ myParam }}{{ username }}</h1>
        
      </div>
    </template>
     
    <script>
    import axios from 'axios';
    // Vue 组件内部
  //this.$router.push({ path: `/user/${userId}` });
    export default {
      data() {
      return {
        myParam: ''
      };
    },
  //   computed: {
  //     username() {
  //       return this.$store.state.username;
  //     },
  // },
    created() {
      this.myParam = this.$store.state.username;
    }
  
    };
    </script>
  
  
  
  