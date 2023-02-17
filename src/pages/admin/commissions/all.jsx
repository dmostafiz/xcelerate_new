import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function all() {
  return (
    <AdminLayout
      title='All Commissions'
      breads={[
        {
          title: 'All Commissions',
          link: '/admin/commissions/all',
        }
      ]}
    >
      all
    </AdminLayout>
  )
}
