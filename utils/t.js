// glossory file
const translations = {
  'farvardin': 'فرودین',
  'ordibehesht': 'اردیبهشت',
  'khordad': 'خرداد',
  'tir': 'تیر',
  'mordad': 'مرداد',
  'shahrivar': 'شهریور',
  'mehr': 'مهر',
  'aban': 'آبان',
  'azar': 'آذر',
  'dey': 'دی',
  'bahman': 'بهمن',
  'esfand': 'اسفند',

  'sunday':'یکشنبه',
  'monday':'دوشنبه',
  'tuesday':'سه شنبه',
  'wednesday':'چهارشنبه',
  'thursday':'پنج شنبه',
  'friday':'جمعه',
  'saturday':'شنبه',
}

export default function (value) {
  try {
    return translations[value.toLowerCase()]
  } catch {
    return value
  }
}
