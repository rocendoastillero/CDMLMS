import Layout from '@/Layouts/Layout'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import Create from './Create';
import { Head } from '@inertiajs/react';



export default function ViewSched({ auth, schedules, pageHeaderSubtitle = 'view Schedules', subject }) {

    const [tab, setTab] = useState(0);

    useEffect((() => {
        console.log(schedules)
    }), [])

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
            icon={<CalendarDaysIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Schedule'
            headerSubtitle={pageHeaderSubtitle}
        ><Head title='Schedules'/>
            <div className='relative text-gray-400 p-1 my-2'>
                <div className='absolute bottom-[110%] w-full flex flex-row gap-2 md:mb-1 lg:mb-2'>
                    <button onClick={() => { setTab(0) }} className={`${tab == 0 ? "border-b-2 !text-white" : ""} p-2 `} >
                        Schedule
                    </button>
                    <button onClick={() => { setTab(1) }} className={`${tab == 1 ? "border-b-2 !text-white" : ""} p-2 `} >
                        Create
                    </button>
                </div>
            </div>
            {
                (
                    () => {
                        if (tab == 0) {
                            return (
                                <div className="flex flex-row gap-1 mt-2 text-white text-center text-lg">
                                    <div className="relative w-1/7 h-5">
                                        Monday
                                        <div className="absolute top-[105%] flex flex-col gap-3 mt-4 w-full">
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
                                                                        Room {schedule.room} <br/>
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
                                    <div className="relative w-1/7 h-5">
                                        Tuesday
                                        <div className="absolute top-[105%] flex flex-col mt-4 w-full">
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
                                                                        Room {schedule.room} <br/>
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
                                    <div className="relative w-1/7 h-5">
                                        Wednesday
                                        <div className="absolute top-[105%] flex flex-col mt-4 w-full">
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
                                                                        Room {schedule.room} <br/>
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
                                    <div className="relative w-1/7 h-5">
                                        Thursday
                                        <div className="absolute top-[105%] flex flex-col mt-4 w-full">
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
                                                                        Room {schedule.room} <br/>
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
                                    <div className="relative w-1/7 h-5">
                                        Friday
                                        <div className="absolute top-[105%] flex flex-col mt-4 w-full">
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
                                                                        Room {schedule.room} <br/>
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
                                    <div className="relative w-1/7 h-5">
                                        Saturday
                                        <div className="absolute top-[105%] flex flex-col mt-4 w-full">
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
                                                                        Room {schedule.room} <br/>
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
                                    <div className="relative w-1/7 h-5">
                                        Sunday
                                        <div className="absolute top-[105%] flex flex-col mt-4 w-full">
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
                                                                        Room {schedule.room} <br/>
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
                                <Create />
                            );
                        }
                    }
                )
                    ()
            }

        </Layout>
    )
}
