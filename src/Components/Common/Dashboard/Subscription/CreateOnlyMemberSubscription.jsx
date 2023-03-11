import Axios from '@/Helpers/Axios'
import useAlert from '@/Hooks/useAlert'
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'

// import { Elements } from "@stripe/react-stripe-js";
import CheckoutForOnlyMember from '@/Components/UserDashboard/Payment/CheckoutForOnlyMember'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

export default function CreateOnlyMemberSubscription() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const { success } = useAlert()

    const handlePay = async () => {

        setLoading(true)
        const res = await Axios.post('/subscription/create')

        if (res?.data?.ok) {
            success('Congratulations', 'Your subscription has been activated successfully')
            onClose()

            router.reload()
        }

        setLoading(false)

    }

    return (
        <>
            <Button onClick={onOpen} variant='solid' colorScheme='teal'>
                Subscribe Now
            </Button>

            <Elements stripe={stripePromise}>
                <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader borderBottom={'1px'} borderColor='gray.300'>Subscription payment summery</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text mb={2}>$10 monthly</Text>
                        
                            <Box>
                                <CheckoutForOnlyMember apiTo='/subscription/subscribeOnlyMembership' />
                            </Box>

                        </ModalBody>
                        
                    </ModalContent>
                </Modal>
            </Elements>
        </>
    )
}