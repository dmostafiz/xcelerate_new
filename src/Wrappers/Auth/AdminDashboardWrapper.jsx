import { Center, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import ComponentLoader from '@/Components/ComponentLoader'
import useUser from '@/Hooks/useUser'
import { removeAccessToken } from '@/Helpers/CookieHelper'
import Cookies from 'js-cookie'
import { getRedirectUrl, setAccessToken, setFlashMessage, setRedirectUrl } from '@/Helpers/CookieHelper'

export default function AdminDashboardWrapper({ children }) {
  const router = useRouter()
  const { isLoading, authUser } = useUser()

  if (!isLoading && !authUser || (authUser && authUser.user_type != 'admin')) {
    // removeAccessToken()
    setRedirectUrl(router.asPath)
    router.push('/auth/admin_login')
  }

  return (
    <>
      {isLoading
        ? <Center minH='100vh'>
          <ComponentLoader />
        </Center>

        : (!isLoading && authUser && authUser.user_type === 'admin')

          ? children

          : <Center minH='100vh'>
            <ComponentLoader />
          </Center>
      }
    </>
  )
}