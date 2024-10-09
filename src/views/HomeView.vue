<template>
    <div>
    <el-container style="height: 100vh;">
            <el-aside width="20%">
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-goods"></i>
                            <span>业务选择</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/1-1">
                                <i class="el-icon-set-up"></i>
                                专业共建
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <i class="el-icon-edit"></i>
                                飞手培训
                            </el-menu-item>
                            <el-menu-item index="/1-3">
                                <i class="el-icon-notebook-1"></i>
                                业务承接
                            </el-menu-item>
                            <el-menu-item index="/1-4">
                                <i class="el-icon-shopping-cart-full"></i>
                                设备购买
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <template slot="title">
                            <i class="el-icon-folder"></i>
                            <span>资料</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-chat-square"></i>
                        <span slot="title">业务对接</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-monitor"></i>
                        <span slot="title"> 后台</span>
                    </el-menu-item>
                </el-menu>  
            </el-aside>
            <el-container>
             
            <el-header style="text-align: right; font-size: 12px">
              <el-dropdown>
                <i class="el-icon-user" style="margin-right: 15px;font-size: 20px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <el-button type="text" @click="open">Log out</el-button>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <span>{{ userInfo.user_id }}</span>
            </el-header>
            <el-main>
                <router-view></router-view>
                
            </el-main>
          </el-container>
        </el-container>
        <!--<child-component :parentValue="parentValue"></child-component>-->
    </div>
</template>

<script>
//import ChildComponent from './DataView.vue';

 import axios from 'axios';

export default {
  //components: {
      //ChildComponent
    //},
    data() {
    return {
      parentValue: 'lalala',
      activeIndex: this.$route.path,
      userInfo: null,
    }
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    fetchUserInfo() {
        axios.get('http://localhost:5000/me').then(response => {
          this.userInfo = response.data;
        }).catch(error => {
          console.error('Error fetching user info:', error);
          this.$router.push("/login");
        });
      },
      logout() {
        axios.get('http://localhost:5000/logout').then(() => {
          this.userInfo = null;
          this.$router.push("/login");
        });
      },
      open() {
        this.$confirm('确认登出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.logout();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }
    },
    created() {
      this.fetchUserInfo();
    }
}
</script>

<style scoped>
    .el-header, .el-footer {
        background-color:#dce5ee;
        color: #333;
        text-align: center;
        line-height: 80px;
        font-size: 40px;
    }
    
    .el-aside {
        background-color: #545c64;
        color: #333;
        text-align: left;
        line-height: 200px;
        
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        /* text-align: center;
        line-height: 160px; */
    }
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    font-size: 18px !important;
  }





    
</style>