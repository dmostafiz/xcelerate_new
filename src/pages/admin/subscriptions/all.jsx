import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function all() {
  return (
    <AdminLayout
      title='Subscriptions'
      breads={[
        {
          title: 'Subscriptions',
          link: '/admin/subscriptions/all',
        }
      ]}
    >
      all
    </AdminLayout>
  )
}
