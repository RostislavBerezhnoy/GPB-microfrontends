import { FC } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

export type HeaderProps = {
  items: MenuProps['items']
  pathname: string
  onNavigate: (path: string) => void
}

export const Header: FC<HeaderProps> = ({ items, pathname, onNavigate }) => (
  <Menu
    theme='dark'
    mode='horizontal'
    selectedKeys={[pathname.replace('/', '')]}
    items={items}
    onClick={({ key }) => onNavigate(key)}
  />
)
