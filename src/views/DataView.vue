<template>
  <div>
    <el-button @click="generateQRCode">生成注册二维码</el-button>
      <img v-if="showImage" :src="qrSrc" alt="QR Code" />
  </div>
</template>
 
<script>
import axios from 'axios';
 
export default {
  //props: {
      //parentValue: {
        //type: String,
        //default: ''
      //}
    //},

  data() {
    return {
      qrSrc: '',
      user_id: '',
      showImage: false,
    };
  },

  created() {
    this.fetchUserInfo();
  },
  methods: {
    fetchUserInfo() {
        axios.get('http://localhost:5000/me').then(response => {
          this.user_id = response.data.user_id;
        }).catch(error => {
          console.error('Error fetching user info:', error);
          this.$router.push("/login");
        });
      },
    generateQRCode() {
      const url='http://localhost:8080/#/register/'+this.user_id
      const data = {
          url: url
      };
      axios.post('http://localhost:5000/generate_qrcode', {data:data},{ responseType: 'blob' })
        .then(response => {
          let blob = new Blob([response.data], { type: 'image/png' });
          this.qrSrc = URL.createObjectURL(blob);
          this.showImage=true;
        })
        .catch(error => {
          console.error('Error generating QR Code:', error);
        });
    },
  },
};
</script>