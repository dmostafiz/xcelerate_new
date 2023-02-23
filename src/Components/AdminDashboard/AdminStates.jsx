import { RingProgress, Text, SimpleGrid, Paper, Center, Group } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons';

const icons = {
    up: IconArrowUpRight,
    down: IconArrowDownRight,
};

const data = [
    {
        label: 'Members',
        stats: '343',
        progress: 100,
        color: 'red',
        icon: 'up',
    },

    {
        label: 'Retail Customers',
        stats: '232',
        progress: 100,
        color: 'yellow',
        icon: 'up',
    },

    {
        label: 'Active Products',
        stats: '8',
        progress: 100,
        color: 'teal',
        icon: 'up',
    },
    {
        label: 'Pending Orders',
        stats: '12',
        progress: 100,
        color: 'cyan',
        icon: 'up',
    }
]

export function AdminStates() {
    const stats = data.map((stat) => {
        const Icon = icons[stat.icon];
        return (
            <Paper withBorder radius="md" p="xs" key={stat.label}>
                <Group>
                    <RingProgress
                        size={80}
                        roundCaps
                        thickness={8}
                        sections={[{ value: stat.progress, color: stat.color }]}
                        label={
                            <Center>
                                <Icon size={22} stroke={1.5} />
                            </Center>
                        }
                    />

                    <div>
                        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                            {stat.label}
                        </Text>
                        <Text weight={700} size="xl">
                            {stat.stats}
                        </Text>
                    </div>
                </Group>
            </Paper>
        );
    });
    return (
        <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'sm', cols: 2 }]}>
            {stats}
        </SimpleGrid>
    );
}