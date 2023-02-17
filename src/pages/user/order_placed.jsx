import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function order_placed() {
  return (
    <UserLayout
      title='Order Placed'
      breads={[
        {
          title: 'Order Placed',
          link: '/user/order_placed'
        }
      ]}
    >
      order_placed
    </UserLayout>
  )
}
