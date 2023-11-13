import { Button } from 'antd'
import React from 'react'
import { IoArrowBack } from 'react-icons/io5'

import { Text } from '@/components/Text'

type BackButtonProps = {
  onClick: () => void
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <Button
      size="large"
      block
      type="text"
      className="flex items-center justify-center  mt-5 mb-3"
      onClick={onClick}
    >
      <IoArrowBack size={32} />
      <Text className="font-sf text-base font-medium ml-3">Voltar</Text>
    </Button>
  )
}
