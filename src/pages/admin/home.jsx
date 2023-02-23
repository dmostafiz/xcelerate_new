import { AdminStates } from '@/Components/AdminDashboard/AdminStates'
import { CalenderStates } from '@/Components/AdminDashboard/CalenderStates'
import { VisitorState } from '@/Components/AdminDashboard/VisitorState'
import SafeArea from '@/Components/Common/Dashboard/SafeArea'
import AdminLayout from '@/layouts/AdminLayout'
import { Box } from '@chakra-ui/react'
import { Grid } from '@mantine/core'
import React from 'react'

export default function index() {
  return (
    <AdminLayout
      title='Home'
      breads={[
        {
          title: 'Dashboard',
          link: '/admin/dashboard',
        }
      ]}
    >
      <Box bg={'#E5AD26'} shadow='md'>
        <SafeArea>
          <AdminStates />
        </SafeArea>
      </Box>

      <SafeArea>
        <Grid>
          <Grid.Col xs={1} lg={5}>
            <VisitorState />
          </Grid.Col>
          <Grid.Col xs={1} lg={7}>
            {/* <CalenderStates /> */}

          </Grid.Col>
          <Grid.Col span={3}>
            {/* <VisitorState /> */}

          </Grid.Col>
        </Grid>
      </SafeArea>
    </AdminLayout>
  )
}
