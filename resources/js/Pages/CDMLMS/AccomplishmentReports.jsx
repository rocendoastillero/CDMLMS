import React, { useState } from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import { PencilIcon, TrashIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";

import Layout from '@/Layouts/Layout'
import { Headers } from "@/utils/headers"
import { Head, Link, useForm } from '@inertiajs/react'
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky'
import AlertCard from '@/Components/CDMLMS/AlertCard';

const headers = Headers('w-9 w-9');

/**
 * @function Page Page of the Accomplishment Reports
 * 
 * @param auth The Authentication 
 * @param reports Accomplishment Reports 
 * @returns Page
 */
export default function AccomplishmentReports({ auth, reports }) {

    const [view, setView] = useState(1);


    const [empytName, setEmptyName] = useState(false);

    const [editing, setEditing] = useState(false);

    const [warning, setWarning] = useState(false);

    const empty = {
        id: '',
        title: '',
        subTitle: '',
        body: '',
    };

    const [selectedReport, setSelectedReport] = useState({
        id: '',
        title: '',
        subTitle: '',
        body: '',
    });

    const { data, setData, post, patch, errors, hasErrors, processing, reset, recentlySuccessful } = useForm({
        id: '',
        title: '',
        subtitle: '',
        body: '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (data.title == empty.title) {
            setEmptyName(true);
        } else {
            if (editing) {
                console.log(data.id);
                patch(route('dummy.update', data.id), { onSuccess: () => reset() });
            } else {
                post(route('dummy.store'), { onSuccess: () => reset() });
                setView(1);
            }
        }
    }

    return (
        <Layout user={auth.user} icon={headers[8].icon} headerTitle={headers[8].title} headerSubTitle={headers[8].subTitle} >
            <Head title={headers[8].title} />
            <CardsWithSticky
                contentSize='!w-10/12'
                stickySize='!w-2/12'
                cards={
                    <>
                        {(() => {

                            if (view == 1) {
                                if (reports == '') {
                                    return (
                                        <AlertCard
                                            type='alert-info'
                                            icon={<ArchiveBoxXMarkIcon class="h-6 w-6 " />}
                                            title="Empty!"
                                            message="Reports are empty"
                                        />
                                    );
                                } else {


                                    return (
                                        reports.map(report =>
                                            <SingleCardWithHeader
                                                key={report.id}
                                                header={
                                                    <div className='text-[1.2rem] font-semibold'>
                                                        {report.title}
                                                    </div>
                                                }
                                                subtitle={report.subtitle}
                                                body={report.body}
                                                button={
                                                    <div className='flex flex-row'>
                                                        <div className={`rounded-[50%] h-10 w-10 bg-sky-500 flex place-content-center items-center mx-1 hover:!bg-sky-700  `}
                                                            onClick={
                                                                () => {
                                                                    setEditing(true);
                                                                    setSelectedReport(report);
                                                                    setData(report);
                                                                    setView(2);
                                                                }
                                                            }
                                                        >
                                                            <PencilIcon className={`h-5 w-5 !text-white hover:!text-white `} />
                                                        </div>

                                                        <Link className='rounded-[50%] h-10 w-10 bg-red-500 flex place-content-center items-center mx-1 hover:!bg-red-700' as='button' method='delete'
                                                            href={route('dummy.destroy', report.id)}
                                                        >
                                                            <TrashIcon class="h-5 w-5  text-white" />
                                                        </Link>
                                                    </div>
                                                }
                                            />
                                        )
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
                                        buttton={
                                            <div className='flex flex-row'>
                                                <div className={`rounded-[50%] h-10 w-10  flex place-content-center items-center mx-1 !bg-sky-700  `}
                                                >
                                                    <PencilIcon className={`h-5 w-5  !text-white `} />
                                                </div>
                                            </div>
                                        }
                                        body={
                                            <form className='p-3' onSubmit={submit}>
                                                {data.id}
                                                <div className="mb-4">
                                                    <input className="form-control !rounded-none !border-0 !border-b-2 !text-lg focus:!border-black focus:!ring-0 !w-2/3" type="text" placeholder="Title" value={data.title} onChange={(e) => { setData('title', e.target.value) }} />
                                                </div>
                                                <div className="mb-4">
                                                    <input className="form-control !rounded-none !border-0 !border-b-2 !text-lg focus:!border-black focus:!ring-0 !w-1/3" type="text" placeholder="Subtitle" value={data.subtitle} onChange={(e) => { setData('subtitle', e.target.value) }} />
                                                </div>
                                                <div className='my-8'>
                                                    <textarea className='form-control !h-[22rem] !rounded-[4px] !border-1  focus:!border-black focus:!ring-0 !text-lg !leading-[150%]' placeholder='Body' value={data.body} onChange={(e) => { setData('body', e.target.value) }} />
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

                        })()}
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
                            <div className={` border-[#009F1B] ${(view == 1) && ("border-l-2")}`}>
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
                            <div className={` border-[#009F1B] ${(view == 0) && ("border-l-2")}`}>
                                <div className={`transition ease-in-out delay-100 hover:translate-x-[-18px] hover:!text-[#009F1B] ${(view == 0) && ("!translate-x-[-48px] !text-[#009F1B]")}`}>
                                    Create
                                </div>
                            </div>
                        </div>
                        {
                            (view == 2) && (
                                <div className='text-slate-800 font-bold text-lg my-2 w-full'>
                                    <div className="!translate-x-[-64px]">
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
