import { CartContext } from '@/Contexts/CartContext';
import { Box } from '@chakra-ui/react';
import { Card, Image, Text, Group, Badge, createStyles, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';
import { useContext } from 'react';

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    imageSection: {
        padding: theme.spacing.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: -0.25,
        textTransform: 'uppercase',
    },

    section: {
        padding: theme.spacing.md,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
    },

    icon: {
        marginRight: 5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
}));

const mockdata = [
    { label: '4 passengers', icon: IconUsers },
    { label: '100 km/h in 4 seconds', icon: IconGauge },
    { label: 'Automatic gearbox', icon: IconManualGearbox },
    { label: 'Electric', icon: IconGasStation },
];

export function ProductCard({ product, description=true }) {
    const { classes } = useStyles();

    const { addToCart } = useContext(CartContext)

    const features = mockdata.map((feature) => (
        <Center key={feature.label}>
            <feature.icon size={18} className={classes.icon} stroke={1.5} />
            <Text size="xs">{feature.label}</Text>
        </Center>
    ));

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section pt={10}>
                <Center>
                    <Image width={'120px'} src={product?.image?.url} alt="Tesla Model S" />
                </Center>
            </Card.Section>

            {/* <Group position="apart" my="md"> */}
            <Box textAlign={'center'} py={3}>
                <Text lineClamp={1} weight={500}>{product?.name}</Text>
                {description && <Text
                    size="xs"
                    color="dimmed"
                    dangerouslySetInnerHTML={{ __html: product?.description }}
                >
                </Text>}
            </Box>
            {/* <Badge variant="outline">25% off</Badge> */}
            {/* </Group> */}

            {/* <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section> */}

            <Card.Section className={classes.section}>
                <Group spacing={30}>
                    <div>
                        <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                            ${product?.price}
                        </Text>
                        {/* <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
                            per day
                        </Text> */}
                    </div>

                    <Button radius="xl" onClick={() => {addToCart(product)}} style={{ flex: 1 }}>
                        Add to cart
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}