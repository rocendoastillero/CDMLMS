import React, { useEffect, useState } from 'react'
import Layout from '@/Layouts/Layout'
import { Headers } from "@/utils/headers"
import { Head } from '@inertiajs/react'
import AlertCard from '@/Components/CDMLMS/AlertCard';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';

const headers = Headers('w-9 w-9');

/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Schedules({ auth, subjects, schedules }) {

    const [tab, setTab] = useState({
        index: 0,
        subject_id: subjects == '' ? '' : subjects[0].id,
        subject_name: subjects == '' ? '' : subjects[0].subject
    });

    useEffect(() => {
    }, []);

    return (
        <Layout user={auth.user} icon={headers[3].icon} headerTitle={headers[3].title} headerSubtitle={headers[3].subTitle}>
            <Head title={headers[3].title} />
            <nav className="nav nav-borders flex justify-between !mb-8">
                <div className='flex flex-row items-center'>
                    {

                        subjects.map((subject, index) =>
                            <div className={`nav-link cursor-pointer ${tab.index == index ? "border-b-4 border-white !text-white" : "!text-gray-300 "}`} key={subject.id} onClick={() => setTab({ index: index, subject_id: subject.id, subject_name: subject.subject })}>
                                {subject.subject}
                            </div>
                        )
                    }
                </div>
                <div className='flex flex-row items-center text-white'>
                    <div className='cursor-pointer '>

                    </div>
                </div>
            </nav>
            <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 '>
                {
                    schedules != '' ? (
                        schedules.map(schedule => tab.subject_id == schedule.subject_id && (
                            <div className='flex mx-2 mb-4'>
                                <a className="card lift lift-sm h-100" href="https://request.pnm.edu.ph">
                                    <div className="card-body py-5">
                                        <h5 className="card-title text-primary mb-2 flex">
                                            {tab.subject_name}
                                        </h5>
                                        <p className="card-text">Description</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="small text-muted">May-30-24</div>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <AlertCard
                            type='alert-info'
                            icon={<ArchiveBoxXMarkIcon className="h-6 w-6" />}
                            title="Empty!"
                            message={
                                <div className='flex flex-row'>
                                    Schedules for
                                    <h6 className='alert-heading mx-1 mt-[.2rem]'>{tab.subject_name}</h6>
                                     are empty
                                </div>
                            }
                        />
                    )
                }
            </div>
        </Layout>
    )
}