<template>
  <div class='layout-wrapper' :style="{'height': height}">
    <Nuxt />
    <add-item></add-item>
  </div>
</template>

<script>
export default {
  name: 'main.vue',
  data() {
    return {
      height: '100vh'
    }
  },
  mounted() {
    this.height = window.innerHeight + 'px'
    window.addEventListener('resize', () => {
      this.height = window.innerHeight + 'px'
    })
  }
}
</script>

<style scoped lang='scss'>
img {
  width: 50px;
}
</style>
