import CompactHeader from '@/Components/CDMLMS/CompactHeader'
import Layout from '@/Layouts/Layout'
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';
import React from 'react'

export default function ViewSched({ auth, subject, schedules }) {
    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
        >
            <Head title='View Schedule'/>
            <CompactHeader
                icon={<CalendarDaysIcon className='w-7 h-7'/>}
                title={`View Schedule of ${subject.code}`}
            >

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

            </CompactHeader>
        </Layout>
    )
}
