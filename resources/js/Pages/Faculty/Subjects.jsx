import React, { useState } from 'react'
import Layout from "@/Layouts/Layout";
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import { Headers } from "@/utils/headers"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link, Head, useForm, router } from '@inertiajs/react';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';


const headers = Headers('w-9 w-9');

//TODO change to instructors choosing their subjects form all of the subjects
/**
 * @function Page
 * 
 * @param auth The Authentication 
 * @returns Page
 */
export default function Subjects({ auth, paginated }) {

    /**
     * Empty Instance of Subjects
     */
    const empty = {
        id: '',
        code: '',
        description: ''
    };

    const [selectedSubject, setSelectedSubject] = useState({
        id: '',
        code: '',
        description: ''
    });

    const [search, setSearch] = useState('');

    const [empytName, setEmptyName] = useState(false);

    const [editing, setEditing] = useState(false);

    const [warning, setWarning] = useState(false);

    /**
     * Form for submition
     */
    const { data, setData, post, patch, errors, hasErrors, processing, reset, recentlySuccessful } = useForm({
        id: '',
        code: '',
        description: '',
    });

    /**
     * @function Post/Patch
     */
    const submit = (e) => {
        e.preventDefault();
        if (editing) {
            patch(route('subjects.update', data.id), { preserveScroll: true });
        } else {
            post(route('subjects.store'), { onSuccess: () => reset() });
        }
    };

    return (
        <Layout user={auth.user} icon={headers[2].icon} headerTitle={headers[2].title} headerSubtitle={headers[2].subTitle}>
            <Head title={headers[2].title} />
            <CardsWithSticky
                cards={
                    <SingleCardCenter
                        table={
                            <>
                                <div className='w-1/3 mb-4 relative'>
                                    <input className='form-control !'
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                console.log(search);
                                                router.visit(route('subjects.search', search));
                                            }
                                        }}
                                        onChange={(e) => {setSearch(e.target.value)}}
                                    />
                                    <MagnifyingGlassIcon className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3  w-5 h-5' />
                                </div>
                                <table className='datatable-table'>
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
                                                        <button className={`btn-primary mx-1 p-1 rounded text-white ${auth.user.id == subject.user_id ? "bg-red-700 hover:bg-red-500" : "bg-green-700 hover:bg-green-500"}`}>
                                                            {auth.user.id == subject.user_id ? "Drop" : "Assign"}
                                                        </button>
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
                }
                stickyNavHeader="Subject Details"
                stickyNavBody={
                    <form onSubmit={submit} >
                        <div className="mb-3">
                            <label className="small !text-[16px] mb-1" >Subject</label>
                            <input className={`form-control  ${empytName ? "!border-red-600" : ""}`} type="text" placeholder="Subject Name" value={data.subject} onChange={(e) => { setData('subject', e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="small !text-[16px] mb-1" >Description</label>
                            <input className="form-control" id="inputDescription" type="text" placeholder="Description" value={data.description} onChange={(e) => { setData('description', e.target.value) }} />
                        </div>
                        <div className='flex flex-row'>
                            <button className="btn btn-primary" type="submit" disabled={processing}>
                                {
                                    editing ? (
                                        "Edit"
                                    ) : (
                                        "Add"
                                    )
                                }
                            </button>
                            {
                                hasErrors && (
                                    <div className="alert alert-danger !py-2 !pt-3 !my-0 ml-2 !text-[12px]" role="alert">
                                        {errors.code}
                                    </div>
                                )
                            }
                            {
                                recentlySuccessful && (
                                    <div className="alert alert-success !py-2 !pt-3 !my-0 ml-2 !text-[12px]" role="alert">
                                        {
                                            editing ? (
                                                "Edit "
                                            ) : (
                                                "Add "
                                            )
                                        } Succesful!
                                    </div>
                                )
                            }
                        </div>
                    </form>
                }
            />
        </Layout>
    );
}

