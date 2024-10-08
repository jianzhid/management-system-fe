<template>
    <div>
      <h1>User ID: {{ myParam }}</h1>
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
  </template>
   
  <script>
  import axios from 'axios';
  export default {
    data() {
    return {
      myParam: ''
    };
  },
  methods: {
    open() {
        const userId = this.$route.params.userId;
        const postData = {
      userId: userId
    };
    postData['newKey'] = 'newValue';
        axios.post('http://localhost:5000/test2', postData)
        //axios.get('http://localhost:5000/test1', {
                    //params: {
                        //userId: userId
                    //}
                    //})
        //axios.get('http://localhost:5000/user/'+userId)
        .then((
            res) => {
            this.$alert(userId, '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
            
          })
        .catch(
          error=>{
            console.log(err)
          }
        )




      }
  },
  created() {
    this.myParam = this.$route.params.userId;
  }

  };
  </script>