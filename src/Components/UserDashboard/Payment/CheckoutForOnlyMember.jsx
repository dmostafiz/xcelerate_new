import React, { useState } from "react";
import {
    CardElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import Axios from "@/Helpers/Axios";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useAlert from "@/Hooks/useAlert";

export default function CheckoutForOnlyMember({ apiTo }) {

    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { success } = useAlert()

    const createSubscription = async () => {

        try {

            setLoading(true)

            const pm = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement('card')
            })

            // console.log(pm.paymentMethod.id)

            const res = await Axios.post(apiTo, {
                paymentMethod: pm.paymentMethod.id
            })

            // If payment failed, return and alert
            if (!res?.data?.ok) {
                return alert('Payment failed')
            }

            const data = res?.data

            console.log('payment secrets', data.clientSecret)

            const confirm = await stripe.confirmCardPayment(data.clientSecret)


            if (confirm.error) {
                return alert('Payment failed. please try again')
            }

            setLoading(false)

            success('Congratulations', 'Payment successful & subscription created.')

            router.reload()

        } catch (error) {
            console.log(error)
            alert('Payment failed - ', error.message)
        }
    }

    return (
        <>
            <Box p={5} my={5} border='1px' borderColor='gray.200' rounded={'lg'} >
                <CardElement options={{theme: 'night'}} />
            </Box>
            <Button isLoading={loading} colorScheme={'teal'} onClick={createSubscription}>Create Subscription</Button>
        </>
    );
}