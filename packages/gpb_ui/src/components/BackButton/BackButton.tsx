import { FC } from 'react'
import { Button } from 'antd'
import { Box } from '../Box'
import { BackButtonProps } from './types'

export const BackButton: FC<BackButtonProps> = ({ text = 'Назад', onNavigate, ...rest }) => (
  <Box {...rest}>
    <Button style={{ width: 100 }} onClick={onNavigate}>
      {text}
    </Button>
  </Box>
)
