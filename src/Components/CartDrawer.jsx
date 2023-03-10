import { Icon, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, useDisclosure, Box, Badge, Flex, Heading, Image, Wrap, Text, Divider, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Center, Table, Tbody, Tr, Td } from "@chakra-ui/react"

import { CartContext } from "@/Contexts/CartContext"
import React, { useContext } from "react"
import { BsCart, BsCart2, BsCart4, BsX } from "react-icons/bs"
import { MdRemove } from "react-icons/md"
import { ActionIcon, Group, NumberInput } from "@mantine/core"
import { useRouter } from "next/router"
import CartComponent from "./CartComponent"

export default function CartDrawer() {

    const router = useRouter()

    const btnRef = React.useRef()
    const {
        addItem,
        cartTotal,
        emptyCart,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        isOpen,
        onOpen,
        onClose
    } = useContext(CartContext)

    const handleGotoCheckout = () => {
        onClose()
        router.push("/user/checkout")
    }

    return (
        <>
            <Box position='relative'>
                <Icon
                    position='relative'
                    // top={-3}
                    fontSize={'20px'}
                    color="#0f505d"
                    as={BsCart2}
                    cursor="pointer"
                    ref={btnRef}
                    onClick={onOpen}
                />
                <Badge position={'absolute'} colorScheme='teal' rounded={'full'} top={-2} ml='-1' px={'6px'} fontSize={'14px'} variant='solid'>
                    {totalUniqueItems}
                </Badge>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader shadow={'sm'} borderBottom={'1px'} borderColor='gray.200'>
                        Cart {' '}
                        <Text as='span' fontSize={'15px'} fontWeight='thin'>
                            ({totalUniqueItems} items)
                        </Text>
                        {!isEmpty && <Button px={2} ml={3} onClick={emptyCart} size='sm' rounded={'full'} variant='outline' colorScheme='red'>Clear Cart</Button>}

                    </DrawerHeader>

                    <DrawerBody py={5}> 
                      <CartComponent />
                    </DrawerBody>

                    <DrawerFooter bg='t.100'>

                        <Flex w='full' direction={'column'} gap={3} alignItems='flex-start'>
                            <Box w='full'>
                                <Heading mb={2} as='h4' fontSize={'18px'}>
                                    Summery
                                </Heading>
                                <Divider />
                                <Table size={'sm'}  >
                                    <Tbody>
                                        <Tr>
                                            <Td>Cart total</Td>
                                            <Td isNumeric><Text fontSize={'18px'}>${cartTotal?.toFixed(2)}</Text></Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </Box>
                            {/* 
                            {!isEmpty && <>
                                <Box>
                                    <Wrap>
                                        <Flex gap={2} alignItems='center'>
                                            <Text>Cart Total: </Text>
                                            <Text fontSize={'24px'}>${cartTotal.toFixed(2)}</Text>
                                        </Flex>
                                    </Wrap>
                                </Box>
                                <Divider />
                            </>} */}
                            <Flex w='full'>
                                <Button size='sm' rounded={'none'} variant='outline' mr={3} onClick={onClose}>
                                    Continue shopping
                                </Button>
                                {!isEmpty && <Button flex='1' onClick={handleGotoCheckout} size='sm' rounded={'none'} colorScheme='teal'>Proceed to checkout</Button>}
                            </Flex>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}