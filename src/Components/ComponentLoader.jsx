import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function ComponentLoader({size='xl'}) {
  return (
    <Center py={8}>
        <Spinner color='gray.500' size={size} />
    </Center>
  )
}