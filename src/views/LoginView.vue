<template>
    <div class="login">
      <div class="login_title">
        <h2>登陆页面</h2>
        <div class="login_context">
          <el-form :model="loginRuleForm" :rules="loginRules" ref="loginRules" class="login_box">
            <el-form-item label="登录方式" prop="way">
              <el-select v-model="loginRuleForm.way" placeholder="请选择登录方式" @change="handleSelectChange">
                <el-option label="个人登录" value="person"></el-option>
                <el-option label="企业登录" value="business"></el-option>
              </el-select>
            </el-form-item>
  
            <el-form-item label="账号" prop="username">
              <el-input v-model="loginRuleForm.username" :placeholder="placeholderValue"></el-input>
            </el-form-item>
  
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginRuleForm.password"></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="11">
            <router-link to="/register">还没有账号，去创建</router-link>
            <router-view></router-view>
          </el-col>
            <el-form-item class="btns">
              <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
          </el-row>
          </el-form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
    // Vue 代码逻辑
    export default {
      data() {
        return {
          // 表单请求数据
          loginRuleForm: {
            username: '',
            password: '',
            way: '',
          },
          placeholderValue: '',
          // 表单验证规则
          loginRules: {
            username: [{
                required: true,
                message: "请输入用户名",
                trigger: "blur"
              },
              {
                min: 3,
                max: 18,
                message: "长度在 3 到 18 个字符",
                trigger: "blur",
              },
            ],
            password: [{
                required: true,
                message: "请输入密码",
                trigger: "blur"
              },
              {
                min: 3,
                max: 18,
                message: "长度在 3 到 18 个字符",
                trigger: "blur",
              }
            ],
            way: [{
                required: true,
                message: "请输选择登录方式",
                trigger: "blur"
              },
            ]
          }
        };
      },
      methods: {
        login() {
          axios.post('http://localhost:5000/login',{data:this.loginRuleForm})
        .then((
            res) => {
            console.log(res)

            if (res.data.code != 0 && res.data.code != 401) {
              return this.$message.error(res.data.msg);
            }
            // 跳转到主页
            this.$router.push("/home");
            this.$message.success("HI! " + this.loginRuleForm.username + " 欢迎来到管理平台！");

          })
        .catch(
          error=>{
            console.log(err)
          }
        )
        },
          handleSelectChange(value) {
          if (value === 'person') {
            this.placeholderValue = '电话号码/身份证号码';
          } else if (value === 'business') {
            this.placeholderValue = '企业信用代码';
          } else {
            this.placeholderValue = '';
          }
        }
      }
    }
  </script>
  
  <style scoped>
  
    .login {
      /* 高度 */
      height: 100%;
      /* 背景色 */
      background: rgb(242, 244, 247);
      
    }
  
    .login_title {
      /* 字体水平左右居中 */
      text-align:center;
    }
  
    .login_context {
      /* 宽度 */
      width: 450px;
      /* 高度 */
      height: 350px;
      /* 背景色 */
      background: #fff;
      /* 属性定位 */
      position: absolute;
      /* 属性定位，顶部占比 */
      top: 50%;
      /* 属性定位，左侧占比 */
      left: 50%;
      /* 水平垂直居中 */
      transform: translate(-50%, -50%);
      /* 四个角的圆角角度 */
      border-radius: 20px;
      /* 阴影 */
      box-shadow: 0 0 5px 2px #ddd;
    }
  
    .login_logo {
      /* 宽度 */
      width: 150px;
      /* 高度 */
      height: 150px;
      /* 属性定位 */
      position: absolute;
      /* 属性定位，顶部占比 */
      top: -75px;
      /* 属性定位，左侧占比 */
      left: 49%;
      /* logo左侧边距 */
      margin-left: -75px;
      /* 带有边框属性 */
      border: 1px solid #eee;
      /* 四个角的圆角角度 */
      border-radius: 50%;
      /* 背景色 */
      background: #fff;
      /* 设置内边距属性 */
      padding: 10px;
      /* 阴影 */
      box-shadow: 0 0 2px 2px #ddd;
    }
  
    .login_logo img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgb(238, 238, 238);
    }
  
    .login_box {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding: 0 50px;
      /* 边框边距 */
      box-sizing: border-box;
    }
  
    .btns {
      /* 将对象作为弹性伸缩盒显示 */
      display: flex;
      /* 横轴方向上的对齐方式 */
      justify-content: flex-end;
    }
  </style>
  