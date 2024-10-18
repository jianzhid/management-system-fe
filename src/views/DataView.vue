<template>
  <div>
    <el-row>
    <el-col :span="12">
      <el-button @click="generateQRCode">生成注册二维码</el-button>
      <el-row :gutter="20"><br></el-row>
      <img v-if="showQR" :src="qrSrc" alt="QR Code" />
    </el-col>
    <el-col :span="12">
      <el-button @click="getPic">获取证件信息</el-button>
      <el-row :gutter="20"><br></el-row>
      <el-image 
        v-if="showFile"
        style="width: 400px; height: auto"
        :src="picurl" 
        :preview-src-list="fileList"
        alt="File">
      </el-image>
      <!--<img v-if="showFile" :src="picurl" alt="File" />-->
    </el-col>
  </el-row>

    
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
      showQR: false,
      showFile:false,
      picurl: '',
      fileList:[],
    };
  },

  //created() {
    //this.fetchUserInfo();
  //},
  methods: {
    //fetchUserInfo() {
        //axios.get('http://localhost:5000/me').then(response => {
          //this.user_id = response.data.user_id;
        //}).catch(error => {
          //console.error('Error fetching user info:', error);
          //this.$router.push("/login");
        //});
      //},
    generateQRCode() {
      this.user_id=this.$store.state.username;
      const url='http://localhost:8080/#/register/'+this.user_id
      const data = {
          url: url
      };
      axios.post('http://localhost:5000/generate_qrcode', {data:data},{ responseType: 'blob' })
        .then(response => {
          let blob = new Blob([response.data], { type: 'image/png' });
          this.qrSrc = URL.createObjectURL(blob);
          this.showQR=true;
        })
        .catch(error => {
          console.error('Error generating QR Code:', error);
        });
    },

    getPic() {
      var that = this;
      axios.get('http://localhost:5000/getPic',{ responseType: 'arraybuffer' })
     .then(response => {
        that.picurl =
          "data:image/jpeg;base64," + that.arrayBufferToBase64(response.data);
          this.showFile=true;
          this.fileList.push(this.picurl);
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
  },
};
</script>