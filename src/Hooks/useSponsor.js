import Axios from '@/Helpers/Axios'
import fetcher from '@/Helpers/fetcher'
import Cookies from 'js-cookie'
import React from 'react'
import useSWR from 'swr'

export default function useSponsor() {

    const getSponsor = async () => {

        const username = Cookies.get('sponsor')

        const res = await Axios.get(`/sponsor/validate/${username}`)  

        console.log('Sponsor data: ', res.data)

        return res?.data?.ok ? res?.data?.user : null

        // return Cookies.get('sponsor')
    }

    const setSponsor = async (username, redirectTo = '/') => {

        Cookies.set('sponsor', username.trim())

    }

    return { getSponsor, setSponsor }
}
