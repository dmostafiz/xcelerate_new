import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function all() {
  return (
    <AdminLayout
      title='All purchases'
      breads={[
        {
          title: 'All purchases',
          link: '/admin/purchase/all',
        }
      ]}
    >
      all
    </AdminLayout>
  )
}
