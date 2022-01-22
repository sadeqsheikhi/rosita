<template>
  <div class='auth-holder'>
    <RozitaLogo></RozitaLogo>
    <p class='title'>
      حساب کاربریتو ایجاد کن
    </p>
    <validation-observer slim v-slot='{}'>
      <form @submit.prevent='signup'>
        <div class='input-group'>
          <SInput name='ایمیل' placeholder='ایمیل' :ltr='true' v-model='email'
                  type='text' rules='required|email'></SInput>

          <SInput name='رمزعبور' placeholder='رمزعبور' vid='password' v-model='password'
                  type='password' rules='required|min_with_number:8|password_validator'></SInput>

          <SInput name='تکراررمزعبور' placeholder='تکرار رمزعبور' v-model='confirmPassword'
                  type='password' rules='password_mismatch:password'></SInput>
        </div>
        <SBtn :loading='inSubmission' :success='success'>
          {{ btnText }}
        </SBtn>
      </form>
      <p class='input-error' v-if='serverError'>
        {{ serverError }}
      </p>
    </validation-observer>
    <p class='mt-1'>
      حساب کاربری داری؟
      <nuxt-link to='/login'>
        وارد شو
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { mapMutations } from 'vuex'

export default {
  name: 'Signup',
  head: {
    title: 'روزیتا - ایجاد حساب کاربری'
  },
  data() {
    return {
      inSubmission: false,
      serverError: '',
      success: false,
      btnText: 'ایجاد حساب کاربری',

      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  async middleware({ store, redirect }) {
    // If the user is not authenticated
     if (store.state.user.authenticated) {
       return redirect('/')
     }
  },
  components: {
    ValidationObserver
  },
  methods: {
    ...mapMutations({setUserInfo: 'setUserInfo'}),
    async signup() {
      // abort if loading
      if(this.inSubmission) return
      // setting loading state
      this.inSubmission = true
      this.serverError = ''
      try {
        // requesting to api
        let userCred = await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
        this.setUserInfo({
          email: userCred.user.email,
          uid: userCred.user.uid,
          authenticated: true,
        })
        // finish loading state
        this.inSubmission = false
        this.success = true
        this.btnText = 'با موفقیت ایجاد شد'

        setTimeout(() => {
          // redirect to index
          this.$router.push('/')
        }, 1000)
      } catch (e) {
        // showing error messages
        this.inSubmission = false
        console.log(e)
        this.serverError = 'ایمیلی که وارد کرده اید، قبلا ثبت شده است'
      }
    }
  }
}
</script>

<style scoped>

</style>
