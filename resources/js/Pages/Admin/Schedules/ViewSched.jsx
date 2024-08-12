import Layout from '@/Layouts/Layout'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Create from './Create';
import { Head } from '@inertiajs/react';
import CompactHeader from '@/Components/CDMLMS/CompactHeader';



export default function ViewSched({ auth, schedules, title, subject }) {

    const [tab, setTab] = useState(0);

    useEffect((() => {
        console.log(title)
    }), [])

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
        >
            <Head title='Schedules' />
            <CompactHeader
                icon={<CalendarDaysIcon className='w-7 h-7 text-gray-500' />}
                title={title}
                buttons={
                    <>
                        <button onClick={() => { setTab(0) }} className={`btn btn-sm btn-light text-primary ${tab == 0 ? "" : ""}`} >
                            Schedule
                        </button>
                        <button onClick={() => { setTab(1) }} className={`btn btn-sm btn-light text-primary ${tab == 1 ? "" : ""}`} >
                            Create
                        </button></>
                }
            >
                {
                    (
                        () => {
                            if (tab == 0) {
                                return (
                                    <div className="flex flex-col md:flex-row gap-3 md:gap-1 w-full mt-2 text-black text-center text-lg">
                                        <div className="flex flex-row md:!flex-col gap-3 md:h-auto w-1/7 md:items-center ">
                                            <div className="flex items-center">Monday</div>
                                            <div className="flex flex-row md:!flex-col gap-3">
                                                {
                                                    schedules.map(schedule => {
                                                        if (schedule.day == 'Mon') {
                                                            return (
                                                                <div className='card lift lift-sm !text-md'>
                                                                    <div className='card-body !p-3'>
                                                                        <div className="card-title">
                                                                            {`${schedule.code} - ${schedule.type}`}
                                                                        </div>
                                                                        <p className='card-text'>
                                                                            Room {schedule.room} <br />
                                                                            BS{schedule.course} {schedule.yrsec}
                                                                        </p>
                                                                    </div>
                                                                    <div className="card-footer !p-2">
                                                                        <div className="small text-muted">
                                                                            {`${schedule.start} - ${schedule.end}`}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-row md:!flex-col gap-3 md:h-auto w-1/7 md:items-center ">
                                            <div className="flex items-center">Tuesday</div>

                                            <div className="flex flex-row md:!flex-col gap-3">
                                                {
                                                    schedules.map(schedule => {
                                                        if (schedule.day == 'Tue') {
                                                            return (
                                                                <div className='card lift lift-sm !text-md'>
                                                                    <div className='card-body !p-3'>
                                                                        <div className="card-title">
                                                                            {`${schedule.code} - ${schedule.type}`}
                                                                        </div>
                                                                        <p className='card-text'>
                                                                            Room {schedule.room} <br />
                                                                            BS{schedule.course} {schedule.yrsec}
                                                                        </p>
                                                                    </div>
                                                                    <div className="card-footer !p-2">
                                                                        <div className="small text-muted">
                                                                            {`${schedule.start} -${schedule.end}`}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-row md:!flex-col gap-3 md:h-auto w-1/7 md:items-center ">
                                            <div className="flex items-center">Wednesday</div>
                                            <div className="flex flex-row md:!flex-col gap-3">
                                                {
                                                    schedules.map(schedule => {
                                                        if (schedule.day == 'Wed') {
                                                            return (
                                                                <div className='card lift lift-sm !text-md'>
                                                                    <div className='card-body !p-3'>
                                                                        <div className="card-title">
                                                                            {`${schedule.code} - ${schedule.type}`}
                                                                        </div>
                                                                        <p className='card-text'>
                                                                            Room {schedule.room} <br />
                                                                            BS{schedule.course} {schedule.yrsec}
                                                                        </p>
                                                                    </div>
                                                                    <div className="card-footer !p-2">
                                                                        <div className="small text-muted">
                                                                            {`${schedule.start} -${schedule.end}`}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-row md:!flex-col gap-3 md:h-auto w-1/7 md:items-center ">
                                            <div className="flex items-center">Thursday</div>
                                            <div className="flex flex-row md:!flex-col gap-3">
                                                {
                                                    schedules.map(schedule => {
                                                        if (schedule.day == 'Thu') {
                                                            return (
                                                                <div className='card lift lift-sm !text-md'>
                                                                    <div className='card-body !p-3'>
                                                                        <div className="card-title">
                                                                            {`${schedule.code} - ${schedule.type}`}
                                                                        </div>
                                                                        <p className='card-text'>
                                                                            Room {schedule.room} <br />
                                                                            BS{schedule.course} {schedule.yrsec}
                                                                        </p>
                                                                    </div>
                                                                    <div className="card-footer !p-2">
                                                                        <div className="small text-muted">
                                                                            {`${schedule.start} -${schedule.end}`}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-row md:!flex-col gap-3 md:h-auto w-1/7 md:items-center ">
                                            <div className="flex items-center">Friday</div>
                                            <div className="flex flex-row md:!flex-col gap-3">
                                                {
                                                    schedules.map(schedule => {
                                                        if (schedule.day == 'Fri') {
                                                            return (
                                                                <div className='card lift lift-sm !text-md'>
                                                                    <div className='card-body !p-3'>
                                                                        <div className="card-title">
                                                                            {`${schedule.code} - ${schedule.type}`}
                                                                        </div>
                                                                        <p className='card-text'>
                                                                            Room {schedule.room} <br />
                                                                            BS{schedule.course} {schedule.yrsec}
                                                                        </p>
                                                                    </div>
                                                                    <div className="card-footer !p-2">
                                                                        <div className="small text-muted">
                                                                            {`${schedule.start} -${schedule.end}`}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-row md:!flex-col gap-3 md:h-auto w-1/7 md:items-center ">
                                            <div className="flex items-center">Saturday</div>
                                            <div className="flex flex-row md:!flex-col gap-3">
                                                {
                                                    schedules.map(schedule => {
                                                        if (schedule.day == 'Sat') {
                                                            return (
                                                                <div className='card lift lift-sm !text-md'>
                                                                    <div className='card-body !p-3'>
                                                                        <div className="card-title">
                                                                            {`${schedule.code} - ${schedule.type}`}
                                                                        </div>
                                                                        <p className='card-text'>
                                                                            Room {schedule.room} <br />
                                                                            BS{schedule.course} {schedule.yrsec}
                                                                        </p>
                                                                    </div>
                                                                    <div className="card-footer !p-2">
                                                                        <div className="small text-muted">
                                                                            {`${schedule.start} -${schedule.end}`}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="flex flex-row md:!flex-col gap-3 md:h-auto w-1/7 md:items-center ">
                                            <div className="flex items-center">Sunday</div>
                                            <div className="flex flex-row md:!flex-col h-full gap-3">
                                                {
                                                    schedules.map(schedule => {
                                                        if (schedule.day == 'Sun') {
                                                            return (
                                                                <div className='card lift lift-sm !text-md'>
                                                                    <div className='card-body !p-3'>
                                                                        <div className="card-title">
                                                                            {`${schedule.code} - ${schedule.type}`}
                                                                        </div>
                                                                        <p className='card-text'>
                                                                            Room {schedule.room} <br />
                                                                            BS{schedule.course} {schedule.yrsec}
                                                                        </p>
                                                                    </div>
                                                                    <div className="card-footer !p-2">
                                                                        <div className="small text-muted">
                                                                            {`${schedule.start} -${schedule.end}`}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                            else if (tab == 1) {
                                return (
                                    <Create
                                        back={() => setTab(0)}
                                    />
                                );
                            }
                        }
                    )
                        ()
                }
            </CompactHeader>

        </Layout>
    )
}
