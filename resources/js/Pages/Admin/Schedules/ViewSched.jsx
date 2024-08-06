import Layout from '@/Layouts/Layout'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import WeekView from './WeekView'
import Create from './Create';



export default function ViewSched({ auth, schedules, pageHeaderSubtitle = 'view Schedules' , subject}) {

    const [tab, setTab] = useState(0);

    useEffect((()=>{
        console.log(schedules)
    }),[])

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
            icon={<CalendarDaysIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Schedule'
            headerSubtitle={pageHeaderSubtitle}

        >
            <div className='relative text-gray-400 p-1 my-2'>
                <div className='absolute bottom-[110%] w-full flex flex-row gap-2 md:mb-1 lg:mb-2'>
                    <button onClick={() => { setTab(0) }} className={`${tab == 0 ? "border-b-2 !text-white" : ""} md:p-1 lg:p-2 `} >
                        Schedule
                    </button>
                    <button onClick={() => { setTab(1) }} className={`${tab == 1 ? "border-b-2 !text-white" : ""} md:p-1 lg:p-2 `} >
                        Create
                    </button>
                </div>
            </div>
            {
                (
                    () => {
                        if (tab == 0) {
                            return (
                                <WeekView/>
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
