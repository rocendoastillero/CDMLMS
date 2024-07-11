import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Headers } from "@/utils/headers"
import { Head } from '@inertiajs/react'

const headers = Headers('w-9 w-9');

export default function GradeSheets({ auth }) {
    return (
    <Layout user={auth.user} icon={headers[7].icon} headerTitle={headers[7].title} headerSubTitle={"GradeSheets"} openDropdown={true}>
        <Head title={headers[7].title}/>
        <SingleCardWithHeader
            header="Grade Sheets"
            body={
                <p>

                    the action or process of talking about something in order to reach a decision or to exchange ideas.<br />"the proposals are not a blueprint but ideas for discussion"
                </p>}
        />

    </Layout>
    )
}
