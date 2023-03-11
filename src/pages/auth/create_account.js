import LogoMain from '@/Components/Common/LogoMain';
import useRegistration from '@/Hooks/useRegistration';
import useSponsor from '@/Hooks/useSponsor';
import AuthLayout from '@/layouts/AuthLayout';
import IfUserLoggedIn from '@/Wrappers/Auth/IfUserLoggedIn';
import ValidateSponsorWrapper from '@/Wrappers/Auth/ValidateSponsorWrapper';
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Box,
    Text,
    VStack,
    FormErrorMessage,
    Avatar,
    Select,
    InputGroup,
    InputLeftAddon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { countries } from 'country-list-json';
import {getStatesByShort, getCountryByShort} from 'countrycitystatejson';

export default function create_account() {

    const { getSponsor } = useSponsor()
    const { responseFacebook, responseGoogle, onSubmit, handleSubmit, register, errors, isSubmitting, fbLoading, googleLoading, watch, dial, setDial, sponsor, setSponsor } = useRegistration()

    const [states, setStates] = useState([])

    useEffect(() => {

        // alert(watch("country"))

        const stts = getStatesByShort(watch("country"))
        const country = getCountryByShort(watch("country"))

        if(country){
            setDial(country.phone)
        }

        console.log('Selected states', stts)

        setStates(stts)

    }, [watch("country")])

    useEffect(() => {

        async function fetchSponsor() {
            const sp = await getSponsor()

            if (sp) {
                console.log('Account sponsor', sp)
                setSponsor(sp)
            }

        }

        fetchSponsor()

    }, [])

    return (
        <IfUserLoggedIn>
            <ValidateSponsorWrapper>
                <AuthLayout>

                    {sponsor && <Box>
                        <Text mb={1} fontWeight={'bold'}>Referral sponsor</Text>
                        <Box p={3} mb={3} bg='whiteAlpha.300' rounded={'lg'} shadow='lg'>
                            <Flex gap={3} alignItems='center'>
                                <Avatar size='md' src={sponsor.avatar} name={sponsor.full_name} />
                                <Box>
                                    <Text fontWeight={'bold'}>{sponsor.full_name}</Text>
                                    <Text color={'whiteAlpha.700'} fontWeight={'normal'}>~{sponsor.username}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    }

                    <Heading fontSize={'xl'}>Account Information</Heading>

                    <hr />

                    <Box pb={5}>

                        <Flex gap={4} mb={4}>
                            <FormControl id="first_name" isInvalid={errors.first_name}>
                                <FormLabel>First Name</FormLabel>
                                <Input
                                    type="text"
                                    placeholder='Enter your first name'
                                    {...register('first_name')}
                                />
                                <FormErrorMessage>
                                    {errors.first_name && errors.first_name.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl id="last_name" isInvalid={errors.last_name}>
                                <FormLabel>Last Name</FormLabel>
                                <Input
                                    type="text"
                                    placeholder='Enter your last name'
                                    {...register('last_name')}
                                />
                                <FormErrorMessage>
                                    {errors.last_name && errors.last_name.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>


                        <FormControl mb={4} id="email" isInvalid={errors.email}>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="text"
                                placeholder='Enter your email'
                                {...register('email')}
                            />
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl mb={4} id="username" isInvalid={errors.username}>
                            <FormLabel>Username</FormLabel>
                            <Input
                                type="text"
                                placeholder='Enter your username'
                                {...register('username')}
                            />
                            <FormErrorMessage>
                                {errors.username && errors.username.message}
                            </FormErrorMessage>
                        </FormControl>

                        <Flex gap={4}>
                            <FormControl id="password" isInvalid={errors.password}>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    placeholder='Enter your password'
                                    {...register('password')}
                                />
                                <FormErrorMessage>
                                    {errors.password && errors.password.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl id="confirm_password" isInvalid={errors.confirm_password}>
                                <FormLabel>Confirm Password</FormLabel>
                                <Input
                                    type="password"
                                    placeholder='Re-Type password'
                                    {...register('confirm_password')}
                                />
                                <FormErrorMessage>
                                    {errors.confirm_password && errors.confirm_password.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>

                    </Box>

                    <Heading fontSize={'xl'}>Contact & Address</Heading>

                    <hr />

                    <Box pb={5}>


                        <FormControl mb={4} id="street_one" isInvalid={errors.street_one}>
                            <FormLabel>Street One</FormLabel>
                            <Input
                                type="text"
                                placeholder='Enter your street address (line 1)'
                                {...register('street_one')}
                            />
                            <FormErrorMessage>
                                {errors.street_one && errors.street_one.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl mb={4} id="street_two" isInvalid={errors.street_two}>
                            <FormLabel>Street Two (Optional)</FormLabel>
                            <Input
                                type="text"
                                placeholder='Enter your street address (line 2)'
                                {...register('street_two')}
                            />
                            <FormErrorMessage>
                                {errors.street_two && errors.street_two.message}
                            </FormErrorMessage>
                        </FormControl>

                        <Flex mb={4} gap={4}>
                            <FormControl id="country" isInvalid={errors.country}>
                                <FormLabel>Country</FormLabel>
                                <Select
                                    placeholder='Select country'
                                    {...register('country')}
                                >
                                    {countries.map((item, i) => {
                                        return <option style={{color: 'black'}} key={i} value={item.code}>{item.flag} {" "} {" "} {item.name}</option>
                                    })}
                                </Select>

                                <FormErrorMessage>
                                    {errors.country && errors.country.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl id="state" isInvalid={errors.state}>
                                <FormLabel>State</FormLabel>
                                <Select
                                    placeholder='Select state'
                                    {...register('state')}
                                >
                                    {states?.map((state, i) => {
                                       return <option key={i} style={{color: 'black'}} value={state}>{state}</option>
                                        
                                    })}
                                </Select>
                                <FormErrorMessage>
                                    {errors.state && errors.state.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>

                        <Flex mb={4} gap={4}>
                            <FormControl id="city" isInvalid={errors.city}>
                                <FormLabel>City</FormLabel>
                                <Input
                                    type="text"
                                    placeholder='Enter your city name'
                                    {...register('city')}
                                />
                                <FormErrorMessage>
                                    {errors.city && errors.city.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl id="zip_code" isInvalid={errors.zip_code}>
                                <FormLabel>Zip Code</FormLabel>
                                <Input
                                    type="text"
                                    placeholder='Enter your zip code'
                                    {...register('zip_code')}
                                />
                                <FormErrorMessage>
                                    {errors.zip_code && errors.zip_code.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>


                       {dial && <FormControl mb={4} id="phone_number" isInvalid={errors.phone_number}>
                            <FormLabel>Phone number</FormLabel>
                            <InputGroup>
                                <InputLeftAddon bg='transparent' children={`+${dial}`} />
                                <Input type='tel' placeholder='phone number' {...register('phone_number')} />
                            </InputGroup>
                            <FormErrorMessage>
                                {errors.phone_number && errors.phone_number.message}
                            </FormErrorMessage>
                        </FormControl>}

                    </Box>

                    <Stack spacing={6}>
                        <VStack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}
                        >
                            <Link href={'/auth/forgot_password'}>
                                <Text as='span' color={'yellow.500'}>
                                    Read xcelerate inc TOS
                                </Text>
                            </Link>
                            <Checkbox> I am agree with the terms and conditions</Checkbox>
                        </VStack>

                        <Button
                            colorScheme={'yellow'}
                            bg='yellow.500'
                            variant={'solid'}
                            loadingText="Loging in..."
                            isLoading={isSubmitting}
                            onClick={handleSubmit(onSubmit)}
                        >
                            Create account
                        </Button>

                    </Stack>
                </AuthLayout>
            </ValidateSponsorWrapper>
        </IfUserLoggedIn>
    )
}
