import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function shop() {
  return (
    <UserLayout
    title='Order Products'
    breads={[
      {
        title: 'Order Products',
        link: '/user/shop'
      }
    ]}
    >
      shop
    </UserLayout>
  )
}
