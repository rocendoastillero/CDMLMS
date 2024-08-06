import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'

export default function WeekView() {

    const schedules = usePage().props.schedules;

    useEffect((() => {
        console.log(schedules)
    }), [])

    return (
        
    )
}
