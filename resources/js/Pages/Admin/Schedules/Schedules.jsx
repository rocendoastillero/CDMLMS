import Layout from "@/Layouts/Layout";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
import WeekView from "./WeekView";

export default function Schedules({ auth, pageHeaderSubtitle = 'view Schedule' , schedules}) {

    

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
            icon={<CalendarDaysIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Schedule'
            headerSubtitle={pageHeaderSubtitle}
        >
            <Head title="Schedules" />

            <div className="relative w-full">
                <div className="absolute bottom-[105%] mb-1">

                </div>
            </div>

            <WeekView

            />
            {/*  */}
        </Layout>
    );
}