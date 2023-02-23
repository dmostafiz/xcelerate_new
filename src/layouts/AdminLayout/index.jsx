import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, Box } from '@chakra-ui/react';
import React from 'react'
import TopNav from './Inc/TopNav';
import Sidebar from './Inc/Sidebar';
import Head from 'next/head';
import AdminDashboardWrapper from '@/Wrappers/Auth/AdminDashboardWrapper';

export default function AdminLayout({ children, title, breads }) {
  const sidebar = useDisclosure();
  const titleText = `${title} | Xcelerate fuel tabs`

  return (
    <AdminDashboardWrapper>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Box
        as="section"
        bg="gray.50"
        _dark={{
          bg: "gray.700",
        }}
        minH="100vh"
      >
        <Sidebar
          display={{
            base: "none",
            md: "unset",
          }}
        />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        // size={'xl'}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Sidebar w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box
          ml={{
            base: 0,
            md: 60,
          }}
        // transition=".3s ease"
        >
          <TopNav sidebar={sidebar} title={title} breads={breads} />
          <Box as="main">
            {/* Add content here, remove div below  */}
            {/* <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" /> */}
            {children}
          </Box>
        </Box>
      </Box>
    </AdminDashboardWrapper>
  );
}

