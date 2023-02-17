import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function my_downline() {
  return (
    <AdminLayout
      title='My Downline'
      breads={[
        {
          title: 'My Downline',
          link: '/admin/my_downline'
        }
      ]}
    >
      my_downline
    </AdminLayout>
  )
}
