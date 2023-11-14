import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from '@/constants/Intl.contents'

export const currencyFormatter =
  (selectedCurrOpt: string) => (value: number | undefined) => {
    return new Intl.NumberFormat(DEFAULT_LOCALE, {
      style: 'currency',
      currency: selectedCurrOpt || DEFAULT_CURRENCY,
    }).format(value ?? 0)
  }

export const currencyParser = <T>(val: string | undefined): T => {
  try {
    if (!val) return 0 as T
    // for when the input gets clears
    if (typeof val === 'string' && !val.length) {
      val = '0.0'
    }

    // detecting and parsing between comma and dot
    const group = new Intl.NumberFormat(DEFAULT_LOCALE)
      .format(1111)
      .replace(/1/g, '')
    const decimal = new Intl.NumberFormat(DEFAULT_LOCALE)
      .format(1.1)
      .replace(/1/g, '')
    let reversedVal = val.replace(new RegExp(`\\${group}`, 'g'), '')
    reversedVal = reversedVal.replace(new RegExp(`\\${decimal}`, 'g'), '.')
    //  => 1232.21 €

    // removing everything except the digits and dot
    const onlyNumbers = parseFloat(reversedVal.replace(/[^0-9.]/g, ''))
    //  => 1232.21

    // appending digits properly
    const digitsAfterDecimalCount = (reversedVal.split('.')[1] || []).length
    const needsDigitsAppended = digitsAfterDecimalCount > 2

    const value = needsDigitsAppended
      ? onlyNumbers * Math.pow(10, digitsAfterDecimalCount - 2)
      : onlyNumbers

    return (Number.isNaN(value) ? 0 : value) as T
  } catch (error) {
    return 0 as T
  }
}
