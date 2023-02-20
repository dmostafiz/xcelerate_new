import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { createContext, useEffect, useState } from "react"
import Axios from "../Helpers/Axios"
import { getAccessToken, removeAccessToken } from "../Helpers/CookieHelper"
// import useUser from "../Hooks/useUser"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

    const [hasUser, setHasUser] = useState(false)

    const { data, isLoading, isError, error } = useQuery(['authUser'], async () => {

        const response = await Axios.post('/auth/authenticate')

        console.log('Authorized User: ', response?.data?.user)
        
        setHasUser(true)
        return response?.data?.user || null

    }, {
        refetchOnWindowFocus: false,
        enabled: !hasUser ? true : false,
        retry: false,
    })

    const logoutUser = async (url='/') => {
        // alert('logout')
        const response = await Axios.post('/auth/logout')

        if (response?.data?.ok) {

            removeAccessToken()

            window.location.href = url
        }
    }

    return <AuthContext.Provider value={{
        isLoading: isLoading,
        authUser: data,
        isError: isError,
        error: error,
        logoutUser
    }}>

        {children}

    </AuthContext.Provider>
}

export default AuthContextProvider