import { FC, CSSProperties } from 'react'
import { Button } from 'antd'
import { Box } from '../Box'

export type BackButtonProps = CSSProperties & {
  text?: string
  onNavigate: () => void
}

export const BackButton: FC<BackButtonProps> = ({ text = 'Назад', onNavigate, ...rest }) => (
  <Box {...rest}>
    <Button style={{ width: 100 }} onClick={onNavigate}>
      {text}
    </Button>
  </Box>
)
