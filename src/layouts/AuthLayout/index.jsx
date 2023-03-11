import LogoMain from '@/Components/Common/LogoMain';
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

export default function AuthLayout({ children }) {
    return (
        <VStack
            // bg='#004453' 
            bgImage={'/xcelerate-landing/images/main-slider1.png'}
            bgAttachment='fixed'
            bgRepeat={'no-repeat'}
            color={'white'}
            minH={'100vh'}
            direction={{ base: 'column', md: 'row' }}
            py={{ sm: 10 }}
        >
            <Flex rounded={'lg'} shadow='md' bg='#004453f2' px={8} py={10} minH={{base:'100vh', sm: 'auto'}} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Box px={24} pb={6} mb={8} borderBottom='2px' borderColor={'whiteAlpha.300'}>
                        <a href={'/'}>
                            <LogoMain />
                        </a>
                    </Box>

                    {children}

                </Stack>
            </Flex>
        </VStack>
    );
}