import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function all() {
  return (
    <AdminLayout
      title='All Products'
      breads={[
        {
          title: 'All Products',
          link: '/admin/products/all'
        }
      ]}
    >
      all
    </AdminLayout>
  )
}
