import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Headers } from "@/utils/headers"
import { Head } from '@inertiajs/react'

const headers = Headers('w-9 w-9');

/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Attendance({ auth }) {

    return (
        <Layout user={auth.user} icon={headers[4].icon} headerTitle={headers[4].title} headerSubtitle={headers[4].subTitle}>
            <Head title={headers[4].title} />
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