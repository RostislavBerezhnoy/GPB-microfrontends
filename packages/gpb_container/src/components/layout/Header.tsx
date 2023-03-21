import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header as DefaultHeader, HeaderProps } from 'gpb_ui'

const items: HeaderProps['items'] = ['test1', 'test2', 'test3'].map(key => ({
  key,
  label: key.replace(/^./, str => str.toUpperCase()),
}))

export const Header: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return <DefaultHeader items={items} pathname={pathname} onNavigate={path => navigate(path)} />
}
