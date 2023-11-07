import Layout from '@/layouts/Default'

export default function CashRegisterPage() {
  return (
    <Layout>
      <Layout.Sidebar />
      <Layout.Main>
        <Layout.Header />
        <Layout.Content>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </Layout.Content>
      </Layout.Main>
      <Layout.Aside />
    </Layout>
  )
}
