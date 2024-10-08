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
  
     
          
            <el-form-item label="登录密码" prop="pass">
              <el-input type="password" v-model="form1.pass" autocomplete="off"></el-input>
            </el-form-item>
         
            <el-form-item label="密码确认" prop="checkPass">
              <el-input type="password" v-model="form1.checkPass" autocomplete="off"></el-input>
            </el-form-item>
    
        
        <el-form-item label="证明资料上传">
            <el-input v-model="form1.file"></el-input>
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
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
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
          file: '',
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
          fileList: [],
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
            { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d X|x)$)/, message: '请输入正确的身份证号码', trigger: 'blur' }
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
            { required: false, message: '请上传文件', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      person() {
        const ref = this.$route.params.referrer;
        const data=this.form1
        data['referrer']=ref
          axios.post('http://localhost:5000/per_register',{data:data})
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
        const data=this.form2
        data['referrer']=ref
          axios.post('http://localhost:5000/bus_register',{data:data})
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  };
  </script>

