import ComponentLoader from '@/Components/ComponentLoader'
import fetcher from '@/Helpers/fetcher'
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Text, useDisclosure, Icon, Wrap, IconButton } from '@chakra-ui/react'
import { countries } from 'country-list-json'
import { getCountryByShort, getStatesByShort } from 'countrycitystatejson'
import React, { useEffect, useState } from 'react'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import useSWR from 'swr'
import { Divider } from '@mantine/core'
import Axios from '@/Helpers/Axios'
import { BsPlus, BsX } from 'react-icons/bs'
import { MdRemove } from 'react-icons/md'

const schema = yup.object({

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

}).required();

export default function ShippingAddressModal({ defaultMutet }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { data, isLoading, mutate } = useSWR('/address/all', fetcher)

    const [selected, setSelected] = useState(null)

    const [create, setCreate] = useState(false)

    const [states, setStates] = useState([])

    const [countryName, setCountryName] = useState(null)

    useEffect(() => {
        if (data?.addresses?.length == 0) {
            setCreate(true)
        }
    }, [data])

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        watch,
        reset
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })


    useEffect(() => {

        // alert(watch("country"))

        const stts = getStatesByShort(watch("country"))
        const country = getCountryByShort(watch("country"))
        setCountryName(country?.name)
        setStates(stts)

    }, [watch("country")])


    const [loading, setLoading] = useState(false)

    const handleCreateFrom = (value) => {
        setSelected(null)
        setCreate(value)
    }

    const createAddress = async (values) => {
        // console.log('Creating address', values)
        setLoading(true)

        const res = await Axios.post('/address/create', { ...values, country_name: countryName })

        if (res?.data?.ok) {
            mutate('/address/all')
            setCreate(false)
            setSelected(res?.data?.address)
            reset({
                street_one: '',
                street_two: '',
                country: '',
                state: '',
                city: '',
                zip_code: ''
            })
        }

        setLoading(false)
    }

    const [loadingDefault, setLoadingDefault] = useState(false)
    const handleSubmitDefault = async () => {

        if (!selected) {
            return alert('Please select an address')
        }

        setLoadingDefault(true)

        const res = await Axios.post('/address/default', { addressId: selected?.id })

        if (res?.data?.ok) {
            defaultMutet('/address/default')
            mutate()
            onClose(false)
        }

        setLoadingDefault(false)
    }

    const handleRemoveAddress = async (addressId) => {
        setSelected(null)
        const res = await Axios.post('/address/remove', { addressId })
        if (res?.data?.ok) {
            mutate()
        }
    }

    // console.log('address', data)

    return (
        <>
            <Button onClick={onOpen} gap={0} size='xs' rounded={'none'} leftIcon={<Icon fontSize={24} as={BsPlus} />} variant='solid' colorScheme='teal' fontSize={'14px'} fontWeight='thin'>Change Address</Button>

            <Modal size={'2xl'} isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader borderBottom={'1px'} borderColor='gray.200'>
                        My Shipping Addressess
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box maxH={'400px'} overflowY='auto'>
                            {!create && <Flex direction={'column'} gap={3} mb={3}>
                                {!isLoading && data?.addresses?.length > 0 ? data?.addresses?.map((address, index) => {
                                    return address.is_default ? <Box key={index} bg={'yellow.400'} p={3} rounded='md'>
                                        <Flex alignItems={'center'} justify='space-between'>
                                            <Heading size='xs' textTransform='uppercase'>
                                                {address?.country_name}
                                            </Heading>
                                            <Wrap>
                                                <IconButton icon={<MdRemove />} />
                                                <Button size={'sm'}>Remove</Button>
                                            </Wrap>
                                        </Flex>
                                        <Text pt='1' fontSize='sm' color={'blackAlpha.700'}>
                                            {address?.street_one}, {address?.street_two}
                                        </Text>
                                        <Wrap spacing={{ base: 1, lg: 3 }} fontSize='12px' color={'blackAlpha.600'}>
                                            <Text>City: {address?.city}</Text>
                                            <Text>State: {address?.state}</Text>
                                            <Text>Zip Code: {address?.zip_code}</Text>
                                        </Wrap>
                                    </Box>
                                        : <Box
                                            key={index}
                                            bg={selected?.id == address.id ? 'yellow.400' : 'none'}
                                            border={'1px'} borderColor='gray.200'
                                            p={3}
                                            rounded='md'
                                            cursor={'pointer'}
                                            onClick={() => setSelected(address)}
                                            _hover={{
                                                bg: selected?.id == address.id ? 'yellow.400' : 'gray.100'
                                            }}
                                        >
                                            <Flex alignItems={'center'} justify='space-between'>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    {address?.country_name}
                                                </Heading>
                                                <Wrap>
                                                    <IconButton onClick={() => handleRemoveAddress(address.id)} size={'sm'} colorScheme='red' icon={<BsX />} />
                                                </Wrap>
                                            </Flex>
                                            <Text pt='1' fontSize='sm' color={'blackAlpha.700'}>
                                                {address?.street_one}, {address?.street_two}
                                            </Text>
                                            <Wrap spacing={{ base: 1, lg: 3 }} fontSize='12px' color={'blackAlpha.600'}>
                                                <Text>City: {address?.city}</Text>
                                                <Text>State: {address?.state}</Text>
                                                <Text>Zip Code: {address?.zip_code}</Text>
                                            </Wrap>
                                        </Box>
                                })
                                    : isLoading && <ComponentLoader />}


                            </Flex>}
                        </Box>

                        {create == false && <Box pt={3} borderTop='1px' borderColor={'gray.300'}>
                            <Button variant={'link'} leftIcon={<Icon fontSize={24} as={BsPlus} />} fontSize='14px' fontWeight={'thin'} onClick={() => handleCreateFrom(true)}>
                                Create new address
                            </Button>
                        </Box>
                        }

                        {create && <Box py={3}>

                            <Heading fontSize={'md'} mb={2}>Create new shipping address</Heading>

                            <Divider mb={20} />

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
                                            return <option style={{ color: 'black' }} key={i} value={item.code}>{item.flag} {" "} {" "} {item.name}</option>
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
                                            return <option key={i} style={{ color: 'black' }} value={state}>{state}</option>

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

                            <Wrap>
                                <Button onClick={() => setCreate(false)} colorScheme='gray'>Cancel</Button>
                                <Button isLoading={loading} onClick={handleSubmit(createAddress)} colorScheme='teal'>Create address</Button>
                            </Wrap>


                        </Box>}


                    </ModalBody>
                    {selected && <ModalFooter borderTop={'1px'} borderColor='gray.200'>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button isLoading={loadingDefault} onClick={handleSubmitDefault} colorScheme='teal'>Make default address</Button>
                    </ModalFooter>}
                </ModalContent>
            </Modal>
        </>
    )
}
