import CompactHeader from "@/Components/CDMLMS/CompactHeader";
import PageNav from "@/Components/CDMLMS/PageNav";
import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import Table from "@/Components/CDMLMS/Table";
import Layout from "@/Layouts/Layout";
import { ArrowDownTrayIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function ViewInstructor({ auth, instructor, reports, subjects, files }) {

    useEffect(() => {
        console.log(reports);
    }, [])

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
                        <Table
                            paginated={reports}
                            headersCount={8}
                            headerStyle="border-b-2"
                            headers={
                                <>
                                    <th >Date</th>
                                    <th >Start</th>
                                    <th >End</th>
                                    <th >Activity</th>
                                    <th >Designation</th>
                                    <th >Venue</th>
                                    <th >Time Spent</th>
                                    <th >Report</th>
                                </>
                            }
                            body={
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
                        />
                    }
                />

                <SingleCardWithHeader
                    header='Subjects'
                    body={
                        <Table
                            paginated={subjects}
                            headersCount={1}
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

                <SingleCardWithHeader
                    header='Files'
                    body={
                        <Table
                            paginated={files}
                            headersCount={4}
                            headers={
                                <>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Size</th>
                                    <th>Uploaded</th>
                                </>
                            }
                            body={
                                files.data.map(file =>
                                    <tr key={file.id}>
                                        <td>{file.name}</td>
                                        <td>{file.type}</td>
                                        <td>{file.size}</td>
                                        <td>{file.created_at}</td>
                                        <button onClick={() => window.open(route('admin.download', file.id))} as='button'>
                                            <ArrowDownTrayIcon className='w-4 h-4' />
                                        </button>
                                    </tr>
                                )
                            }
                        />
                    }
                />
            </CompactHeader>
        </Layout>
    )
}