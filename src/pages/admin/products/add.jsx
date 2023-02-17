import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function add() {
  return (
    <AdminLayout
      title='Add Product'
      breads={[
        {
          title: 'Add Product',
          link: '/admin/products/add',
        }
      ]}
    >
      add
    </AdminLayout>
  )
}
