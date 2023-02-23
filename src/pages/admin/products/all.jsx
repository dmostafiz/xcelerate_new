import SafeArea from '@/Components/Common/Dashboard/SafeArea'
import Axios from '@/Helpers/Axios'
import fetcher from '@/Helpers/fetcher'
import AdminLayout from '@/layouts/AdminLayout'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Card, CardBody, CardHeader, Heading, Flex, Button, Icon, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Text, Image, Menu, MenuButton, MenuList, MenuItem, Switch } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { FaPencilAlt, FaPlus } from 'react-icons/fa'
import { HiTrash } from 'react-icons/hi'
import useSWR from 'swr'

export default function all() {

  const { data, error, isLoading, mutate } = useSWR('/product', fetcher)

  const handleStatus = async (id) => {
    const response = await Axios.put(`product/${id}/status`)
    mutate()
  }
  // console.log(data)
  return (
    <AdminLayout
      title='All Products'
      breads={[
        {
          title: 'All Products',
          link: '/admin/products/all'
        }
      ]}
    >
      <SafeArea>
        <Card>
          <CardHeader borderBottom={'1px'} borderColor='gray.200'>
            <Flex alignItems='center' justify='space-between'>
              <Heading as='h6' fontSize={'lg'}>Product List</Heading>
              <Link href='/admin/products/add'>
                <Button leftIcon={<Icon as={FaPlus} />} size='sm' rounded={'none'} colorScheme='teal'>
                  Add new product
                </Button>
              </Link>
            </Flex>
          </CardHeader>
          <CardBody>

            {data?.products?.length ? <TableContainer p={0}>
              <Table variant='simple' p={0}>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                  <Tr>
                    <Th>#</Th>
                    <Th>Image</Th>
                    <Th>Name</Th>
                    <Th>Width</Th>
                    <Th>Height</Th>
                    <Th>weight</Th>
                    <Th>Price</Th>
                    <Th>CV</Th>
                    <Th>Active</Th>
                    <Th isNumeric>#</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.products?.map((product, i) => <Tr key={i}>
                    <Td>{i + 1}</Td>
                    <Td>
                      <Image w={'60px'} src={product?.image?.url} alt={product.title} />
                    </Td>
                    <Td>{product.name}</Td>
                    <Td>{product.width} ({product.distance_unit})</Td>
                    <Td>{product.height} ({product.distance_unit})</Td>
                    <Td>{product.weight} ({product.mass_unit})</Td>
                    <Td>${product.price}</Td>
                    <Td>{product.cv}</Td>
                    <Td>
                      <Switch onChange={() => handleStatus(product.id)} isChecked={product.status} size='md' />
                    </Td>
                    <Td isNumeric>
                      <Menu>
                        <MenuButton as={Button} size='sm' rightIcon={<ChevronDownIcon />}>
                          Actions
                        </MenuButton>
                        <MenuList>
                          <MenuItem icon={<FaPencilAlt />}>Edit</MenuItem>
                          <MenuItem color='red' icon={<HiTrash />}>Delete</MenuItem>
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
