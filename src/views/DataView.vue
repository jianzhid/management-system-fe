<template>
  <div>
      <img :src="qrSrc" alt="QR Code" />
      <!--子页面获取到的值: {{ parentValue }}{{ user_id }}-->
  </div>
</template>
 
<script>
import axios from 'axios';
 
export default {
  props: {
      parentValue: {
        type: String,
        default: ''
      }
    },

  data() {
    return {
      qrSrc: '',
      user_id: 1234,
    };
  },

  mounted() {
    this.generateQRCode()
  },
  methods: {
    generateQRCode() {
      const url='http://localhost:8080/#/register/'+this.user_id
      const data = {
          url: url
      };
      axios.post('http://localhost:5000/generate_qrcode', {data:data},{ responseType: 'blob' })
        .then(response => {
          let blob = new Blob([response.data], { type: 'image/png' });
          this.qrSrc = URL.createObjectURL(blob);
        })
        .catch(error => {
          console.error('Error generating QR Code:', error);
        });
    },
  },
};
</script>