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
            <!-- <div class="myitem">
                <el-input v-model="form.code" placeholder="请输入密码"></el-input>
                <el-button class="itembtn">获取验证码</el-button>
            </div> -->
          <el-row>
              <el-col :span="14">
                  <el-input v-model="form.code" placeholder="请输入密码"></el-input>
              </el-col>
              <el-col :span="8" :offset="2">
                  <el-button class="colbtn">获取验证码</el-button>
              </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary" @click="login" :loading="loginLoading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        mobile: '',
        code: ''
      },
      loginLoading: false,
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
    // 用户的登录
    login () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submitData()
        } else {
          console.log('不通过')
        }
      })
    },
    // 数据的提交
    submitData () {
      // 将加载状态设置为true
      this.loginLoading = true
      // 发送请求到服务器
      axios({
        url: 'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
        method: 'post',
        data: this.form
      }).then(res => {
        // res 中有一个属性叫做data,在data 中有两个属性后面我们会用上: token , refresh_token
        // 只要进入到这个方法中说明登录成功
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        // 将加载状态设置为false
        this.loginLoading = false
        // 跳转到主页
        this.$router.push('/')
      }).catch(err => {
        this.$message.error('手机号码或者验证码错误')
        console.log(err)
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
        .myitem {
            display: flex;
            justify-content: center;
            .itembtn {
                margin-left: 20px;
            }
        }
        .colbtn {
            width: 100%;
        }
    }
}
</style>
