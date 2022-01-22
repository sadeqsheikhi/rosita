<template>
  <button class='primary-btn' type='submit' :disabled='loading'
  :class="{'disabled': loading, 'success': success}" >
    <slot v-if='!loading'></slot>
    <i v-else class="fas fa-spinner fa-spin"></i>
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: ['loading', 'success']
}
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";

.primary-btn {
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  color: white;
  background: $gr-primary;
  margin: 0;
  border-radius: 3px;
  outline: none;
  border: none;
  width: 100%;

  &.success {
    background: $c-success !important;
  }

  &.disabled {
  cursor: not-allowed;
}
}
</style>
