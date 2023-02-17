import Breadcrumps from '@/Components/Common/Dashboard/Breadcrumps'
import { Avatar, Flex, IconButton, Input, InputGroup, InputLeftElement, Icon, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { FiMenu, FiSearch } from 'react-icons/fi'

export default function TopNav({ sidebar, title = '', breads = [] }) {
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
            borderColor="blackAlpha.200"
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

            <Flex alignItems={'center'} justify='space-between' w='full' gap={20}>

                <Box pl={{base: 5, md: 0}}>
                    <Heading as='h6' noOfLines={1} fontSize={{base: 'sm', md:'md'}}>{title}</Heading>
                    {breads.length > 0 && <Breadcrumps breads={breads} />}
                </Box>

                <InputGroup
                    flex={1}
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

                <Box
                    // bg='yellow.500'
                    // px={5} py={'7px'}
                    rounded='full'
                // pos={'absolute'}
                // right='0' top='0'
                >
                    <Flex align="center" gap={4}>
                        <Icon fontSize={'20px'} color="#0f505d" as={FaBell} cursor="pointer" />
                        <Icon fontSize={'20px'} color="#0f505d" as={BsFillEnvelopeFill} cursor="pointer" />
                        <Avatar
                            ml="4"
                            size="sm"
                            name="anubra266"
                            src="https://avatars.githubusercontent.com/u/30869823?v=4"
                            cursor="pointer"
                        />
                    </Flex>
                </Box>
            </Flex>

        </Flex>

    )
}
