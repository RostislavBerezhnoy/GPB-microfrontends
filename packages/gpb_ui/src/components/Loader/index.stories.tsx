import React, { FC } from 'react'
import { Loader } from './Loader'

export default {
  title: 'Components/Loader',
  component: Loader,
}

export const LoaderDefault: FC = () => (
  <>
    <Loader size={24} />
    <Loader />
    <Loader size={80} />
  </>
)
