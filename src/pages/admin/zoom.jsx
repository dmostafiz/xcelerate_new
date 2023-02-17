import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function zoom() {
  return (
    <AdminLayout
      title='Zoom'
      breads={[
        {
          title: 'Zoom',
          link: '/admin/zoom',
        }
      ]}
    >
      zoom
    </AdminLayout>
  )
}
