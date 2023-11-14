'use client'
import Link from 'next/link'
import { FaBoxOpen } from 'react-icons/fa6'

import Layout from '@/layouts/Main'

export default function CashRegisterPage() {
  return (
    <Layout>
      <Layout.Sidebar />
      <Layout.Main>
        <Layout.Header>
          <Link href="/cash-register/open" className="ml-auto">
            <FaBoxOpen size={34} />
          </Link>
        </Layout.Header>
        <Layout.Content>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </Layout.Content>
      </Layout.Main>
      <Layout.Aside />
    </Layout>
  )
}
