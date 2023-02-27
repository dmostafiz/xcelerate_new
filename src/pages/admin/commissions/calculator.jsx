import SafeArea from '@/Components/Common/Dashboard/SafeArea'
import Axios from '@/Helpers/Axios'
import AdminLayout from '@/layouts/AdminLayout'
import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Icon, SimpleGrid, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import { NumberInput } from '@mantine/core'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'

export default function calculator() {

    const [price, setPrice] = React.useState(20)
    const [subscriptions, setSubscriptions] = React.useState(1)
    const [matrix, setMatrix] = React.useState([])
    const [match, setMatch] = React.useState([])

    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async () => {
        // alert(price)
        setLoading(true)

        const res = await Axios.post('/commission/calculate', { price, subscriptions })

        if (res?.data?.ok) {

            setMatrix(res.data.commissions?.matrix)

            setMatch(res.data.commissions?.match)

        }

        setLoading(false)
    }

    useEffect(() => {

        handleSubmit()

    }, [price, subscriptions])
    return (
        <AdminLayout
            title='Commission Calculator'
            breads={[
                {
                    title: 'Commission Calculator',
                    link: '/admin/commissions/calculator',
                }
            ]}
        >
            <SafeArea>

                <Card>
                    <CardHeader borderBottom={'1px'} borderColor='gray.200'>
                        <Flex alignItems='center' justify='space-between'>
                            <Heading as='h6' fontSize={'lg'}>
                                Commission Calculator
                            </Heading>
                            {/* <Link href='/admin/products/add'>
                                <Button leftIcon={<Icon as={FaPlus} />} size='sm' rounded={'none'} colorScheme='teal'>
                                    Commission Calculator
                                </Button>
                            </Link> */}
                        </Flex>
                    </CardHeader>
                    <CardBody>

                        <SimpleGrid spacing={5} columns={{ base: 1, sm: 2, md: 3, lg: 4 }} mb={5}>
                            <NumberInput
                                placeholder="Enter subscription price"
                                label="Subscription price"
                                withAsterisk
                                min={20}
                                onChange={setPrice}
                                value={price}
                            />

                            <NumberInput
                                placeholder="Total subscription"
                                label="Total subscription"
                                withAsterisk
                                min={1}
                                onChange={setSubscriptions}
                                value={subscriptions}
                            />
                        </SimpleGrid>

                        {/* <Button loading={loading} onClick={handleSubmit} mt={3} rounded={'none'} colorScheme='teal'>
                            Calculate Commissions
                        </Button> */}

                        <Box py={4}>

                            {matrix.length > 0 && <SimpleGrid spacing={5} columns={{ base: 1, sm: 2, md: 3, lg: 3 }}>

                                <Card bg='yellow.400' color={'blackAlpha.700'}>
                                    <CardHeader borderBottom='1px' borderColor='blackAlpha.500'>
                                        <Heading as='h5' fontSize={'16px'}>Monthly</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Table size={'sm'}>
                                            <Tbody>
                                                <Tr>
                                                    <Td borderColor={'blackAlpha.200'}>Total</Td>
                                                    <Td borderColor={'blackAlpha.200'}>${(price * subscriptions)}</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td borderColor={'blackAlpha.200'}>Commission Payable</Td>
                                                    <Td borderColor={'blackAlpha.200'}>${((matrix.reduce((a, b) => a + b.matchMatchCommission, 0))).toFixed(2)}</Td>
                                                </Tr>
                                                <Tr fontWeight={'bold'}>
                                                    <Td borderColor={'blackAlpha.200'}>Profit</Td>
                                                    <Td borderColor={'blackAlpha.200'}>${(((price * subscriptions) - matrix.reduce((a, b) => a + b.matchMatchCommission, 0))).toFixed(2)}</Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </CardBody>
                                </Card>

                                <Card bg='yellow.400' color={'blackAlpha.700'}>
                                    <CardHeader borderBottom='1px' borderColor='blackAlpha.500'>
                                        <Heading as='h5' fontSize={'16px'}>Yearly</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Table size={'sm'}>
                                            <Tbody>
                                                <Tr>
                                                    <Td borderColor={'blackAlpha.200'}>Total</Td>
                                                    <Td borderColor={'blackAlpha.200'}>${(price * subscriptions) * 12}</Td>
                                                </Tr>
                                                <Tr>
                                                    <Td borderColor={'blackAlpha.200'}>Commission Payable</Td>
                                                    <Td borderColor={'blackAlpha.200'}>${((matrix.reduce((a, b) => a + b.matchMatchCommission, 0)) * 12).toFixed(2)}</Td>
                                                </Tr>
                                                <Tr fontWeight={'bold'}>
                                                    <Td borderColor={'blackAlpha.200'}>Profit</Td>
                                                    <Td borderColor={'blackAlpha.200'}>${(((price * subscriptions) - matrix.reduce((a, b) => a + b.matchMatchCommission, 0)) * 12).toFixed(2)}</Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </SimpleGrid>}

                        </Box>

                        <Box>
                            <Flex gap={10}>
                                {matrix.length > 0 &&
                                    <Box py={5}>
                                        <Text>Matrix Commissions</Text>
                                        {matrix.map((item, index) => {
                                            return <Box key={index} bg='white' shadow={'md'} mb={3} p={3}>
                                                <Flex w='400px' justify={'space-between'}>
                                                    <Box>
                                                        {item.level} ({item.percentage}%)
                                                    </Box>
                                                    <Box>
                                                        ${(item.commission)?.toFixed(2)} +  {(item.matchMatchCommission - item.commission).toFixed(2)}
                                                    </Box>
                                                    <Box>
                                                        ${(item.matchMatchCommission)?.toFixed(2)}
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        })}
                                        <Box bg='teal' color='white' shadow={'md'} mb={3} p={3}>
                                            <Flex w='full' justify={'space-between'}>
                                                <Box>
                                                    Total commissions payable
                                                </Box>
                                                <Box>
                                                    {/* - */}
                                                </Box>
                                                <Box>
                                                    ${matrix.reduce((a, b) => a + b.matchMatchCommission, 0)?.toFixed(2)}
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Box>
                                }
                                {/* 
                                {match.length > 0 &&
                                    <Box py={5}>
                                        <Text>Mentoring Bonus (Match)</Text>
                                        {match.map((item, index) => {
                                            return <Box key={index} bg='white' shadow={'md'} mb={3} p={3}>
                                                <Flex w='250px' justify={'space-between'}>
                                                    <Box>
                                                        {item.level}
                                                    </Box>
                                                    <Box>
                                                        ${(item.commission)?.toFixed(2)}
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        })}
                                        <Box bg='teal' color={'white'} shadow={'md'} mb={2} p={3}>
                                            <Flex justify={'space-between'}>
                                                <Box>
                                                    Total
                                                </Box>
                                                <Box>
                                                    ${match.reduce((a, b) => a + b.commission, 0)?.toFixed(2)}
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Box>
                                } */}
                            </Flex>
                        </Box>
                    </CardBody>
                </Card>

            </SafeArea>
        </AdminLayout>
    )
}
