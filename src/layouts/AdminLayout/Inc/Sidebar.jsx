import MenuItem from '@/Components/Common/Dashboard/Sidebar/MenuItem'
import UserCard from '@/Components/Common/Dashboard/Sidebar/UserCard'
import LogoMain from '@/Components/Common/LogoMain'
import { Avatar, Box, Button, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsCalendarEvent, BsCart, BsCreditCard, BsGearFill } from 'react-icons/bs'
import { FaClipboardCheck, FaMoneyBill, FaNetworkWired, FaTree, FaVideo } from 'react-icons/fa'
import { FiBell } from 'react-icons/fi'
import { HiCode, HiCollection, HiUserGroup } from 'react-icons/hi'
import { MdContactSupport, MdHome } from 'react-icons/md'

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

                <UserCard />

                <Flex
                    direction="column"
                    as="nav"
                    fontSize="sm"
                    color="gray.600"
                    aria-label="Main Navigation"
                >

                    <MenuItem
                        icon={MdHome}
                        title='Dashboard'
                        link='/admin/home'
                    />


                    <MenuItem
                        icon={FaNetworkWired}
                        title='My Downline'
                        link='/admin/my_downline'
                    />

                    <MenuItem
                        icon={HiCollection}
                        title='Manage Products'
                        submenus={[
                            { title: 'All Products', link: '/admin/products/all', show: true },
                            { title: 'Add new product', link: '/admin/products/add', show: true },
                        ]}
                    />


                    <MenuItem
                        icon={HiUserGroup}
                        title='Manage Users'
                        submenus={[
                            { title: 'All Users', link: '/admin/users/all', show: true },
                            { title: 'Retail Users', link: '/admin/users/retail', show: true },
                            { title: 'Notify all users', link: '/admin/users/notify', show: true },
                        ]}
                    />



                    <MenuItem
                        icon={BsCart}
                        title='Perchases'
                        submenus={[
                            { title: 'All purchase', link: '/admin/purchase/all', show: true },
                            { title: 'Create Order', link: '/admin/purchase/create_order', show: true },

                        ]}
                    />

                    <MenuItem
                        icon={BsCreditCard}
                        title='Manage Payouts'
                        submenus={[
                            { title: 'Pending Payouts', link: '/admin/payouts/pending', show: true },
                            { title: 'Cleared Payouts', link: '/admin/payouts/cleared', show: true },

                        ]}
                    />

                    <MenuItem
                        icon={FaMoneyBill}
                        title='Commissions'
                        submenus={[
                            { title: 'Fast Start', link: '/admin/commissions/fast_start', show: true },
                            { title: 'Matrix', link: '/admin/commissions/matrix', show: true },
                            { title: 'Matrix Match', link: '/admin/commissions/matrix_match', show: true },
                            { title: 'All Commissions', link: '/admin/commissions/all', show: true },
                        ]}
                    />


                    <MenuItem
                        icon={BsCalendarEvent}
                        title='Subscriptions'
                        submenus={[
                            { title: 'All Subscriptions', link: '/admin/subscriptions/all', show: true },
                        ]}
                    />


                    <MenuItem
                        icon={FiBell}
                        title='Notifications'
                        link='/admin/notifications'
                    />

                    <MenuItem
                        icon={FaVideo}
                        title='Zoom Conference'
                        link='/admin/zoom'
                    />


                    <MenuItem
                        icon={MdContactSupport}
                        title='Support Tickes'
                        submenus={[
                            { title: 'All Tickets', link: '/admin/support_ticket/all', show: true },
                            { title: 'Pending Tickets', link: '/admin/support_ticket/pending', show: true },
                            { title: 'Closed Tickets', link: '/admin/support_ticket/closed', show: true },
                            { title: 'Answered Tickets', link: '/admin/support_ticket/answered', show: true },
                        ]}
                    />


                    <MenuItem
                        icon={BsGearFill}
                        title='System Settings'
                        link='/admin/settings'
                    />

                </Flex>
            </Box>

        </Box>
    )
}
