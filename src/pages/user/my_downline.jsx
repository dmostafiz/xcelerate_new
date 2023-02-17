import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function my_downline() {
  return (
    <UserLayout
      title='My Downline'
      breads={[
        {
          title: 'My Downline',
          link: '/user/my_downline'
        }
      ]}
    >
      my_downline
    </UserLayout>
  )
}
