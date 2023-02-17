import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function all() {
  return (
    <UserLayout
      title='All Commissions'
      breads={[
        {
          title: 'All Commissions',
          link: '/user/commissions/all',
        }
      ]}
    >
      all
    </UserLayout>
  )
}
