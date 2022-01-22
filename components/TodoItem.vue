<template>
  <div class='todo-item backdrop mt-2 p-2' :class='{"active": active}' v-longpress='setActive' @click='ActiveOff'>
    <div class='item-title'>
      <p class='text-xl' :class='{"line-through": item.done}' style='text-align: right'>
        {{ item.name }}
      </p>
      <p v-if='item.done' style='text-align: right'>
        انجام شده در ساعت
        {{ item.doneTime }}
      </p>
    </div>
    <div v-if='!active' class='icon' @click.stop :class='{"disabled": item.done && !active}' @click='toggleDone'>
      <i v-if='inSubmission' class="fas fa-spinner fa-spin text-tertiary"></i>
      <i v-if='item.done && !active && !inSubmission' class='fas fa-check fa-2x text-success'></i>
    </div>

    <div v-if='active' class='icon' @click.stop :class='{"disabled": item.done && !active}' @click='deleteItem'>
      <i v-if='inSubmission' class="fas fa-spinner fa-spin text-tertiary"></i>
      <i v-else class='fas fa-times fa-2x text-danger' @click='deleteItem'></i>
    </div>
  </div>
</template>

<script>
import moment from 'jalali-moment'

export default {
  name: 'TodoItem',
  data() {
    return {
      inSubmission: false,
      active: false
    }
  },
  props: [
    'item'
  ],
  methods: {
    async toggleDone() {
      if (this.inSubmission) return

      let now = moment().format('h:mm')
      this.inSubmission = true

      let tempDone = !this.item.done
      if (tempDone) {
        await this.$store.dispatch('update', {
          id: this.item.id,
          done: tempDone,
          doneTime: now
        })
      } else {
        await this.$store.dispatch('update', {
          id: this.item.id,
          done: tempDone,
          doneTime: ''
        })
      }

      await this.$store.dispatch('getItems')
      this.inSubmission = false
    },
    setActive() {
      this.active = true
    },
    ActiveOff() {
      this.active = false
    },

    async deleteItem() {
      if (this.inSubmission) return
      this.inSubmission = true

      await this.$store.dispatch('delete', this.item.id)

      this.inSubmission = false
      await this.$store.dispatch('getItems')
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
