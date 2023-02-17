import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function closed() {
  return (
    <AdminLayout
      title='Closed Tickets'
      breads={[
        {
          title: 'Closed Tickets',
          link: '/admin/support_tickets/closed',
        }
      ]}
    >
      closed
    </AdminLayout>
  )
}
