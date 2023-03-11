import SafeArea from '@/Components/Common/Dashboard/SafeArea'
import CancelSubscription from '@/Components/Common/Dashboard/Subscription/CancelSubscription'
import CreateAffiliateMemberSubscription from '@/Components/Common/Dashboard/Subscription/CreateAffiliateMemberSubscription'
import CreateOnlyMemberSubscription from '@/Components/Common/Dashboard/Subscription/CreateOnlyMemberSubscription'
import NoDataFound from '@/Components/Common/NoDataFound'
import ComponentLoader from '@/Components/ComponentLoader'
import Axios from '@/Helpers/Axios'
import fetcher from '@/Helpers/fetcher'
import useUser from '@/Hooks/useUser'
import UserLayout from '@/layouts/UserLayout'
import { Box, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, Image, List, ListIcon, ListItem, Icon, Text, Badge } from '@chakra-ui/react'
import moment from 'moment'
import React, { useEffect } from 'react'
import { MdCheckCircle, MdCheckCircleOutline } from 'react-icons/md'
import useSWR from 'swr'

export default function subscriptions() {

  const { isError, error, authUser, logoutUser } = useUser()
  const [customer, setCustomer] = React.useState(null)
  const [subscriptions, setSubscriptions] = React.useState([])

  const { data, isLoading } = useSWR('/subscription/customer', fetcher)

  console.log('Customer Data', data)

  return (
    <UserLayout
      title='Subscriptions'
      breads={[
        {
          title: 'Subscriptions',
          link: '/user/subscriptions'
        }
      ]}
    >

      <SafeArea>

        {authUser?.is_affiliate == false && <Card
          direction={{ base: 'column', sm: 'row' }}
          alignItems={['start', 'center']}
          overflow='hidden'
          variant='outline'
          bg='white'
          shadow={'sm'}
          mb={4}
          p={5}
        >
          {authUser?.is_member == false
            ? <Image
              objectFit='contain'
              maxW={{ base: '100%', sm: '200px' }}
              src='https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-client-user-costs-employee-finance-money-person-blue-icon-png-image_1649029.jpg'
              alt='Caffe Latte'
            />
            : <Center p={5}>
              <Icon fontSize={'180px'} as={MdCheckCircle} color='green.500' />
            </Center>}


          <CardBody>
            <Heading mb={3} size='md'>
              {authUser?.is_member == true && <>
                <Badge colorScheme={'green'}>
                  Activated
                </Badge>
                <br />
              </>
              }
              Membership Plan
            </Heading>


            <List spacing={1} color='gray.500'>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Members get access to exclusive Member only pricing on Xcelerate products and service.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Member pricing of 50% - 70% off of regular retail pricing.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Members can also earn Loyalty Reward Points that can be redeemed for free product.
              </ListItem>
            </List>
          </CardBody>

          <CardFooter>
            <Box>
              <Text mb={3}>
                <Text as='span' fontWeight={'bold'} fontSize='xl'>$10</Text>
                <Text as={'span'}> / </Text>
                <Text as={'span'}>MONTH</Text>
              </Text>
              {authUser?.is_member == false
                ? <CreateOnlyMemberSubscription />
                : <CancelSubscription apiTo={'/subscription/cancelOnlyMember'} />
              }
            </Box>
          </CardFooter>

        </Card>}

        <Card
          direction={{ base: 'column', sm: 'row' }}
          alignItems={['start', 'center']}
          overflow='hidden'
          variant='outline'
          bg='white'
          shadow={'sm'}
          p={5}
        >
          {authUser?.is_affiliate == false
            ? <Image
              objectFit='contain'
              maxW={{ base: '100%', sm: '200px' }}
              src='https://cdn.leadfox.co/upload/7/1_1.png'
              alt='Caffe Latte'
            />
            : <Center p={5}>
              <Icon fontSize={'180px'} as={MdCheckCircle} color='green.500' />
            </Center>}


          <CardBody>
            <Heading size='md' mb={3}>
              {authUser?.is_affiliate == true && <>
                <Badge colorScheme={'green'}>
                  Activated
                </Badge>
                <br />
              </>
              }
              Affiliate membership plan (Earn Commissions)
            </Heading>

            <List spacing={1} color='gray.500'>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Affiliates receive all of the benefits of a Membership plan.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Monthly subscription to exclusive marketing and training products and license to resell Xcelerate products and services.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Ability to refer other Members and Affiliates.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                Affiliates also have access to the full Xcelerate compensation plan.
              </ListItem>
            </List>
          </CardBody>

          <CardFooter>
            <Box>
              <Text>
                <Text as='span' fontWeight={'bold'} fontSize='xl'>$40</Text>
                <Text as={'span'}> / </Text>
                <Text as={'span'}>YEAR +</Text>
              </Text>
              <Text mb={3}>
                <Text as='span' fontWeight={'bold'} fontSize='xl'>$20</Text>
                <Text as={'span'}> / </Text>
                <Text as={'span'}>MONTH</Text>
              </Text>
              {authUser?.is_affiliate == false
                ? <CreateAffiliateMemberSubscription />
                : <CancelSubscription apiTo='/subscription/cancelAffiliateMember' />
              }
            </Box>
          </CardFooter>

        </Card>

        <Card
          my={5}
        >
          <CardHeader borderBottom={'1px'} borderColor='gray.200'>
            <Heading fontSize={'lg'}>My Active Subscriptions</Heading>
          </CardHeader>

          <CardBody p={2}>
            {data?.subscriptions.length && !isLoading ? <Flex gap={2} direction={{ base: 'column', lg: 'column' }}>
              {data?.subscriptions.map((item, index) => (
                <Box key={index} bg={item.stripe_data?.status == 'active' ? 'teal' : 'red.400'} rounded={'xl'} shadow='md' p={3} color='white'>
                  <Flex gap={{base: 2, lg:10}} alignItems={{ base: 'start', lg: 'center' }} direction={{ base: 'column', lg: 'row' }}>

                    <Box>
                      <Text fontWeight={'bold'}>Subscription ID</Text>
                      <Text color={'whiteAlpha.700'} fontSize='14px'>{item.subscription?.stripe_sub_id}</Text>
                    </Box>

                    <Box>
                      <Text fontWeight={'bold'}>Billing</Text>
                      <Text color={'whiteAlpha.700'} fontSize='14px'>{item.subscription?.type == 'month' ? 'Monthly' : 'Yearly'}</Text>
                    </Box>

                    <Box>
                      <Text fontWeight={'bold'}>Amount</Text>
                      <Text color={'whiteAlpha.700'} fontSize='14px'>${item.subscription?.amount}</Text>
                    </Box>

                    <Box>
                      <Text fontWeight={'bold'}>Status</Text>
                      <Text color={'whiteAlpha.700'} fontSize='14px'>{item.stripe_data?.status}</Text>
                    </Box>


                    <Box>
                      <Text fontWeight={'bold'}>Started</Text>
                      <Text color={'whiteAlpha.700'} fontSize='14px'>
                        {moment(item.stripe_data?.current_period_start * 1000).format('ll')}
                      </Text>
                    </Box>

                    <Box>
                      <Text fontWeight={'bold'}>Next Billing</Text>
                      <Text color={'whiteAlpha.700'} fontSize='14px'>
                        {moment(item.stripe_data?.current_period_end * 1000).format('ll')}
                      </Text>
                    </Box>


                  </Flex>
                </Box>
              ))}

            </Flex>
              : !isLoading ? <NoDataFound text='No subscriptions found!' />
                : isLoading && <ComponentLoader />}

          </CardBody>

        </Card>

      </SafeArea>

    </UserLayout>
  )
}
