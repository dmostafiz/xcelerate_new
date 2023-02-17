import { useDisclosure, Drawer, DrawerOverlay, DrawerContent, Box} from '@chakra-ui/react';
import React from 'react'
import TopNav from './Inc/TopNav';
import Sidebar from './Inc/Sidebar';

export default function AdminLayout({children}) {
  const sidebar = useDisclosure();

  return (
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
        <TopNav sidebar={sidebar}/>
        <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          {/* <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" /> */}
           {children}
        </Box>
      </Box>
    </Box>
  );
}

