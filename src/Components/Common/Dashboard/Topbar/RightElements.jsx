import CartDrawer from '@/Components/CartDrawer'
import { AuthContext } from '@/Contexts/AuthContext'
import { ChevronDownIcon, LockIcon } from '@chakra-ui/icons'
import { Avatar, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { BsBell, BsEnvelope, BsFillEnvelopeFill } from 'react-icons/bs'
import { FaBell, FaPowerOff, FaUser } from 'react-icons/fa'

export default function RightElements() {
    const { logoutUser, authUser } = useContext(AuthContext)

    return (
        <Flex align="center" gap={4}>
            <Icon fontSize={'20px'} color="#0f505d" as={BsBell} cursor="pointer" />
            <Icon fontSize={'20px'} color="#0f505d" as={BsEnvelope} cursor="pointer" />

            <CartDrawer />

            <Menu>
                <MenuButton px={0} py={0} bg='' _hover='' _active='' as={Button} rightIcon={<ChevronDownIcon />}>
                    <Avatar
                        ml="4"
                        size="xs"
                        name="anubra266"
                        src={authUser?.avatar}
                        cursor="pointer"
                    />
                </MenuButton>
                <MenuList>
                    <MenuItem icon={<FaUser />}>Profile</MenuItem>
                    <MenuItem onClick={() => logoutUser('/')} icon={<FaPowerOff />}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}
