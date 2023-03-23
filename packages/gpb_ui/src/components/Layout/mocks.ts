import { HeaderProps } from './types'

export const items: HeaderProps['items'] = ['test1', 'test2', 'test3'].map(key => ({
  key,
  label: key.replace(/^./, str => str.toUpperCase()),
}))
