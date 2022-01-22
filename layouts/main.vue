<template>
  <div class='layout-wrapper' :style="{'height': height}">
    <Nuxt />
    <add-item></add-item>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'main.vue',
  data() {
    return {
      height: '100vh'
    }
  },
  methods: {
    ...mapMutations(['setAuthentication'])
  },
  mounted() {
    this.height = window.innerHeight + 'px'

    window.addEventListener('resize', () => {
      this.height = window.innerHeight + 'px'
    })

    this.$fire.auth.onAuthStateChanged( user => {
        this.setAuthentication(user)
      }
    )
  }
}
</script>

<style scoped lang='scss'>
img {
  width: 50px;
}
</style>
