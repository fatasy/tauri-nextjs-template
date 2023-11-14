'use client'

import { Button } from 'antd'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

import Layout from '@/layouts/Main'
export default function Home() {
  return (
    <Layout>
      <Layout.Sidebar />
      <Layout.Main>
        <Layout.Header>
          <Link href="/auth/signin" passHref>
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
