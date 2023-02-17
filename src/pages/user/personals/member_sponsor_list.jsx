import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function member_sponsor_list() {
    return (
        <UserLayout
            title='Member Sponsor List'
            breads={[
                {
                    title: 'Member Sponsor List',
                    link: '/user/personals/member_sposor_list',
                }
            ]}
        >
            Member sponsor list
        </UserLayout>
    )
}
