<template>
  <div>
    <input v-model="inputData" type="text" placeholder="输入数据">
    <button @click="sendData">发送数据</button>
  </div>
</template>
 
<script>
import axios from 'axios';
 
export default {
  data() {
    return {
      inputData: ''
    };
  },
  methods: {
    sendData() {
      const url = 'http://localhost:5000/get_data';
      // 如果使用GET方法，发送数据
      axios.get(url, { params: { input_data: this.inputData } })
        .then(response => console.log(response.data))
        .thrn(this.$router.push('/login'))
        .catch(error => console.error(error));
      
      // 如果使用POST方法，发送数据
      // axios.post(url, { input_data: this.inputData })
      //   .then(response => console.log(response.data))
      //   .catch(error => console.error(error));
    }
  }
};
</script>