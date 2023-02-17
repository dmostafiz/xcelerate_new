import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function pending() {
  return (
    <AdminLayout
      title='Pending Payouts'
      breads={[
        {
          title: 'Pending Payouts',
          link: '/admin/payouts/pending',
        }
      ]}
    >
      pending
    </AdminLayout>
  )
}
