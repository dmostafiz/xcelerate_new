import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function index() {
  return (
    <UserLayout
      title='Home'
      breads={[
        {
          title: 'Home',
          link: '/user/home',
        }
      ]}
    >
      index
    </UserLayout>
  )
}
