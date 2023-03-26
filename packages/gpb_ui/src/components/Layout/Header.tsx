import { FC } from 'react'
import { Menu } from 'antd'
import { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ items, pathname, onNavigate }) => (
  <Menu
    theme='dark'
    mode='horizontal'
    selectedKeys={[pathname]}
    items={items}
    onClick={({ key }) => onNavigate(key)}
  />
)
