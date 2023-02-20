import LogoMain from '@/Components/Common/LogoMain';
import useLogin from '@/Hooks/useLogin';
import AuthLayout from '@/layouts/AuthLayout';
import IfUserLoggedIn from '@/Wrappers/Auth/IfUserLoggedIn';
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
  FormErrorMessage,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function user_login() {

  const { responseFacebook, responseGoogle, onSubmit, handleSubmit, register, errors, isSubmitting, googleLoading, fbLoading } = useLogin('/user/home')

  return (
    <IfUserLoggedIn>
      <AuthLayout>
        <Heading fontSize={'2xl'}>Sign in to your account</Heading>
        <FormControl id="email" isInvalid={errors.username}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="text"
            placeholder='Enter your email / username'
            {...register('username')}
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl id="password" isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder='Enter your password'
            {...register('password')}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
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

          <Button
            colorScheme={'yellow'}
            bg='yellow.500'
            variant={'solid'}
            loadingText="Loging in..."
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
          >
            Sign in
          </Button>

        </Stack>
      </AuthLayout>
    </IfUserLoggedIn>
  );
}