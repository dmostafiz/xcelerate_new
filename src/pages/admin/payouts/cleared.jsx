import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function cleared() {
  return (
    <AdminLayout
      title='Cleared Payouts'
      breads={[
        {
          title: 'Cleared Payouts',
          link: '/admin/payouts/cleared',
        }
      ]}
    >
      cleared
    </AdminLayout>
  )
}
