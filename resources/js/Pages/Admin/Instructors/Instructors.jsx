import OverlapHeader from '@/Components/CDMLMS/OverlapHeader'
import PageNav from '@/Components/CDMLMS/PageNav'
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter'
import Table from '@/Components/CDMLMS/Table'
import Layout from '@/Layouts/Layout'
import { CheckCircleIcon, MagnifyingGlassIcon, UsersIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { Head, Link, router } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'


export default function Instructors({ auth, paginated, searched }) {

    const [search, setSearch] = useState(searched);

    useEffect((() => {
        console.log(paginated);
    }), []);

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
        >
            <Head title='Admin Instructors' />
            <OverlapHeader
                icon={<UsersIcon className='w-9 h-9 text-gray-500' />}
                title="Instructors"
                subtitle="Admin Instructors"

            >

                <SingleCardCenter
                    bodyPadding='p-4'
                    table={
                        <>
                            <div className='w-1/3 mb-4 relative'>
                                <input className='form-control'
                                    placeholder='Search Instructor'
                                    type='search'
                                    value={search}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            console.log(search);
                                            router.visit(route('admin.instructors.search', search), { preserveScroll: true });
                                        }
                                    }}
                                    onChange={(e) => { setSearch(e.target.value); }}
                                />
                                {
                                    search == '' ? (
                                        <MagnifyingGlassIcon className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3  w-8 h-8 text-gray-600' />
                                    ) : (
                                        <XCircleIcon onClick={() => { router.visit(route('admin.instructors')) }} className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3 w-8 h-8 cursor-pointer text-gray-600' />
                                    )
                                }
                            </div>
                            <Table
                                paginated={paginated}
                                headersCount={3}
                                headers={
                                    <>
                                        <th >Instructor</th>
                                        <th >Verified</th>
                                        <th >Verify</th>
                                    </>
                                }
                                body={
                                    paginated.data.map(instructor =>
                                        //TODO tooltip
                                        <tr key={instructor.id} className='text-center'>
                                            <td className='!p-0'>
                                                <Link className='font-bold w-full h-full' href={route('admin.instructors.view', instructor.id)} as='button'>
                                                    {instructor.lastname + ", " + instructor.firstname}
                                                </Link>
                                            </td>
                                            <td>
                                                <div className="flex place-content-center">
                                                    {instructor.verified ? <CheckCircleIcon className='w-7 h-7 text-green-600' /> : <XCircleIcon className='w-7 h-7 text-red-600' />}
                                                </div>
                                            </td>
                                            <td>
                                                <Link
                                                    className={`btn btn-primary font-semibold ${instructor.verified ? "!bg-red-700" : ""}`}
                                                    href={route('admin.verify')} method='patch' as='button'
                                                    data={{ id: instructor.id, verify: (instructor.verified ? 0 : 1) }}
                                                >
                                                    {instructor.verified ? "Unverify" : "Verify"}
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            />
                        </>
                    }
                />
            </OverlapHeader>
        </Layout>
    )
}
