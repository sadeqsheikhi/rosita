<template>
  <div class='toggle-btn backdrop' @click='activateState'
  :class="{'active': state === 'on'}">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'ToggleBtn',
  data() {
    return {
      state: 'off'
    }
  },
  props: ['name'],
  emits: ['filter'],
  methods: {
    activateState() {
      // change the state in vuex store
      this.state = 'on'
    }
  }
}
</script>

<style scoped lang='scss'>
.toggle-btn {
  justify-content: center;
  display: flex;
  align-items: center;
  padding: .75rem .75rem;
}
</style>
