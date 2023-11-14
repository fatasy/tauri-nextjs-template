import { Layout } from 'antd'

type MainLayoutProps = {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Layout className=" !bg-inherit !h-screen mx-0 px-4">{children}</Layout>
  )
}
