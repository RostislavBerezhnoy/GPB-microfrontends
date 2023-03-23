import { ReactNode } from 'react'
import type { MenuProps } from 'antd'

export type DefaultLayoutProps = {
  header?: ReactNode
}

export type HeaderProps = {
  items: MenuProps['items']
  pathname: string
  onNavigate: (path: string) => void
}
