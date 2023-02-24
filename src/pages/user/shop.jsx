import UserLayout from '@/layouts/UserLayout'
import React, { useContext } from 'react'
import Axios from '@/Helpers/Axios'
import fetcher from '@/Helpers/fetcher'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Card, CardBody, CardHeader, Heading, Flex, Button, Icon, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Text, Image, Menu, MenuButton, MenuList, MenuItem, Switch, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { BsPlus } from 'react-icons/bs'
import { FaPencilAlt, FaPlus } from 'react-icons/fa'
import { HiTrash } from 'react-icons/hi'
import useSWR from 'swr'
import SafeArea from '@/Components/Common/Dashboard/SafeArea'
import { ProductCard } from '@/Components/Common/Dashboard/Products/ProductCard'
import { SimpleGrid } from '@mantine/core'
import { CartContext } from '@/Contexts/CartContext'

export default function shop() {

  const { data, error, isLoading, mutate } = useSWR('/shop/products', fetcher)

  return (
    <UserLayout
      title='Xcelerate Shop'
      breads={[
        {
          title: 'Xcelerate Shop',
          link: '/user/shop'
        }
      ]}
    >
      <SafeArea>
        <Card>
          <CardHeader borderBottom={'1px'} borderColor='gray.200'>
            <Flex alignItems='center' justify='space-between'>
              <Heading as='h6' fontSize={'lg'}>Xcelerate Shop</Heading>
              {/* <Link href='/admin/products/add'>
              <Button leftIcon={<Icon as={FaPlus} />} size='sm' rounded={'none'} colorScheme='teal'>
                Add new product
              </Button>
            </Link> */}
            </Flex>
          </CardHeader>
          <CardBody>

            {data?.products?.length ?

              <SimpleGrid cols={4}>
                {data?.products?.map((product, i) => <Box key={i}>
                  <ProductCard product={product} description={false}/>
                </Box>)}

              </SimpleGrid>

              : <Text>No data found</Text>}

          </CardBody>
        </Card>

      </SafeArea>
    </UserLayout>
  )
}
