<template>
<div class='login'>
  <RozitaLogo></RozitaLogo>
  <p>
    وارد حساب کاربریت شو
  </p>
  <div class='input-group'>
    <SInput></SInput>
    <SInput></SInput>
   </div>
  <SBtn>
    تکرار رمزعبور
  </SBtn>

  <p>
    حساب کاربری نداری؟
    <nuxt-link to='/signup'>
      ثبت نام کن
    </nuxt-link>
  </p>
</div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

</style>
