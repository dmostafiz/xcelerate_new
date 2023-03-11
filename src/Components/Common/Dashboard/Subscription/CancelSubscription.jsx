import Axios from '@/Helpers/Axios'
import useAlert from '@/Hooks/useAlert'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'

export default function CancelSubscription({apiTo}) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [loading, setLoading] = useState(false)

    const router = useRouter()


    const {success} = useAlert()


    const handleCancel = async () => {

        setLoading(true)

        const res = await Axios.post(apiTo)

        if (res?.data?.ok) {
            // toastMe({ title: 'Subscription Canceled', description: 'Your subscription has been canceled successfully', status: 'success' })
            success('Subscription Canceled', 'Your subscription has been canceled successfully')
           
            onClose()

            router.reload()

        }

        setLoading(false)

    }

    return (
        <>
            <Button onClick={onOpen} variant='solid' colorScheme='red'>
                Cancel Subscription
            </Button>

            <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader borderBottom={'1px'} borderColor='gray.300'>Cancel Subscription</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Text>Are you sure to cancel this subscription?</Text>

                    </ModalBody>
                    <ModalFooter borderTop={'1px'} borderColor='gray.300'>
                        <Button variant='solid' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button isLoading={loading} onClick={handleCancel} colorScheme='red'>Cancel Subscription</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}