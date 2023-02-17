import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function create_order() {
  return (
    <AdminLayout
      title='Create Order'
      breads={[
        {
          title: 'Create Order',
          link: '/admin/purchase/create_order',
        }
      ]}
    >
      create_order
    </AdminLayout>
  )
}
