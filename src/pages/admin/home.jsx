import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function index() {
  return (
    <AdminLayout
      title='Home'
      breads={[
        {
          title: 'Dashboard',
          link: '/admin/dashboard',
        }
      ]}
    >
      index
    </AdminLayout>
  )
}
