import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function pending() {
  return (
    <AdminLayout
      title='Pending Tickets'
      breads={[
        {
          title: 'Pending Tickets',
          link: '/admin/support_tickets/pending',
        }
      ]}
    >
      pending
    </AdminLayout>
  )
}
