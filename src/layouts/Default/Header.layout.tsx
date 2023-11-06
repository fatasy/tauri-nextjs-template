import { Layout } from "antd"
const { Header } = Layout
type HeaderLayoutProps = {
  children?: React.ReactNode
}

export function HeaderLayout({ children }: HeaderLayoutProps) {
  return <Header className="!bg-inherit text-center h-16">{children}</Header>
}
