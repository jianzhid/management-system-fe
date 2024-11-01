<template>
  <div class="bottom-nav">
    <router-link to="/home">
      <i class="log_change state_psd"></i>
      <span>主页</span>
    </router-link>
    <router-link to="/search">
      <i class="log_change state_psd2"></i>
      <span>业务录入</span>
    </router-link>
    <router-link to="/profile">

    
      <i class="log_change state_psd3"></i>

      <span>飞手招录</span>
    </router-link>
    <router-link to="/settings">
      <i class="log_change state_psd1"></i>
      <span>个人中心</span>
    </router-link>
  </div>
</template>

<style scoped>
.log_change{
  display: inline-block;
  width: 32px;
  height: 32px;
  
}
/* .state_psd{
  background:url(../assets/home.png) no-repeat center;
}
.state_psd1{
  background:url(../assets/user.png) no-repeat center;
}
.state_psd2{
  background:url(../assets/juminliebiao.png) no-repeat center;
}.state_psd3{
  background:url(../assets/wuj.png) no-repeat center;
} */





a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
.bottom-nav {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(18, 197, 143, 0.1);
}
.bottom-nav router-link {
  flex: 1;
  text-align: center;
  padding: 5px 0;
}
.bottom-nav img {
  width: 56px;
  height: 48px;
}
.bottom-nav span {
  display: block;
  font-size: 15px;
  
  
}
</style>