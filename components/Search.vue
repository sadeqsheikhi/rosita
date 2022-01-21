<template>
<div class='backdrop' :class="{'open': search}">
  <input type='text' placeholder='جستجو کنید ...' v-model='searchText' @keypress.enter="performSearch">
  <i v-if='!search' class='fa fa-search' @click='toggleSearch'></i>
  <i v-else class='fa fa-times' @click='toggleSearch'></i>
</div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      search: false,
      searchText: '',
    }
  },
  methods: {
    toggleSearch() {
      this.search = !this.search
    },
    performSearch() {
      try {

      } catch (e) {

      }
    }
  }
}
</script>

<style scoped lang='scss'>
.backdrop {
  padding: 1rem .75rem;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 13%;
  transition: all ease .6s;


  i {
    font-size: 1.2rem;
  }
  input {
    transition: all ease .6s;
    max-width: 0;
    background:transparent;
    color: white !important;
    padding: 0;
    &::placeholder {
      color: white;
    }

    &:focus {
      box-shadow: none;
    }
  }
  &.open {
    width: 100%;
    input {
      max-width: 100%;
    }
  }
}
</style>
