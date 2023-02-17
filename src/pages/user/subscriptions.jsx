import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function subscriptions() {
  return (
    <UserLayout
      title='Subscriptions'
      breads={[
        {
          title: 'Subscriptions',
          link: '/user/subscriptions'
        }
      ]}
    >
      subscriptions
    </UserLayout>
  )
}
