<template>
  <div class="login">
    <div class="login-warp">
      <!-- logo 区域 -->
      <div class="loginlogo">
          <img src="./logo_index.png" alt="">
      </div>
      <!-- 登录页面 -->
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
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
          <el-button class="loginBtn" type="primary" @click="login">登录</el-button>
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
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '长度必须为11位', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度必须为6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('通过')
        } else {
          console.log('不通过')
        }
      })
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
