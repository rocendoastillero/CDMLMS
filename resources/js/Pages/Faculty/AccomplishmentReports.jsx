import React, { useEffect, useState } from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import { PencilIcon, TrashIcon, ArchiveBoxXMarkIcon, CheckIcon, XMarkIcon, TrophyIcon, PlusIcon } from "@heroicons/react/24/outline";
import Layout from '@/Layouts/Layout'
import { Head, Link, useForm } from '@inertiajs/react'
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky'
import AlertCard from '@/Components/CDMLMS/AlertCard';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';


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
            <>
                <div className='relative text-gray-400 p-1 my-2'>
                    <div className='absolute bottom-[110%] w-full flex flex-row gap-2 md:mb-1 lg:mb-2'>
                        <button onClick={() => { setView(1) }} className={`${view == 1 ? "border-b-2 !text-white" : ""} p-2 `} >
                            View
                        </button>
                        <button onClick={() => { setView(0) }} className={`${view == 0 ? "border-b-2 !text-white" : ""} p-2 `} >
                            Create
                        </button>
                    </div>
                </div>
                {(
                    () => {

                        if (view == 1) {
                            if (paginated.data.length == 0) {
                                return (
                                    <AlertCard
                                        type='alert-info'
                                        icon={<ArchiveBoxXMarkIcon className="h-6 w-6 " />}
                                        title="Empty!"
                                        message="Reports are empty, Create a report"
                                    />
                                );
                            } else {
                                return (
                                    <SingleCardCenter
                                        table={
                                            <div className='table-responsive'>
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
                                            </div>
                                        }
                                    />

                                );
                            }
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
                                                        <InputLabel htmlFor="Date">Date</InputLabel>
                                                        <TextInput className='form-control' type="date" value={data.date} onChange={(e) => { setData('date', e.target.value) }} />

                                                    </div>
                                                    <div>
                                                        <InputLabel htmlFor="Start">Start</InputLabel>
                                                        <TextInput className='form-control' type="time" value={data.start} onChange={(e) => { setData('start', e.target.value) }} />
                                                        {errors.start}
                                                    </div>
                                                    <div>
                                                        <InputLabel htmlFor="End">End</InputLabel>
                                                        <TextInput className='form-control' type="time" value={data.end} onChange={(e) => { setData('end', e.target.value) }} />
                                                        {errors.end}
                                                    </div>
                                                </div>
                                                <div className='w-2/3 flex flex-col gap-4'>
                                                    <div>
                                                        <InputLabel htmlFor="Activity">Activity</InputLabel>
                                                        <TextInput className='form-control' type="text" value={data.activity} onChange={(e) => { setData('activity', e.target.value) }} />
                                                        {errors.activity}
                                                    </div>
                                                    <div>
                                                        <InputLabel htmlFor="Venue">Venue</InputLabel>
                                                        <TextInput className='form-control' type="text" value={data.venue} onChange={(e) => { setData('venue', e.target.value) }} />
                                                        {errors.venue}
                                                    </div>
                                                    <div>
                                                        <InputLabel htmlFor="Designation">Designation</InputLabel>
                                                        <TextInput className='form-control' type="text" value={data.designation} onChange={(e) => { setData('designation', e.target.value) }} />
                                                        {errors.designation}
                                                    </div>
                                                    <div>
                                                        <InputLabel htmlFor="Report">Report</InputLabel>
                                                        <TextInput className='form-control' type="text" value={data.report} onChange={(e) => { setData('report', e.target.value) }} />
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

        </Layout>
    )
}
