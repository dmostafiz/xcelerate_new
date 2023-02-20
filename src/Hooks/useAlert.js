import { useToast } from '@chakra-ui/react'
import React from 'react'

export default function useAlert(
    position = 'top-right',
    duration = 9000,
    isClosable = true
) {

    const toast = useToast()

    const alertOptions = {
        position: position,
        duration: duration,
        isClosable: isClosable,
    }


    const success = (title = '', description = '') => {

        console.log(title, description)

        toast({
            title: title,
            description: description,
            status: 'success',
            ...alertOptions
        })

    }

    const error = (title = '', description = '') => {

        console.log(title, description)

        toast({
            title: title,
            description: description,
            status: 'error',
            ...alertOptions
        })

    }

    const info = (title = '', description = '') => {

        console.log(title, description)

        toast({
            title: title,
            description: description,
            status: 'info',
            ...alertOptions
        })

    }

    const warning = (title = '', description = '') => {

        console.log(title, description)

        toast({
            title: title,
            description: description,
            status: 'warning',
            ...alertOptions
        })

    }


    return { success, error, info, warning }
}