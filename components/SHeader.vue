<template>
  <header>
    <div class='user-date'>
      <p>
        {{ username }}
      </p>
      <p>
        {{ date }}
      </p>
    </div>

    <div class='done'>
      <div class='number' :class='{"success": doneJobs}'>
        {{ doneJobs }}
      </div>
      <p>
        کار انجام شده
      </p>
    </div>
  </header>
</template>

<script>
const moment = require('jalali-moment')

export default {
  name: 'SHeader',
  data() {
    return {
      username: 'sadeqSheikhi',
      date: '',
      doneJobs: '5',
    }
  },
  mounted() {
    this.getCurrentDate()
  },
  methods: {
    getCurrentDate() {
      this.date = moment().locale('fa').format('dddd D MMMM YYYY')
    }
  }
}
</script>

<style scoped lang='scss'>
@import "assets/scss/variables";
header {
  background: $gr-primary;
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-date {
    p {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: right;
    }
  }

  .done {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .number {
      width: 40px;
      height: 40px;
      border-radius: 500px;
      margin-bottom: 0.5rem;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $c-text;
      font-weight: bold;
      &.success {
        color: $c-success-dark !important;
      }
    }
  }
}
</style>
