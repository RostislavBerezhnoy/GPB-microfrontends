import { FC, PropsWithChildren, ReactNode } from 'react'
import { Layout } from 'antd'

const { Header, Content } = Layout

export type DefaultLayoutProps = {
  header?: ReactNode
}

export const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = ({ header, children }) => (
  <Layout>
    {header && <Header>{header}</Header>}
    <Content style={{ padding: '20px' }}>{children}</Content>
  </Layout>
)
