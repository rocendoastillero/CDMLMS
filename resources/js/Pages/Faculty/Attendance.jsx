import React from 'react'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import { HandRaisedIcon, WrenchIcon } from '@heroicons/react/24/outline'
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader'
import IconCard from '@/Components/CDMLMS/IconCard'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Attendance({ auth }) {

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
        >
            <Head title='Attendance' />
            <OverlapHeader
                icon={<HandRaisedIcon className='w-9 h-9 text-gray-500' />}
                title='Attendance'
                subtitle='View Attendance'

            >

                <IconCard
                    title="Under Development"
                    body="This page is still under development!"
                    icon={<WrenchIcon className='w-8 h-8 text-white'/>}
                />
            </OverlapHeader>
        </Layout>
    )
}
