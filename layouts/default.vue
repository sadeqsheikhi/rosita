<template>
  <div class='layout-wrapper' :style="{'height': height}">
    <Nuxt />
    <div class='app-info px-2' v-if='$route.path !== "/"'>
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
import {mapMutations} from 'vuex'
export default {
  name: 'default',
  data() {
    return {
      height: '100vh',
    }
  },
  methods: {
    ...mapMutations({
      setAuthentication: 'setAuthentication',
      setUserInfo: 'setUserInfo',
    })
  },
  mounted() {
    this.height = window.innerHeight + 'px'
    window.addEventListener('resize', () => {
      this.height = window.innerHeight + 'px'
    })

    this.$fire.auth.onAuthStateChanged( async (user) => {
      await this.setAuthentication(user)
      if (this.$store.state.user.authenticated) {
        await this.$router.push('/')
      } else {
        if (this.$route.path === '/') {
          await this.$router.push('/login')
        }
      }
      }
    )
  }
}
</script>

<style lang='scss'>
@import "assets/scss/variables";
.layout-wrapper {
  background: $c-tertiary;
  background: url("assets/img/app-bg.jpg") no-repeat;
  background-position: bottom center;
  background-size: cover;
  min-height: 90vh;
  width: 100%;

  overflow-y: auto;
  overflow-x: hidden;

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
