<template>
    <el-tabs value="first" type="border-card" stretch="true">
      <el-tab-pane label="个人" name="first">
        <div class="form-container">
        <el-form ref="form1" :model="form1" status-icon :rules="rules" label-width="100px" class="demo-form1">
          <el-row type="flex" justify="center" align="middle" style="height: 100px;"></el-row>
          
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form1.name"></el-input>
              </el-form-item>
         
              <el-form-item label="手机号码" prop="tel">
                <el-input v-model="form1.tel"></el-input>
              </el-form-item>
          
        
            <el-form-item label="身份证号码" prop="idcard">
              <el-input v-model="form1.idcard"></el-input>
            </el-form-item>
   
  
            <el-form-item label="性别" prop="gender">
              <el-select v-model="form1.gender" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
 
  
            <el-form-item prop="email" label="邮箱" >
              <el-input v-model="form1.email"></el-input>
            </el-form-item>
    
        
        <el-form-item label="证明资料" prop="file">
          
              <input
              type="file"
              ref="fileInput"
              @change="handleFileChange"
          />
        
  
        </el-form-item>


          
        <el-form-item label="登录密码" prop="pass">
              <el-input type="password" v-model="form1.pass" autocomplete="off"></el-input>
            </el-form-item>
         
            <el-form-item label="密码确认" prop="checkPass">
              <el-input type="password" v-model="form1.checkPass" autocomplete="off"></el-input>
            </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="submitForm('form1')">注册</el-button>
            <el-button @click="resetForm('form1')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      </el-tab-pane>
      <el-tab-pane label="企业" name="second">
        <el-form ref="form2" :model="form2" status-icon :rules="rules" label-width="100px" class="demo-form2">
          <el-row type="flex" justify="center" align="middle" style="height: 100px;"></el-row>
       
          <el-form-item label="名称" prop="name">
            <el-input v-model="form2.name"></el-input>
          </el-form-item>
     
          <el-form-item label="信用代码" prop="usci">
            <el-input v-model="form2.usci"></el-input>
          </el-form-item>
      
        
          <el-form-item label="地址" prop="adress">
            <el-input v-model="form2.adress"></el-input>
          </el-form-item>
        
          <el-form-item label="企业性质" prop="bn">
            <el-input v-model="form2.bn"></el-input>
          </el-form-item>
        
        
          <el-form-item label="注册金额" prop="money">
            <el-input v-model="form2.money"></el-input>
          </el-form-item>
     
          <el-form-item label="成立时间" prop="time">
            <el-date-picker type="date" placeholder="选择日期" v-model="form2.time" style="width: 100%;"></el-date-picker>
          </el-form-item>
     
     
          <el-form-item label="联系人" prop="person">
            <el-input v-model="form2.person"></el-input>
          </el-form-item>
       
          <el-form-item label="手机号码" prop="tel">
            <el-input v-model="form2.tel"></el-input>
          </el-form-item>
       
   
          <el-form-item label="证照上传" prop="file">
            <input
              type="file"
              ref="fileInput"
              @change="handleFileChange2"
          />
          </el-form-item>
       
      
       
        
          <el-form-item label="登录密码" prop="twopass">
            <el-input type="password" v-model="form2.twopass" autocomplete="off"></el-input>
          </el-form-item>
        
          <el-form-item label="密码确认" prop="twocheckPass">
            <el-input type="password" v-model="form2.twocheckPass" autocomplete="off"></el-input>
          </el-form-item>
  
          <el-form-item>
            <el-button type="primary" @click="submitForm2('form2')">注册</el-button>
            <el-button @click="resetForm('form2')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </template>
   
  <script>
  import axios from 'axios';
  import { Message } from 'element-ui';
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form1.checkPass !== '') {
            this.$refs.form1.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form1.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        };     
      };
      var twovalidatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form2.twocheckPass !== '') {
            this.$refs.form2.validateField('twocheckPass');
          }
          callback();
        }
      };
      var twovalidatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form2.twopass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        };     
      };
      return {
        form1: {
          name: '',
          tel: '',
          idcard: '',
          gender: '',
          email: '',
          file: null,
          pass: '',
          checkPass: ''
        },
        form2: {
          name: '',
          usci: '',
          adress: '',
          bn: '',
          money: '',
          time: '',
          person: '',
          tel: '',
          file: null,
          twopass: '',
          twocheckPass: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 1, max: 100, message: '请输入正确名字', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          twopass: [
            { validator: twovalidatePass, trigger: 'blur' }
          ],
          twocheckPass: [
            { validator: twovalidatePass2, trigger: 'blur' }
          ],
          email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
          tel:[
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的电话号码', trigger: 'blur' }
          ],
          idcard:[
            { required: true, message: '请输入身份证号码', trigger: 'blur' },
            { pattern: /(^\d{15}$)|(^\d{17}(\d|X)$)|(^\d{17}(\d|x)$)/, message: '请输入正确的身份证号码', trigger: 'blur' }
          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          usci:[
          { required: true, message: "公司信用代码不能为空", trigger: "blur" },
          { min: 18, max: 23, message: '公司信用代码长度范围是18到23', trigger: 'blur' },
          { pattern: /^[0-9A-Z]+$/, message: "请输入正确的公司信用代码", trigger: "blur"}
          ],
          adress: [
            { required: true, message: '请输入地址', trigger: 'blur' },
          ],
          bn: [
            { required: true, message: '请输入企业性质', trigger: 'blur' },
          ],
          money: [
            { required: true, message: '请填写注册金额', trigger: 'blur'},
          ],
          time: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          person: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 1, max: 100, message: '请输入正确名字', trigger: 'blur' }
          ],
          file: [
            { required: true, message: '请上传文件', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      handleFileChange(event) {
        this.form1.file = event.target.files[0];
      },

      handleFileChange2(event) {
        this.form2.file = event.target.files[0];
      },

      uploadFile() {
        const formData = new FormData();
        formData.append('file', this.form1.file);
   
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


      person() {
        const ref = this.$route.params.referrer;
        const formData = new FormData();
        formData.append('file', this.form1.file);
        formData.append('referrer', ref);
        formData.append('name', this.form1.name);
        formData.append('tel', this.form1.tel);
        formData.append('idcard', this.form1.idcard);
        formData.append('gender', this.form1.gender);
        formData.append('email', this.form1.email);
        formData.append('pass', this.form1.pass);

        //const ref = this.$route.params.referrer;
        //const data=this.form1
        //data['referrer']=ref
          //axios.post('http://localhost:5000/per_register',{data:data})
          axios.post('http://localhost:5000/per_register',formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((
            res) => {
            console.log(res)
            if (res.data.code != 0 && res.data.code != 401) {
              return this.$message.error(res.data.msg);
            }
            this.$message.success("注册成功" );
            this.$router.push("/login");
          })
        .catch(
          error=>{
            console.log(err)
          }
        )
        },

        business() {
        const ref = this.$route.params.referrer;
        const formData = new FormData();
        formData.append('file', this.form2.file);
        formData.append('referrer', ref);
        formData.append('name', this.form2.name);
        formData.append('tel', this.form2.tel);
        formData.append('person', this.form2.person);
        formData.append('usci', this.form2.usci);
        formData.append('adress', this.form2.adress);
        formData.append('twopass', this.form2.twopass);
        formData.append('bn', this.form2.bn);
        formData.append('money', this.form2.money);
        formData.append('time', this.form2.time);

  
        //const ref = this.$route.params.referrer;
        //const data=this.form2
        //data['referrer']=ref
          //axios.post('http://localhost:5000/bus_register',{data:data})
          axios.post('http://localhost:5000/bus_register',formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((
            res) => {
            console.log(res)
            if (res.data.code != 0 && res.data.code != 401) {
              return this.$message.error(res.data.msg);
            }
            this.$message.success("注册成功" );
            this.$router.push("/login");
          })
        .catch(
          error=>{
            console.log(err)
          }
        )
        },


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.person();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      submitForm2(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.business();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  };
  </script>

