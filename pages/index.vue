<template>
  <main>
    <s-header></s-header>
    <div class='tool-bar' v-if='!noData'>
      <toggle-btn name='همه'></toggle-btn>
      <toggle-btn name='تکمیل شده'></toggle-btn>
      <toggle-btn name='مانده'></toggle-btn>
      <search></search>
    </div>

    <div class='no-item' v-if='noData'>
      <i class='fa fa-4x fa-exclamation-circle'></i>
      <h3 class=''>آیتمی وجود ندارد</h3>
    </div>

    <div class='item-list'>
      <todo-item v-for='item in items' :key='item.id' :item='item'></todo-item>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'main',
  data() {
    return {
      noData: false,
      items: [
        {
          id: '1',
          name: 'بیدار شدن از خواب',
          done: true,
          doneTime: '12:34',
        }
      ],
    }
  }
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
  justify-content:flex-start;
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
  justify-content: start;
  flex-direction: column;
  align-items: center;
}
</style>
