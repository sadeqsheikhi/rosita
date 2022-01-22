<template>
  <div class='add-item px-2'>
    <input type='text' placeholder='افزودن آیتم ...' v-model='title'
    @keypress.enter.prevent='adding'
    >
    <img v-if='!inSubmission' src='@/assets/img/logo.jpg' alt='لوگوی روزیتا' @click='adding'>
    <i v-else class="fas fa-lg fa-spinner fa-spin text-tertiary"></i>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'AddItem',
  data() {
    return {
      inSubmission: false,
      title: '',
    }
  },
  methods: {
    ...mapActions(['addItem', 'getItems']),
    async adding() {
      if (this.title === '' || this.title.length < 3) return
      if (this.inSubmission) return
      this.inSubmission = true

      try {
        // send req to api
        let res = await this.addItem(this.title)
        this.title = ''
        this.inSubmission = false
        this.getItems()
      } catch (e) {
        this.inSubmission = false
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.add-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: absolute;
  bottom: 1rem;
  width: 90%;
  background: white;
  border-radius: 3px;
  padding: 0;
  margin: 0;
  input {
    flex: 1;
    margin-top: 0 !important;
    &:focus {
      box-shadow: none;
    }
  }

  img {
    width: 35px;
  }
}
</style>
