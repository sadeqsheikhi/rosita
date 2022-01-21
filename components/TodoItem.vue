<template>
<div class='todo-item backdrop mt-2 p-2' :class='{"active": active}' v-longpress='setActive'  @click='ActiveOff'>
  <div class='item-title'>
    <p class='text-xl' :class='{"line-through": item.done}'>
      {{ item.name }}
    </p>
    <p v-if='item.done' style='text-align: right'>
      انجام شده در ساعت
      {{ item.doneTime }}
    </p>
  </div>
  <div class='icon' @click.stop :class='{"disabled": item.done && !active}'>
    <i  v-if='item.done && !active' class="fas fa-check fa-2x text-success" @click='toggleDone'></i>
    <i  v-if='active' class="fas fa-times fa-2x text-danger" @click="deleteItem"></i>
  </div>
</div>
</template>

<script>
import moment from 'jalali-moment'
export default {
  name: 'TodoItem',
  data() {
    return {
      active: true,
    }
  },
  props: [
    'item'
  ],
  methods: {
    toggleDone() {
      let now = moment().format('h:mm')
    },
    setActive() {
      this.active = true
    },
    ActiveOff() {
      this.active = false
    },
    deleteItem() {

    }
  }
}
</script>

<style scoped lang='scss'>
.todo-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .icon {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease .3s;
    &.disabled {
      background: lightgray;
    }
  }
}
</style>
