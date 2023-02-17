import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function all() {
  return (
    <AdminLayout
      title='All Users'
      breads={[
        {
          title: 'All Users',
          link: '/admin/users/all',
        }
      ]}
    >
      all
    </AdminLayout>
  )
}
