import { Image } from '@chakra-ui/react'
import React from 'react'

export default function LogoMain(props, {type='black', src='https://xceleratefueltabs.com/assets/images/logoIcon/logo.png'}) {
  return (
    <Image w='full' src={src} {...props}/>
  )
}
