<template>
  <div>
    <el-form ref="form1" :model="form" status-icon :rules="rules" label-width="100px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="手机号码" prop="tel">
                <el-input v-model="phoneNumber"></el-input>
              </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="sendCode">发送验证码</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="验证码" prop="veri  code">
                <el-input v-model="verificationCode"></el-input>
              </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="verifyCode">验证</el-button>
          </el-form-item>
        </el-col>
      </el-row>


    </el-form>






    <form @submit.prevent="sendCode">
      <input type="tel" v-model="phoneNumber" placeholder="Phone number">
      <button type="submit">Send Code</button>
    </form>
    <form @submit.prevent="verifyCode">
      <input type="tel" v-model="verificationCode" placeholder="Verification Code">
      <button type="submit">Verify Code</button>
    </form>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      phoneNumber: '',
      verificationCode: ''
    };
  },
  methods: {
    async sendCode() {
      try {
        const response = await axios.post('http://localhost:5000/send-code', { phone_number: this.phoneNumber });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async verifyCode() {
      try {
        const response = await axios.post('http://localhost:5000/verify-code', { phone_number: this.phoneNumber, code: this.verificationCode });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>