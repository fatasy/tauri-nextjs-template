import { Flex, Typography } from 'antd'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { useState } from 'react'
dayjs.locale(ptBr)
export function Time() {
  const [clock, setClock] = useState(dayjs().format('HH:mm:ss'))
  setInterval(() => {
    setClock(dayjs().format('HH:mm:ss'))
  }, 100)

  return (
    <Flex vertical>
      <Typography.Text className=" !text-8xl  text-center !text-white !mb-1">
        {clock}
      </Typography.Text>
      <Typography.Text className="!text-white  !text-2xl text-center">
        {dayjs().format('dddd, D MMM YYYY')}
      </Typography.Text>
    </Flex>
  )
}
