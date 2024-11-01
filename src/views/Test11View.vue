<template>
  <el-container>
    <!-- 页面内容 -->
    <el-main>Main Content</el-main>
    <!-- 固定在底部的导航栏 -->
    <el-footer height="100px">
      <el-row type="flex" justify="center">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
        >
        <el-col :span="6" >
          <el-menu-item index="1">
             <i class="el-icon-user-solid my-icon"></i>
            主页</el-menu-item>
        </el-col>
        <el-col :span="6">
          <i class="el-icon-user-solid my-icon"></i>
          <el-menu-item index="1">业务录入</el-menu-item>
        </el-col>
        <el-col :span="6">
          <i class="el-icon-user-solid my-icon"></i>
          <el-menu-item index="1">飞手招录</el-menu-item>
        </el-col>
        <el-col :span="6">
          <i class="el-icon-user-solid my-icon"></i>
          <el-menu-item index="1">个人中心</el-menu-item>
        </el-col>
        
        </el-menu>
      </el-row>
    </el-footer>
  </el-container>
</template>
   
  <style scoped>
.el-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 10px;
  height:200px !important;
  background-color: #B3C0D1;
}

.el-menu-demo {
  width: 100%;
}

.my-icon {
  color: #409EFF;
  font-size: 24px;
}

/* 在全局样式文件中添加以下规则 */
.el-menu-item {
  font-size: 16px; /* 设置你想要的字体大小 */
}
</style>