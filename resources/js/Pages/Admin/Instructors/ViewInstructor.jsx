import CompactHeader from "@/Components/CDMLMS/CompactHeader";
import PageNav from "@/Components/CDMLMS/PageNav";
import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import Layout from "@/Layouts/Layout";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function ViewInstructor({ auth, instructor, reports, subjects, files }) {

    useEffect(()=>{
        
    },[])

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
        >
            <Head title={instructor.lastname} />
            <CompactHeader
                title={`${instructor.firstname} ${instructor.lastname}`}
                icon={<UserCircleIcon className="w-6 h-6" />}
            >
                <SingleCardWithHeader
                    header='Accomplishment Reports'
                    body={
                        <div className="table-responsive mt-2">
                            <table className="datatable-table text-center">
                                <thead>
                                    <tr className="border-b-2">
                                        <th >Date</th>
                                        <th >Start</th>
                                        <th >End</th>
                                        <th >Activity</th>
                                        <th >Designation</th>
                                        <th >Venue</th>
                                        <th >Time Spent</th>
                                        <th >Report</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reports.data.map(report =>
                                            <tr key={report.user_id}>
                                                <td>{report.date}</td>
                                                <td>{report.start}</td>
                                                <td>{report.end}</td>
                                                <td>{report.activity}</td>
                                                <td>{report.designation}</td>
                                                <td>{report.venue}</td>
                                                <td>{report.timespent}</td>
                                                <td>{report.report}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div className='w-full flex flex-row justify-between'>
                                <div>
                                    <p>Page: {reports.current_page}</p>
                                </div>
                                <div className='flex flex-row'>
                                    <PageNav
                                        links={reports.links}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                />

                <SingleCardWithHeader
                    header='Subjects'
                    body={
                        <div className="mt-4">

                        </div >
                    }
                />

                <SingleCardWithHeader
                    header='Files'
                    body={
                        <div className="mt-4">

                        </div >
                    }
                />
            </CompactHeader>
        </Layout>
    )
}