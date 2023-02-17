import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function answered() {
  return (
    <AdminLayout
      title='Answered Tickets'
      breads={[
        {
          title: 'Answered Tickets',
          link: '/admin/support_tickets/answered',
        }
      ]}
    >
      answered
    </AdminLayout>
  )
}
