import { Layout } from 'antd'
const { Header } = Layout
type HeaderLayoutProps = {
  children?: React.ReactNode
}

export function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <Header className="flex !bg-inherit items-center h-16 mt-8">
      {children}
    </Header>
  )
}
