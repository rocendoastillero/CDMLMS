import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter'
import Admin from '@/Layouts/Admin'
import { CheckCircleIcon, MagnifyingGlassIcon, UsersIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { Head, Link, router } from '@inertiajs/react'
import React, { useState } from 'react'

//TODO change instructors to paginated and the mapping add pager
export default function Instructors({ auth, instructors, searched }) {

    const [search, setSearch] = useState(searched);

    return (
        <Admin
            user={auth.user}
            icon={<UsersIcon className='w-5 h-5 text-gray-500' />}
            headerTitle="Instructors"
            headerSubtitle="View Instructors"
        >
            <Head title='Instructors' />
            <SingleCardCenter
                table={
                    <>
                        <div className='w-1/3 mb-4 relative'>
                            <input className='form-control'
                                placeholder='Search Instructor'
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
                                    <Link className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3  ' href={route('admin.subjects')} as='button'>
                                        <XCircleIcon className='w-8 h-8 text-gray-600' />
                                    </Link>
                                )
                            }
                        </div>
                        <table className='datatable-table mt-3'>
                            <thead >
                                <tr >
                                    <th className='!text-center'>Instructor</th>
                                    <th className='!text-center'>Verified</th>
                                    <th className='!text-center'>Course</th>
                                    <th className='!text-center'>Verify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    instructors.map(instructor =>
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
                    </>
                }
            />
        </Admin>
    )
}
