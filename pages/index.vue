<template>
  <main>
    <s-header></s-header>
    <div class='tool-bar' v-if='items[0]'>
      <toggle-btn name='همه' en-name='all'></toggle-btn>
      <toggle-btn name='تکمیل شده' en-name='done'></toggle-btn>
      <toggle-btn name='مانده' en-name='notDone'></toggle-btn>
      <search></search>
    </div>

    <div class='no-item' v-if='items.length === 0 || $store.state.searchFailed'>
      <i class='fa fa-4x fa-exclamation-circle'></i>
      <h3 class=''>آیتمی وجود ندارد</h3>
    </div>

    <div class='item-list' v-if='$store.state.searchItems.length === 0 && !$store.state.searchFailed'>
      <todo-item v-for='item in items' :key='item.id' :item='item'></todo-item>
    </div>

    <div class='item-list' v-if='$store.state.searchItems[0]'>
      <todo-item v-for='item in searchItems' :key='item.id' :item='item'></todo-item>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  layout: 'main',
  data() {
    return {}
  },
  computed: {
    ...mapState(['items', 'searchItems'])
  },
  async middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.user.authenticated) {
      return redirect('/login')
    }
  },
  methods: {
  },
  async mounted() {
    await this.$store.dispatch('getItems')
  },

}
</script>

<style lang='scss'>
main {
  width: 90%;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;
  position: relative;
}

.tool-bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1rem;
  align-items: center;
  column-gap: 10px;
}

.no-item {
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-row-gap: 1rem;
}

.item-list {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
</style>
