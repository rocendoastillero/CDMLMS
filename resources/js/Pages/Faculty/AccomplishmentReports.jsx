import React, { useEffect, useState } from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import { PencilIcon, TrashIcon, ArchiveBoxXMarkIcon, CheckIcon, XMarkIcon, TrophyIcon, PlusIcon } from "@heroicons/react/24/outline";
import Layout from '@/Layouts/Layout'
import { Head, Link, useForm } from '@inertiajs/react'
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky'
import AlertCard from '@/Components/CDMLMS/AlertCard';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';


/**
 * @function Page Page of the Accomplishment Reports
 * 
 * @param auth The Authentication 
 * @param paginated Accomplishment Reports 
 * @returns Page
 */
export default function AccomplishmentReports({ auth, paginated }) {

    const [view, setView] = useState(1);

    const [editing, setEditing] = useState(false);

    const [warning, setWarning] = useState(false);

    const empty = {
        id: '',
        date: '',
        start: '',
        end: '',
        activity: '',
        venue: '',
        designation: '',
        report: '',
    };

    const [selectedReport, setSelectedReport] = useState({
        id: '',
        date: '',
        start: '',
        end: '',
        activity: '',
        venue: '',
        designation: '',
        report: '',
    });

    const { data, setData, post, patch, errors, hasErrors, processing, reset, recentlySuccessful } = useForm({
        id: '',
        date: '',
        start: '',
        end: '',
        activity: '',
        venue: '',
        designation: '',
        report: '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (editing) {
            console.log(data.id);
            patch(route('accomplishmentreports.update', data.id), { onSuccess: () => reset(), preserveScroll: true });
        } else {
            console.log(data);
            console.log('creating');
            post(route('accomplishmentreports.store'), { onSuccess: () => { reset(); setView(1); }, preserveScroll: true });
            console.log(errors)

        }
    }

    useEffect((() => {
        console.log(paginated);
    }), []);

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
            icon={<TrophyIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Accomplishment Reports'
            headerSubtitle='View Accomplishment Reports' >
            <Head title='Accomplishment Reports' />
            <CardsWithSticky
                contentSize='!w-10/12'
                stickySize='!w-2/12'
                cards={
                    <>
                        {(
                            () => {

                                if (view == 1) {
                                    return (
                                        paginated.data.length == 0 ? (
                                            <AlertCard
                                                type='alert-info'
                                                icon={<ArchiveBoxXMarkIcon className="h-6 w-6 " />}
                                                title="Empty!"
                                                message="Reports are empty, Create a report"
                                            />
                                        ) : (
                                            <SingleCardCenter
                                                table={
                                                    <>
                                                        <table className='datatable-table mt-3 text-center'>
                                                            <thead>
                                                                <tr className='card-header'>
                                                                    <th >Date</th>
                                                                    <th >Start</th>
                                                                    <th >End</th>
                                                                    <th >Activity</th>
                                                                    <th >Designation</th>
                                                                    <th >Venue</th>
                                                                    <th >Time Spent</th>
                                                                    <th >Report</th>
                                                                    <th >Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    paginated.data.map(report =>
                                                                        <tr key={report.user_id}>
                                                                            <td>{report.date}</td>
                                                                            <td>{report.start}</td>
                                                                            <td>{report.end}</td>
                                                                            <td>{report.activity}</td>
                                                                            <td>{report.designation}</td>
                                                                            <td>{report.venue}</td>
                                                                            <td>{report.timespent}</td>
                                                                            <td>{report.report}</td>
                                                                            <td>

                                                                            </td>
                                                                        </tr>

                                                                    )
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </>
                                                }
                                            />
                                        )
                                    )
                                } else if (view == 0 || view == 2) {
                                    return (
                                        <SingleCardWithHeader
                                            header=
                                            {
                                                editing ? (
                                                    "Edit Report"
                                                ) : (
                                                    "Create Report"
                                                )
                                            }
                                            button={
                                                <div className='flex flex-row'>
                                                    <div className={`rounded-[50%] h-10 w-10  flex place-content-center items-center mx-3 !bg-sky-700  `}
                                                    >
                                                        {
                                                            editing ? (
                                                                <PencilIcon className={`h-5 w-5  !text-white `} />
                                                            ) : (
                                                                <PlusIcon className='h-7 w-7 !text-white' />
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            }
                                            body={
                                                <form className='p-3' onSubmit={submit}>
                                                    <div className='flex flex-row gap-6'>
                                                        <div className='w-1/3 flex flex-col gap-4'>
                                                            <div>
                                                                <label htmlFor="Date">Date</label>
                                                                <input className='form-control' type="date" value={data.date} onChange={(e) => { setData('date', e.target.value) }} />

                                                            </div>
                                                            <div>
                                                                <label htmlFor="Start">Start</label>
                                                                <input className='form-control' type="time" value={data.start} onChange={(e) => { setData('start', e.target.value) }} />
                                                                {errors.start}
                                                            </div>
                                                            <div>
                                                                <label htmlFor="End">End</label>
                                                                <input className='form-control' type="time" value={data.end} onChange={(e) => { setData('end', e.target.value) }} />
                                                                {errors.end}
                                                            </div>
                                                        </div>
                                                        <div className='w-2/3 flex flex-col gap-4'>
                                                            <div>
                                                                <label htmlFor="Activity">Activity</label>
                                                                <input className='form-control' type="text" value={data.activity} onChange={(e) => { setData('activity', e.target.value) }} />
                                                                {errors.activity}
                                                            </div>
                                                            <div>
                                                                <label htmlFor="Venue">Venue</label>
                                                                <input className='form-control' type="text" value={data.venue} onChange={(e) => { setData('venue', e.target.value) }} />
                                                                {errors.venue}
                                                            </div>
                                                            <div>
                                                                <label htmlFor="Designation">Designation</label>
                                                                <input className='form-control' type="text" value={data.designation} onChange={(e) => { setData('designation', e.target.value) }} />
                                                                {errors.designation}
                                                            </div>
                                                            <div>
                                                                <label htmlFor="Report">Report</label>
                                                                <input className='form-control' type="text" value={data.report} onChange={(e) => { setData('report', e.target.value) }} />
                                                                {errors.report}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary" type="submit" disabled={processing}>
                                                        {
                                                            editing ? (
                                                                "Edit"
                                                            ) : (
                                                                "Add"
                                                            )
                                                        }
                                                    </button>
                                                </form>
                                            }
                                        />
                                    );
                                }
                            }
                        )()}
                    </>
                }
                withCard={false}
                stickyNavBody={
                    <div className='flex flex-col text-right pr-4'>
                        <div className='text-slate-800 font-bold text-lg my-2 w-full hover:cursor-pointer '
                            onClick={() => {
                                setEditing(false);
                                setData(empty);
                                setSelectedReport(empty);
                                setView(1);
                            }}
                        >
                            <div className={` border-[#009F1B] ${(view == 1) && ("border-l-4")}`}>
                                <div className={`transition ease-in-out delay-100 hover:translate-x-[-18px] hover:!text-[#009F1B] ${(view == 1) && ("!translate-x-[-48px] !text-[#009F1B]")}`}>
                                    Reports
                                </div>
                            </div>
                        </div>
                        <div className='text-slate-800 font-bold text-lg my-2 w-full hover:cursor-pointer '
                            onClick={() => {
                                setEditing(false);
                                setData(empty);
                                setSelectedReport(empty);
                                setView(0);
                            }}
                        >
                            <div className={` border-[#009F1B] ${(view == 0) && ("border-l-4")}`}>
                                <div className={`transition ease-in-out delay-100 hover:translate-x-[-18px] hover:!text-[#009F1B] ${(view == 0) && ("!translate-x-[-48px] !text-[#009F1B]")}`}>
                                    Create
                                </div>
                            </div>
                        </div>
                        {
                            (view == 2) && (
                                <div className='text-slate-800 font-bold text-lg mb-2 mt-3 w-full border-[#009F1B] border-l-4'>
                                    <div className="!translate-x-[-64px] !text-[#009F1B]">
                                        Edit
                                    </div>
                                </div>
                            )
                        }
                    </div>
                }
            />

        </Layout>
    )
}
