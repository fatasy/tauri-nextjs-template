'use client'

import { Col, Row } from 'antd'

import Layout from '@/components/layouts/Default'

export default function CashRegisterPage() {
  return (
    <Layout>
      <Layout.Sidebar back />
      <Layout.Main>
        <Row>
          <Col span={14}></Col>
          <Col span={10}></Col>
        </Row>
      </Layout.Main>
    </Layout>
  )
}
