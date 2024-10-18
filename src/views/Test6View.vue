<template>
    <div>
      <input
          type="file"
          ref="fileInput"
          @change="handleFileChange"
      />
      <button @click="uploadFile">上传</button>
      <button @click="getPic">获取图片</button>
        <img v-if="showImage" :src="picurl" alt="beachball" />


    </div>
    

  </template>
   
  <script>
  import axios from "axios";
  import { Message } from 'element-ui'; // 从 Element UI 导入 Message 组件
   
  export default {
    data() {
      return {
        file: null,
        picurl: "",
        showImage: false,
      };
    },
    methods: {
      handleFileChange(event) {
        this.file = event.target.files[0];
      },
      uploadFile() {
        const formData = new FormData();
        formData.append('file', this.file);
   
        // 发送文件到后端
        axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
            .then(response => {
              console.log(response.data);
              // 在这里你可以处理上传成功的逻辑
              if ('error' in response.data) {
                Message.success(response.data.error);
                return
              }
              // 显示成功消息
              Message.success(response.data);
            })
            .catch(error => {
              console.error(error);
              // 在这里你可以处理上传失败的逻辑
   
              // 显示错误消息
              Message.error('文件上传失败');
            });
      },

    //从服务器获取图片
    getPic() {
      var that = this;
      axios.get('http://localhost:5000/getPic',{ responseType: 'arraybuffer' })
     .then(response => {
        that.picurl =
          "data:image/jpeg;base64," + that.arrayBufferToBase64(response.data);
          this.showImage=true;
      });
    },
    // ArrayBuffer转为base64字符串
    arrayBufferToBase64(buffer) {
      //第一步，将ArrayBuffer转为二进制字符串
      var binary = "";
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      //将二进制字符串转为base64字符串
      return window.btoa(binary);
    },



    }
  };
  </script>
   
  <style scoped>
  /* Add your CSS styles here */
  div {
    margin: 20px;
  }
   
  input {
    margin-bottom: 10px;
  }
   
  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
   
  button:hover {
    background-color: #45a049;
  }
  </style>
   