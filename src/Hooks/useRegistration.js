import React, { useEffect, useState } from 'react'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { setAccessToken, setFlashMessage } from '../Helpers/CookieHelper';
import Cookies from 'js-cookie';
import Axios from '@/Helpers/Axios';


export default function useRegistration() {

    const router = useRouter()
    const toast = useToast()

    const [googleLoading, setGoogleLoading] = useState(false)
    const [fbLoading, setFbLoading] = useState(false)

    const [dial, setDial] = useState(null)
    const [sponsor, setSponsor] = useState(null)

    const schema = yup.object({
        username: yup.string()
            .required('Username is required!')
            .matches(
                /^[a-zA-Z0-9_.]*$/u,
                'Only ( _ ) dash, ( . ) dot and numbers are allowed. White space are not allowed.'
            )
            .test(
                'checkUsernameUnique',
                'This username is already exists',
                async (value) => {
                    const res = await Axios.post(`/auth/check_username_exists`, { username: value }, {
                        withCredentials: true,
                    })
    
                    if (res?.data?.ok === true) {
                        return false
                    }
    
                    return true
                }
            ),
    
        email: yup.string()
            .email("Invalid Email!")
            .required('Email field is required!')
            .test(
                'checkUsernameUnique',
                'This email is already exists',
                async (value) => {
                    const res = await Axios.post(`/auth/check_email_exists`, { email: value }, {
                        withCredentials: true,
                    })
    
                    if (res?.data?.ok === true) {
                        return false
                    }
    
                    return true
                }
            ),
    
        first_name: yup.string()
            .required('First name is required!'),
    
        last_name: yup.string()
            .required('Last name is required!'),
    
        password: yup.string()
            .required('Password is required!')
            .min(6, 'Minimum 6 character is allowed'),
    
        confirm_password: yup.string()
            .oneOf([yup.ref('password')], 'Should match with password')
            .required('This is required!'),
    
        street_one: yup.string()
            .required('this field is required!'),
    
        street_two: yup.string().nullable(),
    
        country: yup.string()
            .required('this field is required!'),
    
    
        state: yup.string()
            .required('this field is required!'),
    
        city: yup.string()
            .required('this field is required!'),
    
        zip_code: yup.string()
            .required('this field is required!'),
    
        phone_number: yup.string()
            .required('this field is required!')
            .test(
                'checkPhoneUnique',
                'This phone number is already exists',
                async (value) => {
                    const phone_number = `+${dial} ${value}`
                    const res = await Axios.post(`/auth/check_phone_exists`, { phone_number: phone_number }, {
                        withCredentials: true,
                    })
    
                    if (res?.data?.ok === true) {
                        return false
                    }
    
                    return true
                }
            ),
    
    }).required();

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        watch
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })


    const responseFacebook = async (response) => {

        console.log('FaceBook Signup ', response)

        setFbLoading(true)

        if (response?.email) {
            await submitRegistrationData(
                '/auth/social_signup',
                {
                    email: response?.email,
                    avatar: response?.picture?.data?.url,
                    host: 'facebook'
                }
            )
        }

        setFbLoading(false)
    }

    const responseGoogle = async (response) => {

        const obj = response.profileObj

        console.log(obj)

        setGoogleLoading(true)

        if (obj) {
            await submitRegistrationData(
                '/auth/social_signup',
                {
                    email: obj?.email,
                    avatar: obj?.imageUrl,
                    host: 'google'
                }
            )
        }

        setGoogleLoading(false)

    }

    async function onSubmit(values) {
        console.log('Form Value', values)
        await submitRegistrationData('/auth/register', values)
    }

    const submitRegistrationData = async (url, values) => {
        const res = await Axios.post(url, { ...values, dial, sponsor }, {
            // withCredentials: true
        })

        // console.log(res)

        if (res?.data?.ok) {

            setAccessToken(res?.data?.token)

            // removeUpdateToken(data.profileUpdateToken)
            // setRedirectUrl(router.asPath)

            toast({
                title: 'Congratulations!',
                description: "You have created your account. Now please provide your business information to unlock other features and operate your business with Tech Oak.",
                status: 'success',
                position: 'top-right',
                duration: 9000,
                isClosable: true,
            })

            Cookies.remove('sponsor')

            setFlashMessage('success', "Congratulations!", "Your registration has done successfull.",)

            window.location.href = '/user/home'

            return

        } else {
            toast({
                title: 'Sorry!',
                description: res?.data?.msg ?? 'There is a problem! Please try again later',
                status: 'error',
                position: 'top-right',
                duration: 9000,
                isClosable: true,
            })

            return
        }
    }





    return { responseFacebook, responseGoogle, onSubmit, handleSubmit, register, watch, errors, isSubmitting, fbLoading, googleLoading, dial, setDial, sponsor, setSponsor }
}