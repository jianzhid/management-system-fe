<template>
    <div>
      <h1>User ID: {{ myParam }}</h1>
    </div>
  </template>
   
  <script>
  // Vue 组件内部
//this.$router.push({ path: `/user/${userId}` });
  export default {
    data() {
    return {
      myParam: ''
    };
  },
  created() {
    this.myParam = this.$route.params.userId;
  }

  };
  </script>



