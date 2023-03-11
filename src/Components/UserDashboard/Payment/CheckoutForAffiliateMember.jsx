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

export default function CheckoutForAffiliateMember({ apiTo }) {

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
                setLoading(false)
                return alert(res?.data?.msg)
            }

            const data = res?.data

            console.log('payment secrets', data.clientSecret20, data.clientSecret40)

            const confirm1 = await stripe.confirmCardPayment(data.clientSecret20)
            const confirm2 = await stripe.confirmCardPayment(data.clientSecret40)


            if (confirm1.error || confirm2.error) {
                alert(confirm1.error)
                setLoading(false)
                return 
            }

            setLoading(false)

            success('Congratulations', 'Payment successful & subscription created.')

            router.reload()

        } catch (error) {
            console.log(error)
            setLoading(false)
            alert('Payment failed ', error.message)
        }
    }

    return (
        <>
            <Box p={5} my={5} border='1px' borderColor='gray.200' rounded={'lg'} >
                <CardElement />
            </Box>
            <Button isLoading={loading} colorScheme={'teal'} onClick={createSubscription}>Create Subscription</Button>
        </>
    );
}