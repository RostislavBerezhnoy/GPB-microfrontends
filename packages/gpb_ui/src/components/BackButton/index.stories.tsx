import React, { FC } from 'react'
import { BackButton } from './BackButton'

export default {
  title: 'Components/BackButton',
  component: BackButton,
}

export const BackButtonDefault: FC = () => (
  <BackButton onNavigate={() => alert('Navigate to previous page!')} />
)
