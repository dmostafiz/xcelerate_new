import SponsorIdValidator from '@/Components/Common/Sponsor/SponsorIdValidator'
import Axios from '@/Helpers/Axios'
import useAlert from '@/Hooks/useAlert'
import useUser from '@/Hooks/useUser'
import HomeLayout from '@/layouts/HomeLayout'
import { Box, Center, Spinner } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function username() {

    const router = useRouter()
    const [sponsorFound, setSponsorFound] = React.useState(false)
    const [loading, setLoading] = React.useState(true)

    const { error, success } = useAlert()
    const { authUser, isLoading } = useUser()

    useEffect(() => {

        // const existingSponsor = Cookies.get('sponsor')
        if (authUser && !isLoading) {
            window.location.href = '/user/home'
        } else {

            if (router.query?.username) {

                const username = router.query?.username

                async function getUser() {
                    const res = await Axios.get(`/sponsor/validate/${username}`)
                    if (res?.data?.ok) {
                        success('Sponsor verified')
                        Cookies.set('sponsor', router.query.username.trim())
                        window.location.href = '/'
                    } else {
                        error(res?.data?.msg || 'Sponsor not found')
                        setLoading(false)
                        setSponsorFound(false)
                    }
                }

                getUser()

            }
        }


    }, [router, authUser])


    return (
        <>
            {loading
                ? <Center height={'100vh'} >
                    <Spinner size={'xl'} />
                </Center>
                : <HomeLayout navBg='gray.800'>
                    <Center height={'100vh'} >
                        <Box minW='xl'>
                            <SponsorIdValidator />
                        </Box>
                    </Center>
                </HomeLayout>

            }

        </>

    )
}
