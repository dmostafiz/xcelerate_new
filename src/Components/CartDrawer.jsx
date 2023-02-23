import { Icon, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, useDisclosure, Box, Badge, Flex, Heading, Image, Wrap, Text, Divider, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Center } from "@chakra-ui/react"

import { CartContext } from "@/Contexts/CartContext"
import React, { useContext } from "react"
import { BsCart, BsCart2, BsCart4, BsX } from "react-icons/bs"
import { MdRemove } from "react-icons/md"

export default function CartDrawer() {

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
                <Badge position={'absolute'} colorScheme='teal' rounded={'full'} top={-2} ml='1'>
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
                    <DrawerHeader borderBottom={'1px'} borderColor='gray.200'>
                        Cart ({totalUniqueItems})
                        {!isEmpty && <Button onClick={emptyCart} size='sm' rounded={'none'} variant='ghost' colorScheme='red'>Clear Cart</Button>}

                    </DrawerHeader>

                    <DrawerBody>
                        <Box>
                            {!isEmpty ? <Flex direction={'column'} gap={2}>
                                {items.map((item, i) => {
                                    return <>
                                        <Flex key={i} gap={3}>
                                            <Box p={2} border='1px' borderColor='gray.200' rounded='md' width={'60px'}>
                                                <Image objectFit={'fill'} src={item?.image?.url} />
                                            </Box>
                                            <Box>
                                                <Heading color={'blackAlpha.800'} as={'h4'} fontSize='sm'>
                                                    {item?.name}
                                                </Heading>
                                                <Wrap mb={2}>
                                                    <Text fontSize={'14px'} color={'blackAlpha.500'}>${item?.price} ({item?.quantity} items)</Text>
                                                </Wrap>
                                                <Wrap>
                                                    <NumberInput
                                                        _focus={{ border: 'none', boxShadow: 'none' }}
                                                        _active={{ borderColor: 'none', boxShadow: 'none' }}
                                                        defaultValue={item?.quantity}
                                                        w='80px'
                                                        size='xs'
                                                        min={1}
                                                        max={20}
                                                    >
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper onClick={() => updateItemQuantity(item?.id, item.quantity + 1)} />
                                                            <NumberDecrementStepper onClick={() => updateItemQuantity(item?.id, item.quantity - 1)} />
                                                        </NumberInputStepper>
                                                    </NumberInput>

                                                    <IconButton
                                                        rounded={'none'}
                                                        onClick={() => removeItem(item.id)}
                                                        size='xs'
                                                        variant='outline'
                                                        colorScheme='red'
                                                        aria-label='Reove Item'
                                                        icon={<BsX />}
                                                    />

                                                </Wrap>
                                            </Box>
                                        </Flex>
                                        <Divider />
                                    </>
                                })}
                            </Flex>
                                : <Center py={5}>
                                    <Text color={"gray.400"}>Cart is empty</Text>
                                </Center>}
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Flex w='full' direction={'column'} gap={3} alignItems='flex-start'>
                            {!isEmpty && <>
                                <Box>
                                    <Wrap>
                                        <Flex gap={2} alignItems='center'>
                                            <Text>Cart Total: </Text>
                                            <Text fontSize={'24px'}>${cartTotal}</Text>
                                        </Flex>
                                    </Wrap>
                                </Box>
                                <Divider />
                            </>}
                            <Flex>
                                <Button size='sm' rounded={'none'} variant='outline' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                {!isEmpty && <Button onClick={emptyCart} size='sm' rounded={'none'} colorScheme='teal'>Proceed to checkout</Button>}
                            </Flex>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}