<template>
  <validation-provider :mode='mode'  :rules='rules' v-slot='{ errors }'>
    <label class='hide' for='input-username'>
      نام کاربری
    </label>
    <input :type='type' :placeholder='placeholder' :name='name'
           id='input-username' v-model='value' :class="{'ltr': ltr}" >
    <p class='input-error' v-if='errors[0]'>
      {{ errors[0] }}
    </p>
  </validation-provider>
</template>

<script>
import {ValidationProvider} from 'vee-validate'
export default {
  name: 'SInput.vue',
  data() {
    return {
      value: ''
    }
  },
  props: {
    type: {
      default: 'text'
    },
    name: {
      required: true
    },
    rules: {},
    placeholder: {
      default: 'وارد کنید ...'
    },
    ltr : {
      default: false,
    },
    mode: {
      default: 'eager',
    }
  },
  components: {
    ValidationProvider,
  }
}
</script>

<style lang='scss'>
@import "assets/scss/variables";

span {
  width: 100%;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  display: none;
  margin: 0;
}

input, textarea {
  background: white;
  padding: 1rem 1rem;
  border-radius: 3px;
  border: none;
  width: 100% !important;
  margin-top: 1rem;
  color: $c-text;

  &.ltr {
    text-align: right;
  }

  &:first-child {
    margin-top: 0;
  }

  &:focus {
    background: white;
    color: $c-text;
    outline: none !important;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .3);
  }
}

  .input-error {
    color: white;
    font-weight: 300;
    background: $c-danger;
    margin-top: .4rem;
    border-radius: 4px;
    padding: .3rem 1rem;
    text-align: right;

    i {
      margin-left: 0.5rem;
    }
  }
</style>
