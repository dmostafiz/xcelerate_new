import UserLayout from '@/layouts/UserLayout'
import React from 'react'
import SafeArea from '@/Components/Common/Dashboard/SafeArea'
import Axios from '@/Helpers/Axios'
import fetcher from '@/Helpers/fetcher'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Card, CardBody, CardHeader, Heading, Flex, Button, Icon, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Text, Image, Menu, MenuButton, MenuList, MenuItem, Switch, Avatar, Badge, Center } from '@chakra-ui/react'
import Link from 'next/link'
import { BsPlus } from 'react-icons/bs'
import { FaEnvelope, FaEye, FaList, FaPencilAlt, FaPlus } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'
import { HiTrash } from 'react-icons/hi'
import useSWR from 'swr'
import NoDataFound from '@/Components/Common/NoDataFound'

export default function member_sponsor_list() {

    const { data, error, isLoading, mutate } = useSWR('/sponsors/member', fetcher)

    // console.log(data)
    return (
        <UserLayout
            title='Member sponsors'
            breads={[
                {
                    title: 'Member sponsors',
                    link: '/user/personals/member_sponsor'
                }
            ]}
        >
            <SafeArea>
                <Card>
                    <CardHeader borderBottom={'1px'} borderColor='gray.200'>
                        <Flex alignItems='center' justify='space-between'>
                            <Heading as='h6' fontSize={'lg'}>Member Sponsors</Heading>
                            <Link href='/admin/products/add'>
                                <Button leftIcon={<FiFilter as={FaPlus} />} size='sm' rounded={'none'} colorScheme='teal'>
                                    Filter Users
                                </Button>
                            </Link>
                        </Flex>
                    </CardHeader>
                    <CardBody>

                        {data?.users?.length ? <TableContainer p={0}>
                            <Table variant='simple' p={0}>
                                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                                <Thead>
                                    <Tr>
                                        <Th>#</Th>
                                        <Th>Image</Th>
                                        <Th>User</Th>
                                        <Th>Membership</Th>
                                        <Th>Orders</Th>
                                        <Th>Recurring</Th>
                                        <Th>Sales</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data?.users?.map((user, i) => <Tr key={i}>
                                        <Td>{i + 1}</Td>
                                        <Td>
                                            <Avatar src={user?.avatar} alt={user.full_name} />
                                        </Td>
                                        <Td>
                                            {user.full_name}<br />
                                            {user.email}
                                        </Td>
                                        <Td>
                                            <Badge colorScheme={'green'}>{'Active'}</Badge>
                                        </Td>
                                        <Td>5</Td>
                                        <Td>0</Td>
                                        <Td>${0}</Td>
                                    </Tr>)}

                                </Tbody>
                            </Table>
                        </TableContainer>

                            : <NoDataFound text='No member sponsors found!' />}

                    </CardBody>
                </Card>
            </SafeArea>
        </UserLayout>
    )
}
