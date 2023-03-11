import CartComponent from '@/Components/CartComponent'
import SafeArea from '@/Components/Common/Dashboard/SafeArea'
import NoDataFound from '@/Components/Common/NoDataFound'
import ComponentLoader from '@/Components/ComponentLoader'
import ShippingAddressModal from '@/Components/UserDashboard/Checkout/ShippingAddressModal'
import { CartContext } from '@/Contexts/CartContext'
import Axios from '@/Helpers/Axios'
import fetcher from '@/Helpers/fetcher'
import usStates from '@/Helpers/usStates'
import usTaxRates from '@/Helpers/usTaxRates'
import UserLayout from '@/layouts/UserLayout'
import { Box, Button, Card, CardBody, CardHeader, Icon, Container, Flex, Heading, Spinner, Text, Wrap } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import useSWR from 'swr'

export default function checkout() {

    const shipping = useSWR('/address/default', fetcher)

    const {
        addItem,
        cartTotal,
        emptyCart,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        isOpen,
        onOpen,
        onClose
    } = useContext(CartContext)

    const [shippingRate, setShippingRate] = useState(0)
    const [shippingLoading, setShippingLoading] = useState(false)

    useEffect(() => {

        if (shipping?.data?.address?.id) {


            const address = shipping?.data?.address

            async function fetchShippingRate() {
                setShippingLoading(true)

                const res = await Axios.post('/shipping/rate', { ...address, cartItems: items })
                if (res?.data?.ok) {
                    setShippingRate(res?.data?.rate)
                }

                setShippingLoading(false)
            }

            fetchShippingRate(false)



        }

    }, [shipping?.data?.address?.id, items])


    const [taxRate, setTaxRate] = useState(0)
    const [tax, setTax] = useState(0)


    useEffect(() => {

        if (shipping?.data?.address?.id && shipping?.data?.address?.country == 'US') {

            const state = usStates.find(state => state.name == shipping?.data?.address?.state)

            console.log('Get State: ', state?.abbreviation)
            console.log('Get Tax: ', usTaxRates?.[state?.abbreviation]?.rate)

            const taxRate = usTaxRates?.[state?.abbreviation]?.rate

            setTaxRate((taxRate * 100).toFixed(2))
            setTax(taxRate * parseFloat(cartTotal))

        } else {
            setTax(0)
        }

    }, [shipping?.data?.address?.id])


    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        if (shippingRate?.amount) {
            setSubTotal(parseFloat(cartTotal) + parseFloat(shippingRate.amount) + tax)
        }
    }, [cartTotal, shippingRate?.amount, tax])


    return (
        <UserLayout
            showSidebar={false}
            title='Checkout'
            breads={[
                {
                    title: 'Checkout',
                    link: '/user/checkout',
                }
            ]}
        >

            <Container maxW={'5xl'}>
                <SafeArea />

                <Card>
                    <CardHeader borderBottom={'1px'} borderColor='gray.200'>
                        <Heading as='h6' fontSize={'2xl'}>Checkout</Heading>
                    </CardHeader>
                    <CardBody>

                        {items.length > 0 ? <Flex gap={10} direction={{ base: 'column-reverse', lg: 'row' }}>
                            <Box w={{ base: '100%', lg: '50%' }}>
                                <Wrap mb={3} justify='space-between'>
                                    <Heading fontSize={'md'} mb={2}>Shipping Address</Heading>
                                    <ShippingAddressModal defaultMutet={shipping.mutate} />
                                </Wrap>

                                {!shipping.isLoading && shipping?.data?.address ? <Box bg={'yellow.400'} p={3} rounded='md'>
                                    <Heading size='xs' textTransform='uppercase'>
                                        {shipping?.data?.address?.country_name}
                                    </Heading>
                                    <Text pt='1' fontSize='sm' color={'blackAlpha.700'}>
                                        {shipping?.data?.address?.street_one}, {shipping?.data?.address?.street_two}
                                    </Text>
                                    <Wrap spacing={{ base: 1, lg: 3 }} fontSize='12px' color={'blackAlpha.600'}>
                                        <Text>City: {shipping?.data?.address?.city}</Text>
                                        <Text>State: {shipping?.data?.address?.state}</Text>
                                        <Text>Zip Code: {shipping?.data?.address?.zip_code}</Text>
                                    </Wrap>
                                </Box>
                                    : !shipping.isLoading
                                        ? <ComponentLoader />
                                        : <NoDataFound center={false} py={5} text='No shipping address added' />
                                }


                                <Box py={8}>
                                    <Heading fontSize={'md'} mb={2}>Payable summary</Heading>
                                    <Box border='1px' fontSize={'15px'} color='gray.500' bg='gray.50' rounded={'md'} borderColor={'gray.200'} px={3} py={1}>
                                        <Box py={1} borderBottom={'1px'} borderColor='gray.100'>
                                            <Flex alignItems={'center'} justify='space-between'>
                                                <Text>Cart total</Text>
                                                <Text>${parseFloat(cartTotal).toFixed(2)}</Text>
                                            </Flex>
                                        </Box>

                                        {(shipping?.data?.address?.country == 'US' && tax > 0) && <Box py={1} borderBottom={'1px'} borderColor='gray.100'>
                                            <Flex alignItems={'center'} justify='space-between'>
                                                <Text>Tax ({taxRate}%)</Text>
                                                <Text>${tax.toFixed(2)}</Text>
                                            </Flex>
                                        </Box>}
                                        <Box py={1} borderBottom={'1px'} borderColor='gray.100'>
                                            <Flex alignItems={'center'} justify='space-between'>
                                                <Text>Shipping Cost</Text>
                                                {!shippingLoading ? <Text>${shippingRate?.amount}</Text> : <Spinner size={'sm'} />}
                                            </Flex>
                                        </Box>
                                        <Box py={1}>
                                            <Flex alignItems={'center'} justify='space-between'>
                                                <Text>Total Payable</Text>
                                                {!shippingLoading ? <Text fontWeight={'semibold'}>${subTotal.toFixed(2)}</Text> : <Spinner size={'sm'} />}
                                            </Flex>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box pb={8}>
                                    <Heading fontSize={'md'} mb={2}>Debit / credit card</Heading>
                                    <Box mb={5} border='1px' fontSize={'15px'} color='gray.500' bg='gray.50' rounded={'md'} borderColor={'gray.200'} p={3}>

                                    </Box>

                                    <Button isDisabled={shippingLoading} colorScheme={'green'} rounded='none'>Place the order</Button>
                                </Box>
                            </Box>

                            <Box flex={1}>
                                <Heading fontSize={'md'} mb={4}>Cart Items <Text fontSize={'14px'} fontWeight='thin' as='span'>({totalUniqueItems} items)</Text></Heading>
                                <Box maxH={'400px'} overflowY='auto'>
                                    <CartComponent />
                                </Box>
                                <Box py={4}>
                                    <Link href='/user/shop'>
                                        <Button leftIcon={<Icon as={BsBag} />} rounded='none' size={'sm'}>
                                            Continue Shopping
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Flex>
                            : <NoDataFound text={'Cart is empty!'} />}

                    </CardBody>
                </Card>
            </Container>

        </UserLayout>
    )
}
