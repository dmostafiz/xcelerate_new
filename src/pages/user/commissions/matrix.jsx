import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function matrix() {
  return (
    <UserLayout
      title='Matrix'
      breads={[
        {
          title: 'Matrix',
          link: '/user/commissions/matrix',
        }
      ]}
    >
      matrix
    </UserLayout>
  )
}
