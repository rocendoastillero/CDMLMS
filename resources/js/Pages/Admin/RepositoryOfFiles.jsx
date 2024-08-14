import React, { useEffect, useState } from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Head, Link } from '@inertiajs/react'
import { ArrowDownTrayIcon, ArrowLeftIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline'
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader'
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter'
import PageNav from '@/Components/CDMLMS/PageNav'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function RepositoryOfFiles({ auth, paginate }) {

    const [paginated, setPaginated] = useState(paginate);

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
        >
            <Head title='Repository of Files' />
            <OverlapHeader
                icon={<CloudArrowUpIcon className='w-9 h-9 text-gray-500' />}
                title='Repository of Files'
                subtitle='View Repository of Files'
            >
                {
                    (
                        () => {
                            if (paginated == '') {
                                return (
                                    <SingleCardWithHeader
                                        header="Files"
                                        body={
                                            <div className='flex flex-col gap-3 mt-3'>
                                                <Link href={route('admin.repositoryoffiles.classrecord')} className='nav-link text-start' as='button'>Class Record</Link>
                                                <Link href={route('admin.repositoryoffiles.gradesheet')} className='nav-link text-start' as='button'>Grade Sheet</Link>
                                                <Link href={route('admin.repositoryoffiles.syllabus')} className='nav-link text-start' as='button'>Syllabus</Link>
                                            </div>
                                        }
                                    />
                                )
                            } else {
                                return (
                                    //TODO convert to Navigation Card - Bootstrap
                                    <SingleCardWithHeader
                                        header={
                                            <button onClick={()=>setPaginated('')}>
                                                <ArrowLeftIcon className='w-5 h-5' />
                                            </button>
                                        }
                                        body={
                                            <div className='table-responsive mt-3'>
                                                <table className="datatable-table text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>Instructor</th>
                                                            <th>Name</th>
                                                            <th>Size</th>
                                                            <th>Uploaded</th>
                                                            <th>Download</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            paginated.data.map(
                                                                file =>
                                                                    <tr>
                                                                        <td>{file.instructor}</td>
                                                                        <td>{file.name}</td>
                                                                        <td>{file.size}</td>
                                                                        <td>{file.created_at}</td>
                                                                        <td>
                                                                            <button onClick={() => window.open(route('admin.download', file.id))} as='button'>
                                                                                <ArrowDownTrayIcon className='w-4 h-4' />
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                                <div className="flex flex-row justify-between">
                                                    <div>
                                                        Page: {paginated.current_page}
                                                    </div>
                                                    <div className='flex flex-row'>
                                                        <PageNav
                                                            links={paginated.links}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />
                                )
                            }
                        }

                    )()
                }

            </OverlapHeader>

        </Layout>
    )
}
