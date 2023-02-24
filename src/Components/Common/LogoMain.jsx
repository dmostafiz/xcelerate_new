import { Image } from '@chakra-ui/react'
import React from 'react'

export default function LogoMain(props, {src='https://xceleratefueltabs.com/assets/images/logoIcon/logo.png'}) {
  // console.log('logo rendering')
  return (
    <Image w='full' src={src} {...props}/>
  )
}
