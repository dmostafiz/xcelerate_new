import SafeArea from '@/Components/Common/Dashboard/SafeArea'
import UserLayout from '@/layouts/UserLayout'
import { Box, Flex, Link, Stack, chakra, Image, Grid, GridItem, SimpleGrid, Tabs, TabList, Tab, TabPanels, TabPanel, Button, Text, Heading, Center, VStack, useBreakpointValue, Divider } from '@chakra-ui/react'
import { ActionIcon, CopyButton, Input, Tooltip } from '@mantine/core'
import { IconBrandTwitter, IconCheck, IconCopy } from '@tabler/icons'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import dynamic from 'next/dynamic'
import AreaChart from '@/Components/Common/Dashboard/Charts/AreaChart'
import { Carousel } from '@mantine/carousel'
import { ProductCard } from '@/Components/Common/Dashboard/Products/ProductCard'
import useSWR from 'swr'
import fetcher from '@/Helpers/fetcher'

const PieChart = dynamic(() => import('@/Components/Common/Dashboard/Charts/PieChart'), { ssr: false })

export default function index() {

  const { data, error, isLoading, mutate } = useSWR('/shop/products', fetcher)


  return (
    <UserLayout
      title='Home'
      breads={[
        {
          title: 'Home',
          link: '/user/home',
        }
      ]}
    >

      <Box
        backgroundSize={'contain'}
        backgroundRepeat='no-repeat'
        backgroundPosition={'right'}
        bgImage={'https://xceleratefueltabs.com/assets/images/logoIcon/logo.png'}
      >
        <Box
          bgGradient="linear(to-r, yellow.500, transparent)"
          shadow='sm'
          // bg="blackAlpha.800" 
          backdropFilter="auto"
          backdropBlur="5px"
        >
          <Flex>
            <Image opacity={.8} display={{ base: 'none', md: 'inline-block' }} w='200px' src='/user_premium.png' />
            <Box
              // w={{
              //   md: "3xl",
              //   lg: "4xl",
              // }}
              // mx="auto"
              py={{
                base: 8,
                lg: 10,
              }}
              px={{
                base: 4,
                lg: 0,
              }}
            // display={{
            //   lg: "flex",
            // }}
            // alignItems={{
            //   lg: "center",
            // }}
            // justifyContent={{
            //   lg: "space-between",
            // }}
            >
              <chakra.h2
                fontSize={{
                  base: "lg",
                  sm: "2xl",
                }}
                mb={5}
                fontWeight="extrabold"
                letterSpacing="tight"
                lineHeight="shorter"
                color="gray.100"
                _dark={{
                  color: "gray.100",
                }}
              >
                <chakra.span display="block">You are browsing our free plan!</chakra.span>
                <chakra.span
                  display="block"
                  color="blackAlpha.700"
                  fontWeight={'normal'}
                  fontSize='xl'
                  _dark={{
                    color: "gray.500",
                  }}
                >
                  Upgrade account now and get full access to our commission system.
                </chakra.span>
              </chakra.h2>
              <Stack
                direction={{
                  base: "column",
                  sm: "row",
                }}
                mt={{
                  base: 8,
                  lg: 0,
                }}
                flexShrink={{
                  lg: 0,
                }}
              >
                <Link
                  w={["full", , "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={3}
                  py={2}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color='white'
                  bg="blackAlpha.800"
                // _hover={{
                //   bg: "yellow.400",
                // }}
                >
                  Upgrade Account
                </Link>
                <Link
                  w={["full", , "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={3}
                  py={2}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color="brand.600"
                  bg="white"
                  _hover={{
                    bg: "brand.50",
                  }}
                >
                  Learn More
                </Link>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>

      <SafeArea>
        <SimpleGrid mb={{ base: 20, xl: 5 }} columns={{ base: 1, md: 1, lg: 2, xl: 3 }} spacing={5}>
          <Box bg='white' shadow={'md'} minHeight='230px' rounded={'xl'}>
            <Tabs variant='line'>
              <TabList>
                <Tab fontWeight={'bold'} _selected={{ color: 'teal', borderColor: 'teal' }} _active=''>
                  My referak links
                </Tab>
                <Tab fontWeight={'bold'} _selected={{ color: '#394797', borderColor: '#394797' }} _active=''>
                  Social Links
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>

                  <Input.Wrapper
                    id="input-demo"
                    mb={8}
                    // withAsterisk
                    label="Referral Link"
                    description="Please enter your credit card information, we need some money"
                  // error="Your credit card expired"
                  >
                    <Input
                      // icon={<IconBrandTwitter size={16} />}
                      value={'https://xceleratefueltabs.com/dmaltais'}
                      readOnly
                      placeholder="Your twitter"
                      rightSection={
                        <CopyButton value="https://xceleratefueltabs.com/dmaltais" timeout={2000}>
                          {({ copied, copy }) => (
                            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                              <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                              </ActionIcon>
                            </Tooltip>
                          )}
                        </CopyButton>
                      }
                    />

                  </Input.Wrapper>

                  <Divider my={2} />

                  <Input.Wrapper
                    id="input-demo"
                    // withAsterisk
                    label="Grabthetab referral link"
                    description="Please enter your credit card information, we need some money"
                  // error="Your credit card expired"
                  >
                    <Input
                      // icon={<IconBrandTwitter size={16} />}
                      value={'https://grabthetab.com/dmaltais'}
                      readOnly
                      placeholder="Your twitter"
                      rightSection={
                        <CopyButton value="https://grabthetab.com/dmaltais" timeout={2000}>
                          {({ copied, copy }) => (
                            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                              <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                              </ActionIcon>
                            </Tooltip>
                          )}
                        </CopyButton>
                      }
                    />

                  </Input.Wrapper>

                </TabPanel>
                <TabPanel>

                  <Box mb={3}>
                    <Text lineHeight={1} fontSize={'15px'} mb={1}>
                      Join our corporate Facebook group for news and updates
                    </Text>
                    <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                      Facebook Group
                    </Button>
                  </Box>

                  <Divider my={2}/>

                  <Box>
                    <Text lineHeight={1} fontSize={'15px'} mb={1}>
                      Join our corporate testimonials group for news and updates
                    </Text>
                    <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                      Corporate testimonials group
                    </Button>
                  </Box>

                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box bg='white' shadow={'md'} minHeight='230px' rounded={'xl'}>
            <Box px={4} py={3} borderBottom='2px' borderColor={'gray.200'}>
              <Heading as='h5' fontSize={'md'}>
                Matrix <Text as='span' fontSize={'15px'} fontWeight='normal'>( Overall )</Text>
              </Heading>
            </Box>
            <Box px={4} py={4}>
              <PieChart />
            </Box>
          </Box>

          <Box bg='white' shadow={'md'} height='230px' rounded={'xl'}>
            <Box bg='white' shadow={'md'} minHeight='230px' rounded={'xl'}>
              <Box px={4} py={3} borderBottom='2px' borderColor={'gray.200'}>
                <Heading as='h5' fontSize={'md'}>
                  Sales Volume <Text as='span' fontSize={'15px'} fontWeight='normal'>( Last month )</Text>
                </Heading>
              </Box>
              <Box p={0} overflow={'hidden'}>
                <AreaChart />
              </Box>
            </Box>
          </Box>


        </SimpleGrid>

        {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          <Box bg='white' shadow={'md'} minHeight='230px' rounded={'xl'}>
            <Box px={4} py={3} borderBottom='2px' borderColor={'gray.200'}>
              <Heading as='h5' fontSize={'md'}>
                Business Snapshot <Text as='span' fontSize={'15px'} fontWeight='normal'>( Overall )</Text>
              </Heading>
            </Box>
            <Box px={4} py={4}>
              <SimpleGrid columns={3} spacing={2}>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Fast start <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Matrix <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Total <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Matrix Match <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>XCel bonus</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Pending <br /> Commissions</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Available <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>My Autoship <br /> Products</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Retails Sales</Text>
                    </VStack>
                  </Center>
                </Box>

              </SimpleGrid>
            </Box>
          </Box>

          <Box bg='white' shadow={'md'} height='230px' rounded={'xl'}>
            <Box bg='white' shadow={'md'} minHeight='230px' rounded={'xl'}>
              <Box px={4} py={3} borderBottom='2px' borderColor={'gray.200'}>
                <Heading as='h5' fontSize={'md'}>
                  Sales Volume <Text as='span' fontSize={'15px'} fontWeight='normal'>( Last month )</Text>
                </Heading>
              </Box>
              <Box p={0}>
                <AreaChart />
              </Box>
            </Box>
          </Box>

        </SimpleGrid> */}


        <Flex direction={{ base: 'column', lg: 'row' }} gap={5} >
          <Box flex={1} bg='white' shadow={'md'} minHeight='230px' rounded={'xl'} >
            <Box px={4} py={3} borderBottom='2px' borderColor={'gray.200'}>
              <Heading as='h5' fontSize={'md'}>
                Business Snapshot <Text as='span' fontSize={'15px'} fontWeight='normal'>( Overall )</Text>
              </Heading>
            </Box>
            <Box px={4} py={4}>
              <SimpleGrid columns={3} spacing={2}>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Fast start <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Matrix <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Total <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Matrix Match <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>XCel bonus</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Pending <br /> Commissions</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Available <br /> Commission</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>My Autoship <br /> Products</Text>
                    </VStack>
                  </Center>
                </Box>
                <Box shadow={'md'} py={3} bg='yellow.400' rounded={'sm'}>
                  <Center>
                    <VStack spacing={0}>
                      <Heading as='h6' fontSize={'2xl'}>0</Heading>
                      <Text lineHeight={1} color={'blackAlpha.700'} textAlign='center' fontSize='12px'>Retails Sales</Text>
                    </VStack>
                  </Center>
                </Box>

              </SimpleGrid>
            </Box>
          </Box>
          <Box w={{ base: '100%', lg: '60%', xl: '66%' }} bg='white' shadow={'md'} minH='230px' rounded={'xl'}>
            <Box px={4} py={3} borderBottom='2px' borderColor={'gray.200'}>
              <Heading as='h5' fontSize={'md'}>
                Best Sales <Text as='span' fontSize={'15px'} fontWeight='normal'>( Monthly )</Text>
              </Heading>
            </Box>

            <Box p={3} overflow={'hidden'}>
              <Carousel
                withIndicators={false}
                // height={250}
                sx={{ maxWidth: '100%' }}
                // slideSize={"33.333333%"}

                slideSize={useBreakpointValue({
                  base: '100%',
                  md: '50%',
                  lg: '50%',
                  xl: '33.333333%'
                })}


                slideGap="md"
                loop
                align="start"
                slidesToScroll={1}
              // sx={{ flex: 1 }}
              >
                {data?.products?.map((product, i) =>
                  <Carousel.Slide key={i}>
                    <ProductCard product={product} description={false} />
                  </Carousel.Slide>
                )}
                {/* ...other slides */}

              </Carousel>
            </Box>
          </Box>
        </Flex>
      </SafeArea>

    </UserLayout>
  )
}
