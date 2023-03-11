import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

export default function NoDataFound({center=true, py=20, text='No data found!'}) {
  
    const Component = center ? Center : Box
  
    return (
        <Component py={py}>
            <Text fontSize='20px' color='gray.300'>{text}</Text>
        </Component>
    )
}
