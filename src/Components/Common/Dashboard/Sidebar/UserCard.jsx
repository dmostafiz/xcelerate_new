import { AuthContext } from '@/Contexts/AuthContext'
import Axios from '@/Helpers/Axios'
import { removeAccessToken } from '@/Helpers/CookieHelper'
import useAlert from '@/Hooks/useAlert'
import { Avatar, Box, Button, Heading, HStack, Text, useConst, useToast, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'

export default function UserCard() {

    const [loading, setLoading] = React.useState(false)
    const {success} = useAlert()

    const {logoutUser, authUser} = useContext(AuthContext)

    const handleLogout = async () => {
        setLoading(true)

        setTimeout(async () => {
            removeAccessToken()
          
            logoutUser('/auth/user_login')

            setLoading(false)
        }, 1000)
    }

    // console.log('User card renders')


    return (
        <Box py={4} mb={5} bg='whiteAlpha.100' shadow='sm'>
            <VStack direction={'column'}>
                <Avatar
                    ml="4"
                    size="md"
                    name="anubra266"
                    src={authUser?.avatar}
                    cursor="pointer"
                />
                <Box textAlign={'center'}>
                    <Heading as='h6' size='sm' color='white'>
                       {authUser?.full_name}
                    </Heading>
                    <Text fontSize={'xs'} color='whiteAlpha.700'>~{authUser?.username}</Text>
                </Box>
                <HStack pt={2}>
                    <Button colorScheme={'teal'} size='xs' rounded={'none'}>My Profile</Button>
                    <Button
                        colorScheme={'yellow'}
                        bg='yellow.500'
                        size='xs'
                        rounded={'none'}
                        onClick={handleLogout}
                        isLoading={loading}
                    >
                        Logout
                    </Button>
                </HStack>
            </VStack>
        </Box>
    )
}
