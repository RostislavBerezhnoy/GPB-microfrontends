import React, { FC } from 'react'
import { DefaultLayout } from './DefaultLayout'
import { Header } from './Header'
import { items } from './mocks'

export default {
  title: 'layouts/Default Layout',
  component: <></>,
}

export const DefaultHeader = () => (
  <Header items={items} pathname='/test1' onNavigate={path => alert(`Navigate to ${path}`)} />
)

export const DefaultLayoutWithoutHeader: FC = () => (
  <DefaultLayout>
    <h3>Hello World</h3>
  </DefaultLayout>
)

export const DefaultLayoutWithHeader: FC = () => (
  <DefaultLayout header={DefaultHeader()}>
    <h3>Hello World</h3>
  </DefaultLayout>
)
