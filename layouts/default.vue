<template>
  <div class='layout-wrapper'>
    <Nuxt />
    <div class='app-info px-2'>
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
  background: url("assets/img/app-bg.jpg") no-repeat;
  background-position: bottom center;
  background-size: cover;
  min-height: 100vh;
  width: 100%;

  //display
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.app-info {
  position: absolute;
  bottom: 1rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

}
</style>
