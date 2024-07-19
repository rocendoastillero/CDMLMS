import React, { useState } from 'react'
import Layout from "@/Layouts/Layout";
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import { BookOpenIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link, Head, useForm, router } from '@inertiajs/react';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import CardsWithHeader from '@/Components/CDMLMS/CardsWithHeader';



//TODO change to instructors choosing their subjects form all of the subjects
/**
 * @function Page
 * 
 * @param auth The Authentication 
 * @returns Page
 */
export default function Subjects({ auth, paginated }) {

    const [search, setSearch] = useState('');

    return (
        <Layout
            user={auth.user}
            icon={<BookOpenIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Subjects'
            headerSubtitle='View Subjects'>
            <Head title='Subjects' />
            <CardsWithHeader
                body={
                    <>
                        <div className='w-1/3 mb-4 relative'>
                            <input className='form-control'
                                placeholder='Search Subject'
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        console.log(search);
                                        router.visit(route('subjects.search', search), { preserveScroll: true });
                                    }
                                }}
                                onChange={(e) => { setSearch(e.target.value) }}
                            />
                            <MagnifyingGlassIcon className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3  w-5 h-5' />
                        </div>
                        <table className='datatable-table text-center'>
                            <thead>
                                <tr>

                                    <th className='text-center'>Instructor</th>
                                    <th className='text-center'>Course</th>
                                    <th className='text-center'>Code</th>
                                    <th className='text-center'>Description</th>
                                    <th className='text-center'>Year/Sem</th>
                                    <th className='text-center'>Actions</th>
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
                                                    href={route('subjects.assign')} as='button' method='patch'
                                                    data={{id: subject.id, assign: (auth.user.id == subject.user_id ? 0:1)}}
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
                                        <Link className={`flex flex-row p-2 h-8 rounded-[50%] items-center place-content-center ${link.active ? "bg-[#e0e5ec] bg-opacity-50" : ""}`} href={link.url} as='button' preserveScroll={true}>
                                            <p className='!m-0' dangerouslySetInnerHTML={{ __html: link.label }} />
                                        </Link>
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

