import { Layout } from 'antd'
const { Content } = Layout

type AsideLayoutProps = React.ComponentProps<typeof Layout>
export function AsideLayout({ children }: AsideLayoutProps) {
  return <Content className="text-center max-w-xs border-l">{children}</Content>
}
