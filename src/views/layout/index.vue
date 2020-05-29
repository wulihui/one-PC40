<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <layoutasider />
      </el-aside>
      <el-container>
        <el-header>
          <layoutheader />
        </el-header>
        <el-main>
          <!-- 将来请求 home,index,publish...路径是,优先加载layout -->
          <!-- 加载完layout之后再用home,index,publish组件替换layout中的router-view -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入两个组件
import layoutheader from './components/layoutHeader'
import layoutasider from './components/layoutAsider'

export default {
  components: {
    layoutheader,
    layoutasider
  }
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
  &>.el-container {
    height: 100%;
  }
}
.el-aside {
  background-color: #323745;
  color: #333;
}
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
}
.el-main {
  background-color: #ddd;
  color: #333;
}
</style>
