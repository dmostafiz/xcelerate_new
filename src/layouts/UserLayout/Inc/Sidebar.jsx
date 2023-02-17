import MenuItem from '@/Components/Common/Dashboard/Sidebar/MenuItem'
import LogoMain from '@/Components/Common/LogoMain'
import { Avatar, Box, Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsBell, BsCalendarEvent, BsGearFill } from 'react-icons/bs'
import { FaClipboardCheck, FaMoneyBill, FaNetworkWired, FaTree } from 'react-icons/fa'
import { HiCode, HiCollection } from 'react-icons/hi'
import { MdContactPhone, MdContacts, MdHome } from 'react-icons/md'

export default function Sidebar(props) {
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg="#004453"
            borderColor="blackAlpha.300"
            borderRightWidth="1px"
            w="60"
            {...props}
            className='sidebar'
        >
            <Flex pos={'fixed'} zIndex={'sticky'} bg='#004453' w={{ base: 'full', md: '60' }} px="4" py="5px" align="center">
                <Box w={'150px'}>
                    <LogoMain />
                </Box>
            </Flex>
            <Box pt={14}>
                <Box py={4} mb={5} bg='whiteAlpha.100' shadow='sm'>
                    <VStack direction={'column'}>
                        <Avatar
                            ml="4"
                            size="md"
                            name="anubra266"
                            src="https://avatars.githubusercontent.com/u/30869823?v=4"
                            cursor="pointer"
                        />
                        <Box textAlign={'center'}>
                            <Heading as='h6' size='sm' color='white'>
                                Mr. Robinhood
                            </Heading>
                            <Text fontSize={'xs'} color='whiteAlpha.700'>~robinhood</Text>
                        </Box>
                        <HStack pt={2}>
                            <Button colorScheme={'teal'} size='xs' rounded={'none'}>My Profile</Button>
                            <Button colorScheme={'yellow'} bg='yellow.500' size='xs' rounded={'none'}>Logout</Button>
                        </HStack>
                    </VStack>
                </Box>
                <Flex
                    direction="column"
                    as="nav"
                    fontSize="sm"
                    color="gray.600"
                    aria-label="Main Navigation"
                >

                    <MenuItem
                        icon={MdHome}
                        title='My Home'
                        link='/user/home'
                    />


                    <MenuItem
                        icon={FaNetworkWired}
                        title='My Downline'
                        link='/user/my_downline'
                    />

                    <MenuItem
                        icon={HiCollection}
                        title='Order Products'
                        link='/user/shop'
                    />

                    <MenuItem
                        icon={FaClipboardCheck}
                        title='Order Placed'
                        link='/user/order_placed'
                    />

                    <MenuItem
                        icon={HiCode}
                        title='Personals'
                        submenus={[
                            { title: 'Member Sponsor List', link: '/home/products/labels', show: true },
                            { title: 'Retail Sponsor List', link: '/home/products', show: true },
                        ]}
                    />

                    <MenuItem
                        icon={FaMoneyBill}
                        title='Commissions'
                        submenus={[
                            { title: 'Fast Start', link: '/user/commissions/fast_start', show: true },
                            { title: 'Matrix', link: '/user/commissions/matrix', show: true },
                            { title: 'Matrix Match', link: '/user/commissions/matrix_match', show: true },
                            { title: 'All Commissions', link: '/user/commissions/all', show: true },
                        ]}
                    />

                    <MenuItem
                        icon={BsCalendarEvent}
                        title='Subscriptions'
                        link='/user/subscriptions'
                    />

                    <MenuItem
                        icon={MdContacts}
                        title='Support Tickets'
                        submenus={[
                            { title: 'Creat new ticket', link: '/user/support_ticket/create', show: true },
                            { title: 'View tickets', link: '/user/support_ticket/view', show: true },
                        ]}
                    />

                    <MenuItem
                        icon={BsBell}
                        title='Notifications'
                        link='/user/notifications'
                    />



                    {/* <MenuItem
                        icon={BsGearFill}
                        title='Settings'
                        link='/settings'
                    /> */}

                </Flex>
            </Box>
        </Box>
    )
}
