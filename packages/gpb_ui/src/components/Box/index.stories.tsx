import React, { FC } from 'react'
import { Box } from './Box'
import { WrappedBox } from './WrappedBox'

export default {
  title: 'Components/Box',
  component: Box,
}

export const BoxDefault: FC = () => (
  <Box>
    <Box flexDirection='row' padding={5}>
      <Box backgroundColor='red' padding={5} margin={5} color='white'>
        test 1
      </Box>
      <Box backgroundColor='red' padding={5} margin={5} color='white'>
        test 2
      </Box>
      <Box backgroundColor='red' padding={5} margin={5} color='white'>
        test 3
      </Box>
    </Box>
    <Box padding={5}>
      <Box backgroundColor='red' padding={5} margin={5} color='white'>
        test 4
      </Box>
      <Box backgroundColor='red' padding={5} margin={5} color='white'>
        test 5
      </Box>
      <Box backgroundColor='red' padding={5} margin={5} color='white'>
        test 6
      </Box>
    </Box>
  </Box>
)

export const WrappedBoxDefault: FC = () => (
  <WrappedBox>
    <h2>Loading...</h2>
  </WrappedBox>
)
