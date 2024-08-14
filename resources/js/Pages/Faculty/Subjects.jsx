import React, { useEffect, useRef, useState } from 'react'
import Layout from "@/Layouts/Layout";
import { BookOpenIcon, CheckIcon, EllipsisVerticalIcon, MagnifyingGlassIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Head, useForm, router } from '@inertiajs/react';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import CardsWithHeader from '@/Components/CDMLMS/CardsWithHeader';
import Dropdown from '@/Components/Dropdown';
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader';
import PageNav from '@/Components/CDMLMS/PageNav';
import AlertCard from '@/Components/CDMLMS/AlertCard';




/**
 * @function Page
 * 
 * @param auth The Authentication 
 * @returns Page
 */
export default function Subjects({ auth, paginated, searched = '' }) {

    const [search, setSearch] = useState(searched);

    const [warning, setWarning] = useState(false);

    const [selected, setSelected] = useState(0);

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
            warning={
                warning && (
                    <div className='fixed w-full h-full z-[2] bg-black bg-opacity-50'
                        onClick={() => { setWarning(false) }}
                    >
                        <AlertCard
                            type="alert-warning"
                            title='Subject Already Taken'
                            message="Take the subject anyway?"
                            actions={
                                <>
                                    <Link  href={route('subjects.assign')} as='button' method='patch'
                                        data={{ id: selected, assign: 1 }} preserveScroll={true}
                                    >
                                        <CheckIcon className="h-6 w-6 hover:text-[#8b0d00]" />
                                    </Link>
                                    <button className='border-none' onClick={() => { setWarning(false) }} preserveScroll={true}>
                                        <XMarkIcon className="h-6 w-6 text-[#926100] hover:text-[#8b0d00]" />
                                    </button>
                                </>
                            }
                        />
                    </div>
                )
            }
        >
            <Head title='Subjects' />
            <OverlapHeader
                icon={<BookOpenIcon className='w-9 h-9 text-gray-500' />}
                title='Subjects'
                subtitle='View Subjects'

            >

                <SingleCardCenter
                    bodyPadding='p-3'
                    table={
                        <>
                            <div className='w-1/3 mb-4 relative'>
                                <input className='form-control'
                                    placeholder='Search Subject'
                                    type='search'
                                    value={search}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            router.visit(route('subjects.search', search), { preserveScroll: true });
                                        }
                                    }}
                                    onChange={(e) => { setSearch(e.target.value) }}
                                />
                                {
                                    search == '' ? (
                                        <MagnifyingGlassIcon className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3  w-8 h-8 text-gray-600' />
                                    ) : (
                                        <Link
                                            className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3 '
                                            href={route('subjects.index')} preserveScroll={true} as='button'
                                        >
                                            <XCircleIcon className='w-8 h-8' />
                                        </Link>
                                    )
                                }
                            </div>
                            <div className='table-responsive'>
                                <table className='datatable-table !text-center'>
                                    <thead>
                                        <tr className='card-header'>
                                            <th >Instructor</th>
                                            <th >Course</th>
                                            <th >Code</th>
                                            <th >Description</th>
                                            <th >Year/Sem</th>
                                            <th >Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            paginated.data.map(subject =>
                                                <tr className={`${auth.user.id == subject.user_id ? "bg-green-50" : ""}`} key={subject.id}>
                                                    <td key={subject.user_id}>{subject.instructor}</td>
                                                    <td>{subject.course}</td>
                                                    <td>{subject.code}</td>
                                                    <td>{subject.description}</td>
                                                    <td>{`${subject.year}-${subject.sem}`} </td>
                                                    <td >
                                                        <Dropdown>
                                                            <Dropdown.Trigger>
                                                                <button className='rounded-[50%] hover:bg-gray-200 p-1' type='button'>
                                                                    <EllipsisVerticalIcon className='w-5 h-5 text-black' />
                                                                </button>
                                                            </Dropdown.Trigger>
                                                            <Dropdown.Content contentClasses='flex flex-col gap-2' margin='mt-1'>
                                                                <button className='hover:hover:bg-green-50 px-1'
                                                                    onClick={
                                                                        () => {
                                                                            if (subject.user_id == null) {
                                                                                router.visit(route('subjects.assign'), { method: 'patch', data: { id: subject.id, assign: (auth.user.id == subject.user_id ? 0 : 1) } })
                                                                            } else {
                                                                                setSelected(subject.id)
                                                                                setWarning(true);
                                                                            }
                                                                        }
                                                                    }

                                                                    preserveScroll={true}
                                                                >
                                                                    {auth.user.id == subject.user_id ? "Drop" : "Take"}
                                                                </button>
                                                                {
                                                                    subject.user_id == auth.user.id && (
                                                                        <Link className='hover:hover:bg-green-50 px-1' as='button'
                                                                        // href={route('schedules.subject', subject.id)}
                                                                        >
                                                                            Schedules
                                                                        </Link>
                                                                    )
                                                                }
                                                            </Dropdown.Content>
                                                        </Dropdown>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                <div className='w-full flex flex-row justify-between'>
                                    <div>
                                        <p>Page: {paginated.current_page}</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <PageNav
                                            links={paginated.links}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                />
            </OverlapHeader>
        </Layout>
    );
}

