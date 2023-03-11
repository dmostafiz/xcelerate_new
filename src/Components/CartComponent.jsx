import { Icon, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, useDisclosure, Box, Badge, Flex, Heading, Image, Wrap, Text, Divider, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Center, Table, Tbody, Tr, Td } from "@chakra-ui/react"
import { CartContext } from "@/Contexts/CartContext"
import React, { useContext } from "react"
import { BsCart, BsCart2, BsCart4, BsX } from "react-icons/bs"
import { MdRemove } from "react-icons/md"
import { ActionIcon, Group, NumberInput } from "@mantine/core"
import { useRouter } from "next/router"

export default function CartComponent() {
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


    return (
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
    )
}
