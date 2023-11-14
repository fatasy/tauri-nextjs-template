import { Button, Typography } from 'antd'
import { IoArrowBack } from 'react-icons/io5'

type BackButtonProps = {
  onClick: () => void
}

export function SidebarBackButton({ onClick }: BackButtonProps) {
  return (
    <Button
      size="large"
      block
      type="text"
      className="flex items-center justify-center mt-5 mb-3 !h-12"
      onClick={onClick}
    >
      <IoArrowBack size={32} />
      <Typography.Text strong className="font-sf text-base font-medium ml-3">
        Voltar
      </Typography.Text>
    </Button>
  )
}
