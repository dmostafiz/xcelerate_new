import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function matrix() {
  return (
    <AdminLayout
      title='Matrix'
      breads={[
        {
          title: 'matrix',
          link: '/admin/commissions/matrix',
        }
      ]}
    >
      matrix
    </AdminLayout>
  )
}
