import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function create() {
  return (
    <UserLayout
      title='Create Ticket'
      breads={[
        {
          title: 'Create Ticket',
          link: '/user/support_ticket/create',
        }
      ]}
    >
      create
    </UserLayout>
  )
}
