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
export default function RepositoryOfFiles({ auth, paginate, type }) {

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
                <SingleCardWithHeader
                    //TODO convert to Navigation Card - Bootstrap
                    header={
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <Link href={route('admin.repositoryoffiles')} className={`nav-link ${type == 'classrecord' ? "active" : ""}`} as="button">
                                    Class Record
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={route('admin.repositoryoffiles.gradesheet')} className={`nav-link ${type == 'gradesheet' ? "active" : ""}`} as="button">
                                    Grade Sheet
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={route('admin.repositoryoffiles.syllabus')} className={`nav-link ${type == 'syllabus' ? "active" : ""}`} as="button">
                                    Syllabus
                                </Link>
                            </li>
                        </ul>
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
                                        paginated.data == '' ? (
                                            <tr>
                                                <td colSpan='5'>
                                                    Empty
                                                </td>
                                            </tr>
                                        ) : (
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


            </OverlapHeader>

        </Layout>
    )
}
