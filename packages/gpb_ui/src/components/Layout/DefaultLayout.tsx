import { FC, PropsWithChildren } from 'react'
import { Layout } from 'antd'
import { DefaultLayoutProps } from './types'

const { Header, Content } = Layout

export const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = ({ header, children }) => (
  <Layout>
    {header && <Header>{header}</Header>}
    <Content style={{ padding: '20px' }}>{children}</Content>
  </Layout>
)
