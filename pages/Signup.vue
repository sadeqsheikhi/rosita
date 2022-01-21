<template>
  <div class='auth-holder'>
    <RozitaLogo></RozitaLogo>
    <p class='title'>
      حساب کاربریتو ایجاد کن
    </p>
    <validation-observer slim v-slot='{dirty, handleSubmit }'>
      <form @submit.prevent='handleSubmit(signup)'>
        <div class='input-group'>
          <SInput name='نام کاربری' placeholder='نام کاربری' :ltr='true'
                  type='text' rules='required|min:4|username'></SInput>

          <SInput name='رمزعبور' placeholder='رمزعبور'
                  type='password' rules='required:8|password_validator'></SInput>

          <SInput name='تکرار رمزعبور' placeholder='تکرار رمزعبور'
                  type='password' rules='required|password-mismatch:رمزعبور'></SInput>
        </div>
        <SBtn :disable='dirty' :loading='inSubmission'>
          ایجاد حساب
        </SBtn>
      </form>
    </validation-observer>
    <p>
      حساب کاربری داری؟
      <nuxt-link to='/login'>
        وارد شو
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'Signup',
  head: {
    title: 'روزیتا - ایجاد حساب کاربری'
  },
  data() {
    return {
      inSubmission: false,
    }
  },
  components: {
    ValidationObserver
  },
  methods: {
    signup() {
      // abort if loading
      if(this.inSubmission) return
      // setting loading state
      this.inSubmission = true
      try {
        // requesting to api
        // finish loading state
        // showing success message and redirect to index file
      } catch (e) {
        // showing error messages
        // finish loading state
      }
    }
  }
}
</script>

<style scoped>

</style>
