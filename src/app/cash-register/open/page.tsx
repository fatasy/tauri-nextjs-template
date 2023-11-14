'use client'

import 'react-simple-keyboard/build/css/index.css'

import { Button, Col, Flex, Popover, Row } from 'antd'
import { useState } from 'react'

import { MoneyInput } from '@/components/Inputs/MoneyInput'
import Layout from '@/layouts/Main'
import { IoSettingsOutline } from 'react-icons/io5'
import Keyboard from 'react-simple-keyboard'
export default function CashRegisterPage() {
  const [first, setFirst] = useState(0)
  return (
    <Layout>
      <Layout.Sidebar />
      <Layout.Main>
        <Layout.Header back title="Abrir caixa">
          <Popover
            trigger="click"
            content="Teste"
            title="Teste"
            className="ml-auto"
          >
            <Button size="large" type="text" className="!h-auto">
              <IoSettingsOutline size={32} />
            </Button>
          </Popover>
        </Layout.Header>
        <Layout.Content>
          <Row className="h-full">
            <Col span={14}></Col>
            <Col span={10}>
              <Flex vertical className="p-1 w-full bg-[#ececec] rounded">
                <MoneyInput
                  value={first}
                  className="w-full  text-5xl h-18 flex items-center  "
                  controls={false}
                  bordered={false}
                />
                <Keyboard
                  layout={{
                    default: ['{bksp}', '1 2 3', '4 5 6', '7 8 9'],
                  }}
                  theme="hg-theme-default hg-layout-numeric numeric-theme"
                  mergeDisplay={true}
                  onChange={(value) => {
                    setFirst(parseInt(value, 10))
                  }}
                />
              </Flex>
            </Col>
          </Row>
        </Layout.Content>
      </Layout.Main>
    </Layout>
  )
}
