import LogoMain from '@/Components/Common/LogoMain'
import SponsorIdValidator from '@/Components/Common/Sponsor/SponsorIdValidator'
import useSponsor from '@/Hooks/useSponsor'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'

export default function ValidateSponsorWrapper({ children }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { getSponsor } = useSponsor()

    useEffect(() => {

        async function fetchSponsor() {

            const sponsor = await getSponsor()

            if (sponsor) {
                onClose()
            } else {
                onOpen()
            }
        }

        fetchSponsor()

    }, [])

    return (
        <>
            {children}

            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                motionPreset='slideInBottom'
            >
                {/* <ModalOverlay /> */}
                <ModalOverlay
                    bg='blackAlpha.600'
                    backdropFilter='auto'
                    // backdropInvert='80%'
                    backdropBlur='25px'
                />
                <ModalContent>
                    <ModalHeader bg='gray.900' borderBottom={'1px'} borderColor='gray.200'>
                        <LogoMain />
                    </ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody pb={6} p={0}>
                        <SponsorIdValidator shadow={false} redirectTo='/auth/create_account' />
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}
