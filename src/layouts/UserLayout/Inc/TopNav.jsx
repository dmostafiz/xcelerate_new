import { Avatar, Flex, IconButton, Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FiMenu, FiSearch } from 'react-icons/fi'

export default function TopNav({sidebar}) {
    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg="white"
            _dark={{
                bg: "gray.800",
            }}
            borderBottomWidth="1px"
            borderColor="blackAlpha.300"
            h="14"
        >
            <IconButton
                aria-label="Menu"
                display={{
                    base: "inline-flex",
                    md: "none",
                }}
                onClick={sidebar.onOpen}
                icon={<FiMenu />}
                size="sm"
            />
            <InputGroup
                w="96"
                display={{
                    base: "none",
                    md: "flex",
                }}
            >
                <InputLeftElement color="gray.500">
                    <FiSearch />
                </InputLeftElement>
                <Input
                    borderColor={'blackAlpha.200'}
                    _focus={{
                        ring: '0',
                        borderColor: 'blackAlpha.100'
                    }}
                    placeholder="Search for articles..."
                />
            </InputGroup>

            <Flex align="center">
                <Icon color="gray.500" as={FaBell} cursor="pointer" />
                <Avatar
                    ml="4"
                    size="sm"
                    name="anubra266"
                    src="https://avatars.githubusercontent.com/u/30869823?v=4"
                    cursor="pointer"
                />
            </Flex>
        </Flex>

    )
}
