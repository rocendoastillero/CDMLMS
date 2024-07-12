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
export default function OnlineClass({ auth }) {
    return (
        <Layout user={auth.user} icon={headers[11].icon} headerTitle={headers[11].title} headerSubTitle={headers[11].subTitle}>
            <Head title={headers[11].title} />
            <SingleCardWithHeader
                header="OnlineClass"
                body={
                    <p>

                        the action or process of talking about something in order to reach a decision or to exchange ideas.<br />"the proposals are not a blueprint but ideas for discussion"
                    </p>}
            />

        </Layout>
    )
}

