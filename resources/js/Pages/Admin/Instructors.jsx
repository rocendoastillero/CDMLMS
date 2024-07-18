import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Admin from '@/Layouts/Admin'
import { CheckCircleIcon, UsersIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Instructors({ auth, instructors }) {
    return (
        <Admin
            user={auth.user}
            icon={<UsersIcon className='w-5 h-5 text-gray-500' />}
            headerTitle="Instructors"
            headerSubtitle="View Instructors"
        >
            <Head title='Instructors'/>
            <CardsWithSticky
                cards={
                    <SingleCardWithHeader

                        body={
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
                                                <td><Link>{instructor.lastname + ", " + instructor.firstname}</Link></td>
                                                <td className='flex place-content-center'>{instructor.verified ? <CheckCircleIcon className='w-7 h-7 text-green-600' /> : <XCircleIcon className='w-7 h-7 text-red-600' />}</td>
                                                <td>{instructor.course}</td>
                                                <td><Link className={`font-semibold ${instructor.verified ? "text-red-700":"text-green-700"}`} href={route('admin.verify')} method='patch' as='button' data={{id:instructor.id, verify: (instructor.verified ? 0:1)}}> {instructor.verified ? "Unverify":"Verify"}</Link></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        }
                    />
                }

            />

        </Admin>
    )
}
