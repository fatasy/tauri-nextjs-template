import { Button } from 'antd'
import { FaChevronLeft } from 'react-icons/fa6'

type HeaderBackButtonProps = {
  onClick?: () => void
}

export function HeaderBackButton({ onClick }: HeaderBackButtonProps) {
  return (
    <Button
      size="large"
      type="text"
      className="flex items-center justify-center mb-3 !h-auto"
      onClick={onClick}
    >
      <FaChevronLeft size={32} />
    </Button>
  )
}
