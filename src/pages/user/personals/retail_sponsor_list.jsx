import UserLayout from '@/layouts/UserLayout'
import React from 'react'

export default function retails_sponsor_list() {
    return (
        <UserLayout
            title='Retail Sponsor List'
            breads={[
                {
                    title: 'Retail Sponsor List',
                    link: '/user/personals/retail_sposor_list',
                }
            ]}
        >
            Member sponsor list
        </UserLayout>
    )
}
