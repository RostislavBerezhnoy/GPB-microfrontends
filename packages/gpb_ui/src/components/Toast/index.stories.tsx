import React, { FC, useEffect, useState } from 'react'
import { Button } from 'antd'
import { errorToastWithButton } from 'utils/errorToastWithButton'

export default {
  title: 'utils/ToastErrorWithButton',
  component: <></>,
}

export const ToastErrorWithButtonDefault: FC = () => {
  const [showToast, setShowToast] = useState<boolean>(false)

  useEffect(() => {
    if (showToast) errorToastWithButton({ retry: () => console.log('refetch') })
  }, [showToast])

  return (
    <Button type='primary' onClick={() => setShowToast(prev => !prev)}>
      Show error toast
    </Button>
  )
}
