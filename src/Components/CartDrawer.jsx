import { Icon, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, useDisclosure, Box, Badge, Flex, Heading, Image, Wrap, Text, Divider, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Center, Table, Tbody, Tr, Td } from "@chakra-ui/react"

import { CartContext } from "@/Contexts/CartContext"
import React, { useContext } from "react"
import { BsCart, BsCart2, BsCart4, BsX } from "react-icons/bs"
import { MdRemove } from "react-icons/md"
import { ActionIcon, Group, NumberInput } from "@mantine/core"

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
                        <Box>
                            {!isEmpty ? <Flex direction={'column'} gap={2}>
                                {items.map((item, i) => {
                                    return <Box border={'1px'} p={2} borderColor='gray.200'>
                                        <Flex key={i} gap={3}>
                                            <Box p={2} border='1px' bg={'gray.200'} borderColor='gray.200' rounded='md' width={'80px'}>
                                                <Image objectFit={'fill'} src={item?.image?.url} />
                                            </Box>
                                            <Box>
                                                <Heading mb={1} noOfLines={1} color={'blackAlpha.800'} as={'h4'} fontSize='lg'>
                                                    {item?.name}
                                                </Heading>
                                                <Wrap mb={2}>
                                                    <Text fontSize={'14px'} color={'blackAlpha.500'}>${item?.price} X {item?.quantity} items ( ${(item?.quantity * item?.price).toFixed(2)} )</Text>
                                                </Wrap>
                                                <Wrap>
                                                    {/* <NumberInput
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
                                                    </NumberInput> */}

                                                    <Group spacing={5}>
                                                        <ActionIcon
                                                            size={36}
                                                            variant="default"
                                                            onClick={() => updateItemQuantity(item?.id, item.quantity - 1)}
                                                        >
                                                            –
                                                        </ActionIcon>

                                                        <NumberInput
                                                            hideControls
                                                            value={item?.quantity}
                                                            // onChange={(val) => setValue(val)}
                                                            // handlersRef={handlers}
                                                            readOnly
                                                            max={10}
                                                            min={0}
                                                            // P={'1px'}
                                                            step={2}
                                                            styles={{ input: { width: 54, textAlign: 'center' } }}
                                                        />

                                                        <ActionIcon
                                                            size={36}
                                                            variant="default"
                                                            onClick={() => updateItemQuantity(item?.id, item.quantity + 1)}
                                                        >
                                                            +
                                                        </ActionIcon>
                                                    </Group>

                                                    {/* <IconButton
                                                        rounded={'none'}
                                                        onClick={() => removeItem(item.id)}
                                                        size='xs'
                                                        variant='outline'
                                                        colorScheme='red'
                                                        aria-label='Reove Item'
                                                        icon={<BsX />}
                                                    /> */}

                                                    <ActionIcon
                                                        size={36}
                                                        color='red'
                                                        variant="subtle"
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        <BsX fontSize={'22px'} />
                                                    </ActionIcon>

                                                </Wrap>
                                            </Box>
                                        </Flex>
                                    </Box>
                                })}
                            </Flex>
                                : <Center py={5}>
                                    <Text color={"gray.400"}>Cart is empty</Text>
                                </Center>}
                        </Box>
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
                                            <Td isNumeric><Text fontSize={'18px'}>${cartTotal.toFixed(2)}</Text></Td>
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
                                {!isEmpty && <Button flex='1' onClick={emptyCart} size='sm' rounded={'none'} colorScheme='teal'>Proceed to checkout</Button>}
                            </Flex>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}