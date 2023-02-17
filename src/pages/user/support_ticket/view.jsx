import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function view() {
  return (
    <UserLayout
      title='View Ticket'
      breads={[
        {
          title: 'View Ticket',
          link: '/user/support_ticket/view',
        }
      ]}
    >
      view
    </UserLayout>
  )
}
