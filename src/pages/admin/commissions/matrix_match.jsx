import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function matrix_match() {
  return (
    <AdminLayout
      title='Matrix Match'
      breads={[
        {
          title: 'Matrix Match',
          link: '/admin/commissions/matrix_match',
        }
      ]}
    >
      matrix_match
    </AdminLayout>
  )
}
