import { DEFAULT_CURRENCY } from '@/constants/Intl.contents'
import { InputNumber, InputNumberProps } from 'antd'
import { currencyFormatter, currencyParser } from './MoneyInput.utils'

type MoneyInputProps<T extends number> = InputNumberProps<T>

export function MoneyInput<T extends number>(props: MoneyInputProps<T>) {
  return (
    <InputNumber
      formatter={currencyFormatter(DEFAULT_CURRENCY)}
      parser={currencyParser}
      {...props}
    />
  )
}
