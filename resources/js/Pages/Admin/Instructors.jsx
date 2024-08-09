import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter'
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
            icon={<UsersIcon className='w-9 h-9 text-gray-500' />}
            headerTitle="Instructors"
            headerSubtitle="Admin Instructors"
        >
            <Head title='Admin Instructors' />
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
                                    <XCircleIcon onClick={() => { router(route('admin.subjects')) }} className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3 w-8 h-8 cursor-pointer text-gray-600' />
                                )
                            }
                        </div>
                        <div className='table-responsive'>
                            <table className='datatable-table mt-3'>
                                <thead >
                                    <tr className='card-header'>
                                        <th >Instructor</th>
                                        <th >Verified</th>
                                        <th >Course</th>
                                        <th >Verify</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        paginated.data.map(instructor =>
                                            <tr key={instructor.id} className='text-center'>
                                                <td><Link as='button'>{instructor.lastname + ", " + instructor.firstname}</Link></td>
                                                <td className='flex place-content-center'>{instructor.verified ? <CheckCircleIcon className='w-7 h-7 text-green-600' /> : <XCircleIcon className='w-7 h-7 text-red-600' />}</td>
                                                <td>{instructor.course}</td>
                                                <td>
                                                    <Link
                                                        className={`font-semibold ${instructor.verified ? "text-red-700" : "text-green-700"}`}
                                                        href={route('admin.verify')} method='patch' as='button'
                                                        data={{ id: instructor.id, verify: (instructor.verified ? 0 : 1) }}
                                                    >
                                                        {instructor.verified ? "Unverify" : "Verify"}
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div className='w-full flex flex-row justify-between'>
                                <div>
                                    <p>Current page: {paginated.current_page}</p>
                                </div>
                                <div className='flex flex-row'>
                                    {
                                        paginated.links.map(
                                            (link, index) => {
                                                if (index == 0 || index == paginated.links.length - 1) {
                                                    return (
                                                        <Link
                                                            dangerouslySetInnerHTML={{ __html: index == 0 ? "&laquo;" : "&raquo;" }}
                                                            className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                                            href={link.url}
                                                            as='button'
                                                            preserveScroll={true}
                                                            disabled={link.url == null}
                                                        />
                                                    )

                                                } else {
                                                    return (
                                                        <Link
                                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                                            className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                                            href={link.url}
                                                            as='button'
                                                            preserveScroll={true}
                                                            disabled={link.url == null}
                                                        />
                                                    )
                                                }
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                }
            />
        </Layout>
    )
}
