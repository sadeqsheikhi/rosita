<template>
  <div class='auth-holder'>
    <RozitaLogo></RozitaLogo>
    <p class='title'>
      وارد حساب کاربریت شو
    </p>
    <validation-observer slim v-slot='{dirty, handleSubmit }'>
      <form @submit.prevent='handleSubmit(login)'>
        <div class='input-group'>
          <SInput name='ایمیل' placeholder='ایمیل' :ltr='true' v-model='email'
                  type='text' rules='required|email'></SInput>

          <SInput name='رمزعبور' placeholder='رمزعبور' v-model='password'
                  type='password' rules='required'></SInput>
        </div>
        <SBtn :loading='inSubmission' :success='success'>
          {{ btnText }}
        </SBtn>
        <p class='input-error' v-if='serverError'>
          {{ serverError }}
        </p>
      </form>

    </validation-observer>
    <p class='mt-1'>
      حساب کاربری نداری؟
      <nuxt-link to='/signup'>
        ثبت نام کن
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      inSubmission: false,
      btnText: 'ورود',
      success: false,
      email: '',
      password: '',
      serverError: ''
    }
  },

  head: {
    title: 'روزیتا - ورود به حساب کاربری'
  },
  async middleware({ store, redirect }) {
      if (store.state.user.authenticated) {
        return redirect('/')
      }
  },
  components: {
    ValidationObserver
  },
  methods: {
    ...mapMutations({ setUserInfo: 'setUserInfo' }),
    async login() {
      // abort if loading
      if (this.inSubmission) return
      // setting loading state
      this.inSubmission = true
      try {
        // requesting to api
        const req = await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)

        // setting user-email
        this.setUserInfo({
          email: req.user.email,
          uid: req.user.uid,
          authenticated: true,
        })

        // finish loading state
        this.inSubmission = false
        this.btnText = 'ورود موفق'
        this.success = true
        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      } catch (e) {
        this.inSubmission = false
        // this.serverError = e.message
        this.serverError = 'ایمیل یا رمزعبور اشتباه است'
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
