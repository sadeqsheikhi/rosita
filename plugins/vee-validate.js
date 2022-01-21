import { extend, setInteractionMode } from 'vee-validate'
import {
  alpha_dash,
  confirmed,
  email,
  max,
  max_value as maxValue,
  min,
  min_value as minValue,
  required,
  length,
  integer, alpha_spaces
} from 'vee-validate/dist/rules'


import {
  isShebaValid, verifyCardNumber, verifyIranianNationalId, phoneNumberValidator,
} from '@persian-tools/persian-tools'

const moment = require('jalali-moment')
moment().locale('fa').format('YYYY/M/D')


// setting styles and components
setInteractionMode('eager')


extend('required', {
  ...required,
  message: '{_field_} نمی تواند خالی باشد'
})

extend('tos', {
  ...required,
  message: 'با قوانین و شرایط استفاده موافقت کنید'
})

extend('alpha_Spaces', {
  ...alpha_spaces,
  message: '{_field_} فقط می تواند حروف و فاصله باشد'
})

extend('alpha_dashes', {
  ...alpha_dash,
  message: '{_field_} فقط حروف انگلیسی و _ را می پذیرد'
})

extend('integer', {
  ...integer,
  message: 'فقط مقادیر عددی مجاز است'
})

extend('email', {
  ...email,
  message: 'ایمیل معتبر نیست',
})

// minimum length of character inputs
extend('min', {
  ...min,
  message: 'تعداد کاراکتر کمتر از حد مجاز',
})

// min for length but saying to user how much
extend('min_with_number', {
  ...min,
  message: 'تعداد کاراکتر نمی تواند کمتر از  {min}  باشد',
})

extend('max', {
  ...max,
  message: 'تعداد کاراکتر بیشتر از حد مجاز',
})
extend('max_with_number', {
  ...max,
  message: 'تعداد کاراکتر نمی تواند بیش از {max} باشد',
})

extend('min_value', {
  ...minValue,
  params: ['min'],
  message:  'مقدار {_field_} کمتر از حد مجاز است',
})

extend('min_value_number', {
  ...minValue,
  params: ['min'],
  message: 'نمی تواند کمتر از {min} باشد',
})


extend('max_value', {
  ...maxValue,
  params: ['max'],
  message:  'مقدار {_field_} بیشتر از حد مجاز است',
})

extend('max_value_number', {
  ...maxValue,
  params: ['max'],
  message: 'نمی تواند بیش تر از {max} باشد',
})

extend('password_mismatch', {
  ...confirmed,
  message: 'تکرار رمزعبور با اصل آن مطابقت ندارد',
})

extend('password_validator', {
  validate(value) {
    // base regex = checks for 1 lowercase, 1 uppercase, 1 number, 1 special character
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    // the following doesn't enforce special chars
    let strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
    return strongRegex.test(value)
  },
  message: 'رمزعبور شما باید شامل حداقل یک حرف بزرگ، یک حرف کوچک و یک عدد باشد',
})

extend('length_number', {
  ...length,
  message: '{_field_} دقیقا {length} رقم است',
})
extend('length_letter', {
  ...length,
  message: '{_field_} دقیقا {length} کاراکتر است',
})

extend('min_age', {
  validate(value, {min_age}) {
    const userBirthGeorgian = moment.from(value, 'fa', 'YYYY/MM/DD')

    // get the current date
    let minDate = new moment()
    minDate = minDate.subtract(min_age, 'year')
    return minDate > userBirthGeorgian
  },
  params: ['min_age'],
  message: 'سن شما نمی تواند کمتر از {min_age} سال باشد'
})

extend('min_age', {
  validate(value) {
    const birthDate = moment.from(value, 'fa', 'YYYY/MM/DD')
    return birthDate.isValid()
  },
  message: 'لطفا' + '{_field_}' + 'را به فرمت درست وارد کنید'
})

extend('nationalId', {
  validate(value) {
    return verifyIranianNationalId(value.toString())
  },
  message: 'کدملی واردشده نادرست است',
})

// rule for sheba
extend('sheba', (value) => {
  if (isShebaValid('IR' + value)) {
    return true
  }
  return  'شماره شبای وارد شده نادرست است'
})

// rule for credit card
extend('creditCard', (value) => {
  if(verifyCardNumber(Number(value))){
    return true
  }

  return 'شماره کارت شما نادرست است'
})

// iranian phone number
extend('phoneNumber', (value) => {
  if (phoneNumberValidator(value.toString())) {
    return true
  }

  return 'شماره تلفن شما نادرست است'
})

// username validator
extend('username', (value) => {
  let usernameRegex = new RegExp('^[A-Za-z][A-Za-z0-9_]{7,29}$')
  if (usernameRegex.test(value)) {
    return true
  }

  return 'نام کاربری می تواند حروف انگلیسی، اعداد و _ را قبول کند'
})



