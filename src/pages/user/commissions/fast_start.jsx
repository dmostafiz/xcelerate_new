import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function fast_start() {
  return (
    <UserLayout
      title='Fast Start'
      breads={[
        {
          title: 'Fast Start',
          link: '/user/commissions/fast_start',
        }
      ]}
    >
      fast_start
    </UserLayout>
  )
}
