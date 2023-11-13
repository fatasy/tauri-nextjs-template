import { Layout } from 'antd'

type LayoutProps = {
  children: React.ReactNode
}

export function DefaultLayout({ children }: LayoutProps) {
  return (
    <Layout className="min-h-screen" hasSider>
      {children}
    </Layout>
  )
}
