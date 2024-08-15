import OverlapHeader from "@/Components/CDMLMS/OverlapHeader";
import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import Table from "@/Components/CDMLMS/Table";
import Layout from "@/Layouts/Layout";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";


export default function Schedules({ auth, pageHeaderSubtitle = 'view Schedule', subjects }) {

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
                        <Table
                            paginated={subjects}
                            headersCount={1}
                            headerStyle="border-b-2"
                            headers={
                                <th>CODE</th>
                            }
                            body={
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
                        />
                    }
                />
            </OverlapHeader>

        </Layout>
    );
}