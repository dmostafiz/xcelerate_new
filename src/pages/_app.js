import AuthContextProvider from '@/Contexts/AuthContext'
import CartContextProvider from '@/Contexts/CartContext'
import '@/styles/globals.css'
import theme from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CartProvider } from 'react-use-cart'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      components: {
        InputWrapper: {
          styles: (theme) => ({
            label: {

            },

          }),
        },

        Input: {
          styles: (theme) => ({
            input: {
              '&:focus-within': {
                borderColor: '#e0a234',
              },
            },
          }),
        },
      },
    }}
  >
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <CartProvider>
            <CartContextProvider>
              <Component {...pageProps} />
            </CartContextProvider>
          </CartProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </MantineProvider>
}
