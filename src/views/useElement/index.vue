<template>
  <div class="useElement">
      <h3>
          这是一个 element-ui
      </h3>
      <h4>
        使用 element-ui 按钮
      </h4>
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true
    }
  }
}
</script>

<style>

</style>
