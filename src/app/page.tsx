'use client'

import { Button } from 'antd'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

import Layout from '@/components/layouts/Default'
export default function Home() {
  return (
    <Layout>
      <Layout.Sidebar />
      <Layout.Main>
        <Layout.Header>
          <Link href="/signin" passHref>
            <Button>Ir para login</Button>
            <Button onClick={() => void signOut()}>Sair</Button>
          </Link>
        </Layout.Header>
        <Layout.Content>dewf</Layout.Content>
      </Layout.Main>
      <Layout.Aside />
    </Layout>
  )
}
