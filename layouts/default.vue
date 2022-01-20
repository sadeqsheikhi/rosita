<template>
  <div class='layout-wrapper'>
    <Nuxt/>
    <div class='app-info'>
      <p>
        روزیتا
      </p>
      <p>
        ورژن 1.0
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'default'
}
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";
.layout-wrapper {
  background: $c-tertiary;
  background: url("../assets/img/app-bg.jpg") no-repeat;
  background-position: bottom center;
  background-size: cover;
}
</style>
