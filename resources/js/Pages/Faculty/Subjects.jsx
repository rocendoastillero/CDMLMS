import React, { useState } from 'react'
import Layout from "@/Layouts/Layout";
import { BookOpenIcon, MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link, Head, useForm, router } from '@inertiajs/react';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import CardsWithHeader from '@/Components/CDMLMS/CardsWithHeader';




/**
 * @function Page
 * 
 * @param auth The Authentication 
 * @returns Page
 */
export default function Subjects({ admin = false, auth, paginated, searched = '' }) {

    const [search, setSearch] = useState(searched);

    return (
        <Layout
            admin={admin}
            user={auth.user}
            icon={<BookOpenIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Subjects'
            headerSubtitle='View Subjects'>
            <Head title='Subjects' />
            <SingleCardCenter
                table={
                    <>
                        <div className='w-1/3 mb-4 relative'>
                            <input className='form-control'
                                placeholder='Search Subject'
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
                                    <XCircleIcon onClick={() => {router.visit(route('subjects.index'))}} className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3  w-8 h-8 cursor-pointer' />
                                )
                            }
                        </div>
                        <table className='datatable-table !text-center'>
                            <thead>
                                <tr>

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
                                        <tr key={subject.id}>
                                            <td key={subject.user_id}>{subject.instructor}</td>
                                            <td>{subject.course}</td>
                                            <td>{subject.code}</td>
                                            <td>{subject.description}</td>
                                            <td>{`${subject.year}-${subject.sem}`} </td>
                                            <td>
                                                <Link className={`btn-primary mx-1 p-1 rounded text-white ${auth.user.id == subject.user_id ? "bg-red-700 hover:bg-red-500" : "bg-green-700 hover:bg-green-500"}`}
                                                    href={route('subjects.assign')} as='button' method='patch' preserveScroll={true}
                                                    data={{ id: subject.id, assign: (auth.user.id == subject.user_id ? 0 : 1) }}
                                                >
                                                    {auth.user.id == subject.user_id ? "Drop" : "Assign"}
                                                </Link>
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
                                    paginated.links.map(link =>
                                        <Link
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                            href={link.url}
                                            as='button'
                                            preserveScroll={true}
                                        />

                                    )
                                }
                            </div>
                        </div>
                    </>

                }
            />
        </Layout>
    );
}

