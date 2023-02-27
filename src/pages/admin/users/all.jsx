import SafeArea from '@/Components/Common/Dashboard/SafeArea'
import Axios from '@/Helpers/Axios'
import fetcher from '@/Helpers/fetcher'
import AdminLayout from '@/layouts/AdminLayout'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Card, CardBody, CardHeader, Heading, Flex, Button, Icon, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Text, Image, Menu, MenuButton, MenuList, MenuItem, Switch, Avatar, Badge } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaEnvelope, FaEye, FaList, FaPencilAlt, FaPlus } from 'react-icons/fa'
import { FiFilter } from 'react-icons/fi'
import { HiTrash } from 'react-icons/hi'
import useSWR from 'swr'

export default function all() {

  const { data, error, isLoading, mutate } = useSWR('/users', fetcher)

  const handleStatus = async (id) => {
    const response = await Axios.put(`product/${id}/status`)
    mutate()
  }
  // console.log(data)
  return (
    <AdminLayout
      title='All Users'
      breads={[
        {
          title: 'All Users',
          link: '/admin/users/all'
        }
      ]}
    >
      <SafeArea>
        <Card>
          <CardHeader borderBottom={'1px'} borderColor='gray.200'>
            <Flex alignItems='center' justify='space-between'>
              <Heading as='h6' fontSize={'lg'}>User List</Heading>
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
                    <Th>Balance</Th>
                    <Th>Active</Th>
                    <Th isNumeric>#</Th>
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
                      <Badge>{'Inactive'}</Badge>
                    </Td>
                    <Td>5</Td>
                    <Td>0</Td>
                    <Td>${23}</Td>
                    <Td>
                      <Switch onChange={() => handleStatus(user.id)} isChecked={user.status} size='md' />
                    </Td>
                    <Td isNumeric>
                      <Menu>
                        <MenuButton as={Button} size='sm' rightIcon={<ChevronDownIcon />}>
                          Actions
                        </MenuButton>
                        <MenuList>
                        <MenuItem icon={<FaEye />}>View Profile</MenuItem>

                          <MenuItem icon={<FaPencilAlt />}>Edit Profile</MenuItem>
                          <MenuItem icon={<FaList />}>Order Activities</MenuItem>
                          <MenuItem icon={<FaEnvelope />}>Send Email</MenuItem>
                          <MenuItem color='red' icon={<HiTrash />}>Delete User</MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>)}

                </Tbody>
              </Table>
            </TableContainer>

              : <Text>No data found</Text>}

          </CardBody>
        </Card>
      </SafeArea>
    </AdminLayout>
  )
}
