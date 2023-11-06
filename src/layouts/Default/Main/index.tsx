import { Layout } from "antd"

type MainLayoutProps = {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return <Layout className="mx-6 !bg-inherit">{children}</Layout>
}
