<template>
  <div class='toggle-btn backdrop' @click='activateState'
  :class="{'active': $store.state.filterState === enName}">
    {{ name }}
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'ToggleBtn',
  data() {
    return {

    }
  },
  props: ['name', 'enName'],
  methods: {
    ...mapMutations(['setFilterState']),
    activateState() {
      // change the state in vuex store
      if (this.$store.state.filterState === this.enName) return
      this.setFilterState(this.enName)
      this.$store.dispatch('getItems')
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
