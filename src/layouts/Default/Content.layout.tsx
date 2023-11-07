import { Layout } from 'antd'
const { Content } = Layout

type ContentLayoutProps = {
  children: React.ReactNode
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return <Content className="text-center">{children}</Content>
}
