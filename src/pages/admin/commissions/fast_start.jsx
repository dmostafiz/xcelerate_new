import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function fast_start() {
  return (
    <AdminLayout
      title='Fast Start'
      breads={[
        {
          title: 'Fast Start',
          link: '/admin/commissions/fast_start',
        }
      ]}
    >
      fast_start
    </AdminLayout>
  )
}
