import Axios from '@/Helpers/Axios';
import useAlert from '@/Hooks/useAlert';
import { Search2Icon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Container,
  Group,
  Anchor,
  Center,
  Box,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react';
import LogoMain from '../LogoMain';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}));

export default function SponsorIdValidator({redirectTo='/'}) {
  const { classes } = useStyles();

  const router = useRouter()


  const [username, setUsername] = React.useState(router.query?.username);

  const { error, success } = useAlert()

  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e) => {

    setLoading(true)

    const res = await Axios.get(`/sponsor/validate/${username}`)

    if (res?.data?.ok) {
      success('Sponsor verified')
      Cookies.set('sponsor', username.trim())
      window.location.href = redirectTo
    } else {
      error(res?.data?.msg || 'Sponsor not found')
      setLoading(false)
    }

    setLoading(false)

  }

  return (
    <Container size={460} my={30}>
      {/* <Center pb={20}>
        <LogoMain width='220px' src='/xcelerate-landing/images/logo.png' />
      </Center> */}
      <Title mb={4} className={classes.title} align="center">
        Verify your sponsor
      </Title>
      <Text color="dimmed" size="sm" align="center">
        Enter the sponsor username who reffered you to the website.
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput
          label="Sponsor Username"
          placeholder="Enter valid sponsor username"
          onChange={e => setUsername(e.target.value)}
          value={username}
          required
        />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Anchor color="dimmed" size="sm" className={classes.control}>
            <Center inline>
              <Search2Icon size={12} stroke={1.5} />
              <Box ml={5}>Find a sponsor for me</Box>
            </Center>
          </Anchor>
          <Button onClick={handleSubmit} colorScheme={'yellow'} size='sm' rounded={'none'}>Validate Username</Button>
        </Group>
      </Paper>
    </Container>
  );
}