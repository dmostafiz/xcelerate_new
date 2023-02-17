import AdminLayout from '@/layouts/AdminLayout'
import React from 'react'

export default function notify() {
  return (
    <AdminLayout
      title='Notify Users'
      breads={[
        {
          title: 'Notify Users',
          link: '/admin/users/notify',
        }
      ]}
    >
      notify
    </AdminLayout>
  )
}
