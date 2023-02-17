import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function notifications() {
  return (
    <AdminLayout
      title='Notifications'
      breads={[
        {
          title: 'Notifications',
          link: '/admin/notifications',
        }
      ]}
    >
      notifications
    </AdminLayout>
  )
}
