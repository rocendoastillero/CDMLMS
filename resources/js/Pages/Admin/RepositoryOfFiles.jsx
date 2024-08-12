import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import { CloudArrowUpIcon, WrenchIcon } from '@heroicons/react/24/outline'
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader'
import IconCard from '@/Components/CDMLMS/IconCard'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function RepositoryOfFiles({ auth }) {
    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
        >
            <Head title='Repository of Files' />
            <OverlapHeader
                icon={<CloudArrowUpIcon className='w-9 h-9 text-gray-500' />}
                title='Repository of Files'
                subtitle='View Repository of Files'
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
