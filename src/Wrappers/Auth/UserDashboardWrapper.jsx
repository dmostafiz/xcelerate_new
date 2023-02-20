import { Center, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import ComponentLoader from '@/Components/ComponentLoader'
import useUser from '@/Hooks/useUser'
import { removeAccessToken } from '@/Helpers/CookieHelper'

export default function UserDashboardWrapper({ children }) {
    const router = useRouter()
    const { isLoading, authUser } = useUser()

    if (!isLoading && !authUser || (authUser && authUser.user_type != 'user')) {
        removeAccessToken()
        router.push('/auth/user_login')
    }

    return (
        <>
            {isLoading
                ? <Center minH='100vh'>
                    <ComponentLoader />
                </Center>

                : (!isLoading && authUser && authUser.user_type === 'user')

                    ? children

                    : <Center minH='100vh'>
                        <ComponentLoader />
                    </Center>
            }
        </>
    )
}