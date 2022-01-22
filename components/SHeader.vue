<template>
  <header>
    <div class='user-date'>
      <p class='text-sm user-email'>
        {{ user.email || 'userEmail' }}
        <span class='logout' @click='logout'>
          <i class="fas fa-sign-out-alt ml-1"></i>
          خروج از حساب
        </span>
      </p>
      <p>
        {{ date }}
      </p>
    </div>

    <div class='done'>
      <div class='number' :class='{"success": $store.state.doneItems}'>
        {{ $store.state.doneItems }}
      </div>
      <p>
        کار انجام شده
      </p>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
  computed: {
    ...mapState(['user']),
  },
  mounted() {
    this.getCurrentDate()
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    getCurrentDate() {
      this.date = moment().locale('fa').format('dddd D MMMM YYYY')
    },
    logout() {
      this.setUserInfo({
        email: '',
        uid: '',
        authenticated: false,
      })
      this.$fire.auth.signOut()
      this.$router.push('/login')
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

.user-email {
  position: relative;
  .logout {
    display: none;
    padding: .5rem 1rem;
    position: absolute;
    top: 100%;
    left: 50%;
    border-radius: 3px;
    transform: translateX(-50%);
    background: $c-black;
  }

  &:hover {
    .logout {
      display: block;
    }
  }
}
</style>
