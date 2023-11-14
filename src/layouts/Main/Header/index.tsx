import { Flex, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { HeaderBackButton } from './components/HeaderBackButton'

type HeaderLayoutProps = {
  title?: string
  children?: React.ReactNode
  back?: boolean
}

export function HeaderLayout({
  title,
  children,
  back = false,
}: HeaderLayoutProps) {
  const { back: goBack } = useRouter()

  return (
    <Flex align="center" className="!bg-inherit h-16 mt-5 border-b">
      {back && <HeaderBackButton onClick={goBack} />}
      {title && (
        <Typography.Title level={3} className="font-sf font-medium ml-2">
          {title}
        </Typography.Title>
      )}
      {children}
    </Flex>
  )
}
