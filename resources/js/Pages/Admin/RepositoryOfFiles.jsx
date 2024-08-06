import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function RepositoryOfFiles({  auth }) {
    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
            icon={<CloudArrowUpIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Repository of Files'
            headerSubtitle='View Repository of Files'>
            <Head title='Repository of Files' />
            <SingleCardWithHeader
                header="Repository"
                body={
                    <p>

                        the action or process of talking about something in order to reach a decision or to exchange ideas.<br />"the proposals are not a blueprint but ideas for discussion"
                    </p>}
            />

        </Layout>
    )
}
