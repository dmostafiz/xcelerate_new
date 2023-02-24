import { Box } from '@chakra-ui/react'
import React from 'react'

export default function SafeArea({ children }) {
  return (
    <Box
      p={4}
      width='100%'
      style={{ overflowX: 'hidden', clear: 'both' }}
    >
      {children}
    </Box>
  )
}
