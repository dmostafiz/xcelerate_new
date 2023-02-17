import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function retail() {
  return (
    <AdminLayout
      title='Retail Users'
      breads={[
        {
          title: 'Retail Users',
          link: '/admin/users/retail',
        }
      ]}
    >
      retail
    </AdminLayout>
  )
}
