import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import { HandRaisedIcon } from '@heroicons/react/24/outline'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Attendance({  auth }) {

    return (
        <Layout 
        isAdmin={auth.isAdmin}
        user={auth.user} 
        icon={<HandRaisedIcon className='w-9 h-9 text-gray-500' />} 
        headerTitle='Attendance' 
        headerSubtitle='View Attendance'>
            <Head title='Attendance' />
            <SingleCardWithHeader
                header="Attendance"
                body={
                    <div className='mt-3'>
                        the action or process of talking about something in order to reach a decision or to exchange ideas.
                        <br />
                        "the proposals are not a blueprint but ideas for discussion"
                    </div>
                }
            />
        </Layout>
    )
}
