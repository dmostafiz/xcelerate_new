import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function notifications() {
  return (
    <UserLayout
      title='Notifications'
      breads={[
        {
          title: 'Notifications',
          link: '/user/notifications'
        }
      ]}
    >
      notifications
    </UserLayout>
  )
}
