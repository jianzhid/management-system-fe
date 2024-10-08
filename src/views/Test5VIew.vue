<template>
    <div>
      子页面获取到的值: {{ parentValue }}
    </div>
  </template>
   
  <script>
  export default {
    props: {
      parentValue: {
        type: String,
        default: ''
      }
    }
  };
  </script>