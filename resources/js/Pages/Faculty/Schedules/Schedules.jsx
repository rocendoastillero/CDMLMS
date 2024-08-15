import React, { useEffect, useState } from 'react'
import Layout from '@/Layouts/Layout'
import { Head, Link } from '@inertiajs/react'
import AlertCard from '@/Components/CDMLMS/AlertCard';
import { ArchiveBoxXMarkIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader';
import Table from '@/Components/CDMLMS/Table';
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Schedules({ auth, subjects}) {

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
        >
            <Head title='Schedule' />
            <OverlapHeader
                icon={<CalendarDaysIcon className='w-9 h-9 text-gray-500' />}
                title='Schedule'
                subtitle='view Schedule'
            >

                <SingleCardWithHeader
                    header='Pick Your Subject'
                    body={
                        <Table
                            paginated={subjects}
                            headersCount={1}
                            headerStyle="border-b-2"
                            headers={
                                <th>CODE</th>
                            }
                            body={
                                subjects.data.map(
                                    subject =>
                                        <tr key={subject.id}>
                                            <td>
                                                <Link className="nav-link" href={route('schedules.subject', subject.id)}>
                                                    {subject.code}
                                                </Link>
                                            </td>
                                        </tr>
                                )
                            }
                        />

                    }
                />
            </OverlapHeader>
        </Layout>
    )
}
