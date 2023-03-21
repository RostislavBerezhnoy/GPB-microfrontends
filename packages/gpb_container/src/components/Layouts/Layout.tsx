import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { DefaultLayout } from 'gpb_ui'
import { Header } from './Header'

export const Layout: FC = () => (
  <DefaultLayout
    header={
      <>
        <Header />
      </>
    }
  >
    <Outlet />
  </DefaultLayout>
)
