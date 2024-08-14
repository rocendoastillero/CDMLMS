import OverlapHeader from "@/Components/CDMLMS/OverlapHeader";
import PageNav from "@/Components/CDMLMS/PageNav";
import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import Dropdown from "@/Components/Dropdown";
import Layout from "@/Layouts/Layout";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useEffect } from "react";


export default function Schedules({ auth, pageHeaderSubtitle = 'view Schedule', subjects }) {

    useEffect(() => {
        console.log(subjects);
    }, [])

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

                <SingleCardWithHeader
                    header='Pick a Subject'
                    body={
                        <div className="mt-4 mb-2 w-full table-reponsive">
                            <table className="datatable-table !w-full text-center">
                                <thead>
                                    <tr>
                                        <th>CODE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        subjects.data.map(
                                            subject =>
                                                <tr key={subject.id}>
                                                    <td>
                                                        <Link className="nav-link" href={route('schedules.view', subject.id)}>
                                                            {subject.code}
                                                        </Link>

                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div className="flex flex-row justify-between">
                                <div>
                                    Page: {subjects.current_page}
                                </div>
                                <div className="flex flex-row">
                                    <PageNav
                                        links={subjects.links}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                />
            </OverlapHeader>

        </Layout>
    );
}