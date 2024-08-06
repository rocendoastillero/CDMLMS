import { usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'

export default function WeekView() {

    const schedules = usePage().props.schedules;

    useEffect((() => {
        console.log(schedules)
    }), [])

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
                                                Room {schedule.room}
                                            </p>
                                        </div>
                                        <div className="card-footer !p-2">
                                            <div className="small text-muted">
                                                {`${schedule.start}-${schedule.end}`}
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
                </div>
            </div>
            <div className="relative w-1/7 h-5">
                Wednesday
                <div className="absolute top-[105%] flex flex-col mt-4 w-full">
                </div>
            </div>
            <div className="relative w-1/7 h-5">
                Thursday
                <div className="absolute top-[105%] flex flex-col mt-4 w-full">
                </div>
            </div>
            <div className="relative w-1/7 h-5">
                Friday
                <div className="absolute top-[105%] flex flex-col mt-4 w-full">
                </div>
            </div>
            <div className="relative w-1/7 h-5">
                Saturday
                <div className="absolute top-[105%] flex flex-col mt-4 w-full">
                </div>
            </div>
            <div className="relative w-1/7 h-5">
                Sunday
                <div className="absolute top-[105%] flex flex-col mt-4 w-full">
                </div>
            </div>
        </div>
    )
}
