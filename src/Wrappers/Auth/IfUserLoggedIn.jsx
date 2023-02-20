import { Center, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import ComponentLoader from '@/Components/ComponentLoader'
import { getAccessToken } from '@/Helpers/CookieHelper'
import useUser from '@/Hooks/useUser'

export default function IfUserLoggedIn({ children }) {
  const router = useRouter()
  const { isLoading, authUser } = useUser()
  const accessToken = getAccessToken()

  if (!isLoading && authUser && authUser.user_type == 'user') {
    window.location.href = '/user/home'
  }

  return (
    <>
      {isLoading
        ? <Center minH='100vh'>
          <ComponentLoader />
        </Center>

        : (!authUser || !accessToken || (authUser && authUser.user_type == 'admin'))

          ? children

          : <Center minH='100vh'>
            <ComponentLoader />
          </Center>
      }
    </>
  )
}