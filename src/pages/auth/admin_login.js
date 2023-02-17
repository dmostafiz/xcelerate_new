import LogoMain from '@/Components/Common/LogoMain';
import AuthLayout from '@/layouts/AuthLayout';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function admin_login() {
  return (
    <AuthLayout>
      <Heading fontSize={'2xl'}>Sign in to your account</Heading>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Stack spacing={6}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={'start'}
          justify={'space-between'}>
          <Checkbox>Remember me</Checkbox>
          <Link href={'/auth/forgot_password'}>
            <Text as='span' color={'yellow.500'}>
              Forgot password?
            </Text>
          </Link>
        </Stack>
        <Link href={'/admin/home'}>
          <Button colorScheme={'yellow'} bg='yellow.500' variant={'solid'}>
            Sign in
          </Button>
        </Link>
      </Stack>
    </AuthLayout>
  );
}