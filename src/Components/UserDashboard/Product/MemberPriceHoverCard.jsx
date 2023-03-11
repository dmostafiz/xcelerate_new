import React from 'react'
import { HoverCard, Button, Group, Divider, Box } from '@mantine/core';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';
import usePrice from '@/Hooks/usePrice';

export default function MemberPriceHoverCard({ children, product }) {
    const price = usePrice()
    return (
        <Group position="center">
            <HoverCard zIndex={9999} width={280} shadow="md">
                <HoverCard.Target>
                    {/* <Button>Hover to reveal the card</Button> */}
                    {children}
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    <Text
                        fontSize="md"
                        color="teal.400"
                        // title='Regular price'
                        // as='s'
                        fontWeight={'bold'}
                    >
                        Member Price: ${price(product).member_price}
                    </Text>

                    <Divider my={4} />
                    <Text fontSize="sm">
                        To purchase products at this price, please subscribe to one of our membership plans.</Text>
                    <Box my={10} />
                    <Link href={'/user/subscriptions'}>
                        <Button color={'teal'}>Subscribe Membership Plan</Button>
                    </Link>
                </HoverCard.Dropdown>
            </HoverCard>
        </Group>
    )
}
