<template>
  <div class="login">
    <div class="login-warp">
      <!-- logo 区域 -->
      <div class="loginlogo">
          <img src="./logo_index.png" alt="">
      </div>
      <!-- 登录页面 -->
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
              <el-col :span="14">
                  <el-input v-model="form.code" placeholder="请输入密码"></el-input>
              </el-col>
              <el-col :span="8">
                  <el-button>获取验证码</el-button>
              </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    .login-warp {
        background-color: #fff;
        padding: 30px;
        min-width: 300px;
        .loginlogo {
            text-align: center;
            img {
                width: 150px;
                margin-bottom: 20px;
            }
        }
        .loginBtn {
            width: 100%;
        }
    }
}
</style>
