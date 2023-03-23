import { CSSProperties } from 'react'

export type BackButtonProps = CSSProperties & {
  text?: string
  onNavigate: () => void
}
