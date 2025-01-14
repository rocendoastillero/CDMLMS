import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import { TrophyIcon, WrenchIcon } from '@heroicons/react/24/outline'
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader'
import IconCard from '@/Components/CDMLMS/IconCard'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function OnlineClass({ auth }) {
    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
        >
            <Head title='Online Class' />
            <OverlapHeader
                icon={<TrophyIcon className='w-9 h-9 text-gray-500' />}
                title='Online Class'
                subtitle='View Online Class'

            >

                <IconCard
                    title="Under Development"
                    body="This page is still under development!"
                    icon={<WrenchIcon className='w-8 h-8 text-white' />}
                />
            </OverlapHeader>

        </Layout>
    )
}

