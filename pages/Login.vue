<template>
  <div class='auth-holder'>
    <RozitaLogo></RozitaLogo>
    <p class='title'>
      وارد حساب کاربریت شو
    </p>
    <validation-observer slim v-slot='{dirty, handleSubmit }'>
      <form @submit.prevent='handleSubmit(login)'>
        <div class='input-group'>
          <SInput name='نام کاربری' placeholder='نام کاربری' :ltr='true'
                  type='text' rules='required|min:4|username'></SInput>

          <SInput name='رمزعبور' placeholder='رمزعبور'
                  type='password' rules='required|password_validator'></SInput>
        </div>
        <SBtn :disable='dirty' :loading='inSubmission'>
          ورود
        </SBtn>
      </form>
    </validation-observer>
    <p>
      حساب کاربری نداری؟
      <nuxt-link to='/signup'>
        ثبت نام کن
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'Login',
  data() {
    return {
      inSubmission: false,
    }
  },
  head: {
    title: 'روزیتا - ورود به حساب کاربری',
  },
  components: {
    ValidationObserver
  },
  methods: {
    login() {
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

<style lang='scss'>
@import "assets/scss/variables";

.auth-holder {
  width: 90%;
  border-radius: 3px;
  //background: rgba($c-tertiary, .3);
  /* Note: currently only Safari supports backdrop-filter */
  backdrop-filter: blur(30px) brightness(0.85) opacity(1);
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.input-group {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

form, span {
  display: block;
  width: 100%;
}
</style>
