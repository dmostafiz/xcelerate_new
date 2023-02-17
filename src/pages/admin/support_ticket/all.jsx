import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function all() {
  return (
    <AdminLayout
      title='All Tickets'
      breads={[
        {
          title: 'All Tickets',
          link: '/admin/support_tickets/all',
        }
      ]}
    >
      all
    </AdminLayout>
  )
}
