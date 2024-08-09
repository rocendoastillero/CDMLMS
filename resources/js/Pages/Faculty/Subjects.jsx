import React, { useState } from 'react'
import Layout from "@/Layouts/Layout";
import { BookOpenIcon, EllipsisVerticalIcon, MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link, Head, useForm, router } from '@inertiajs/react';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import CardsWithHeader from '@/Components/CDMLMS/CardsWithHeader';
import Dropdown from '@/Components/Dropdown';




/**
 * @function Page
 * 
 * @param auth The Authentication 
 * @returns Page
 */
export default function Subjects({ auth, paginated, searched = '' }) {

    const [search, setSearch] = useState(searched);

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
            icon={<BookOpenIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Subjects'
            headerSubtitle='View Subjects'>
            <Head title='Subjects' />
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
                                                            <Link className='hover:hover:bg-green-50 px-1' href={route('subjects.assign')} as='button' method='patch'
                                                                data={{ id: subject.id, assign: (auth.user.id == subject.user_id ? 0 : 1) }} preserveScroll={true}
                                                            >
                                                                {auth.user.id == subject.user_id ? "Drop" : "Take"}
                                                            </Link>
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
                                    <p>Current page: {paginated.current_page}</p>
                                </div>
                                <div className='flex flex-row'>
                                    {
                                        paginated.links.map(
                                            (link, index) => {
                                                if (index == 0 || index == paginated.links.length - 1) {
                                                    return (
                                                        <Link
                                                            dangerouslySetInnerHTML={{ __html: index == 0 ? "&laquo;" : "&raquo;" }}
                                                            className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                                            href={link.url}
                                                            as='button'
                                                            preserveScroll={true}
                                                            disabled={link.url == null}
                                                        />
                                                    )

                                                } else {
                                                    return (
                                                        <Link
                                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                                            className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                                            href={link.url}
                                                            as='button'
                                                            preserveScroll={true}
                                                            disabled={link.url == null}
                                                        />
                                                    )
                                                }
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </>

                }
            />
        </Layout>
    );
}

