import OverlapHeader from "@/Components/CDMLMS/OverlapHeader";
import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import Dropdown from "@/Components/Dropdown";
import Layout from "@/Layouts/Layout";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useEffect } from "react";


export default function Schedules({ auth, pageHeaderSubtitle = 'view Schedule', subjects }) {

    useEffect(()=>{
        console.log(subjects);
    },[])

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
        >
            <Head title="Schedules" />
            <OverlapHeader
                icon={<CalendarDaysIcon className='w-9 h-9 text-gray-500' />}
                title='Schedule'
                subtitle={pageHeaderSubtitle}

            >

                <div className="relative w-full">
                    <div className="absolute bottom-[105%] mb-1">

                    </div>
                </div>

                <SingleCardWithHeader
                    header='Pick a Subject'
                    body={
                        <div className="mt-4 mb-2">
                            <Link href={route('admin.subjects')} className="nav-link">
                                Subjects
                            </Link>
                        </div>
                    }
                />
            </OverlapHeader>

        </Layout>
    );
}