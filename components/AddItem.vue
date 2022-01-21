<template>
  <div class='add-item px-2'>
    <input type='text' placeholder='افزودن آیتم ...' @keypress.enter='addItem'>
    <img src='@/assets/img/logo.jpg' alt='لوگوی روزیتا' @click='addItem'>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  data() {
    return {
      inSubmission: false,
    }
  },
  methods: {
    addItem() {
      if (this.inSubmission) return
      this.inSubmission = true
      try {
        // send req to api
        this.inSubmission = false
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
