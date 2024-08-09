import CompactHeader from "@/Components/CDMLMS/CompactHeader";
import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import Layout from "@/Layouts/Layout";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

export default function View({ auth, instructor, reports, subjects, files }) {
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
                        <div className="table-reponsive mt-2">
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
                                        reports.map(report =>
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
            </CompactHeader>
        </Layout>
    )
}