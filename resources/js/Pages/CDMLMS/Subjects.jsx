import React, { useState } from 'react'
import Layout from "@/Layouts/Layout";
import IconCard from '@/Components/CDMLMS/IconCard';
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import { Headers } from "@/utils/headers"
import { PencilIcon, TrashIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Link, Head, useForm } from '@inertiajs/react';
import AlertCard from '@/Components/CDMLMS/AlertCard';


const headers = Headers('w-9 w-9');

//TODO change to instructors choosing their subjects form all of the subjects
/**
 * @function Page
 * 
 * @param auth The Authentication 
 * @returns Page
 */
export default function Subjects({ auth, subjects }) {

    /**
     * Empty Instance of Subjects
     */
    const empty = {
        id: '',
        subject: '',
        description: ''
    };

    const [selectedSubject, setSelectedSubject] = useState({
        id: '',
        subject: '',
        description: ''
    });

    const [empytName, setEmptyName] = useState(false);

    const [editing, setEditing] = useState(false);

    const [warning, setWarning] = useState(false);

    /**
     * Form for submition
     */
    const { data, setData, post, patch, errors, hasErrors, processing, reset, recentlySuccessful } = useForm({
        id: '',
        subject: '',
        description: '',
    });

    /**
     * @function Post/Patch
     */
    const submit = (e) => {
        e.preventDefault();
        // if (data.subject != empty.subject) {
        if (editing) {
            patch(route('subjects.update', data.id), { preserveScroll: true });
        } else {
            post(route('subjects.store'), { onSuccess: () => reset() });
        }
        // } else {
        //     setEmptyName(true);
        // }
    };

    return (
        <Layout user={auth.user} icon={headers[2].icon} headerTitle={headers[2].title} headerSubtitle={headers[2].subTitle}>
            <Head title={headers[2].title} />
            <CardsWithSticky
                cards={
                    //TODO check if the key is not the same
                    subjects.map(Subject =>
                        <IconCard
                            key={Subject.id}
                            title={Subject.subject}
                            body={
                                <>
                                    {Subject.description}
                                    {((warning && (selectedSubject.id == Subject.id)) && (
                                        <AlertCard
                                            type="alert-warning"
                                            title={`Delete ${Subject.subject}?`}
                                            message="The subject will be deleted forever and any related data to it"
                                            actions={
                                                <>
                                                    <Link as='button' href={route('subjects.destroy', Subject.id)} method='delete'>
                                                        <CheckIcon className="h-6 w-6 mx-1 hover:text-[#8b0d00]" />
                                                    </Link>

                                                    <XMarkIcon className="h-6 w-6 mx-1 hover:cursor-pointer" onClick={() => { setWarning(false) }} />
                                                </>
                                            }
                                        />
                                    ))}
                                </>
                            }
                            setWarning={
                                Subject.id == selectedSubject.id &&
                                warning

                            }
                            active={selectedSubject.id == Subject.id}
                            selectAction={() => {
                                if (editing && (Subject.id != selectedSubject.id)) {
                                    setSelectedSubject(Subject);
                                    setData(Subject);
                                } else if (!editing && selectedSubject.id == '') {
                                    setEditing(true);
                                    setSelectedSubject(Subject);
                                    setData(Subject);
                                } else if (editing && Subject.id == selectedSubject.id) {
                                    setEditing(false);
                                    setSelectedSubject(empty);
                                    setData(empty);
                                }
                                if (warning) {
                                    setWarning(false);
                                }
                            }}
                            actions={
                                <>
                                    <div className={`rounded-[50%] h-10 w-10 bg-sky-500 flex place-content-center items-center mx-1 hover:!bg-sky-700  ${selectedSubject.id == Subject.id ? "!bg-sky-700 " : ""}`}
                                        onClick={() => {
                                            if (editing && (Subject.id != selectedSubject.id)) {
                                                setSelectedSubject(Subject);
                                                setData(Subject);
                                            } else if (!editing && selectedSubject.id == '') {
                                                setEditing(true);
                                                setSelectedSubject(Subject);
                                                setData(Subject);
                                            } else if (editing && Subject.id == selectedSubject.id) {
                                                setEditing(false);
                                                setSelectedSubject(empty);
                                                setData(empty);
                                            }
                                            if (warning) {
                                                setWarning(false);
                                            }
                                        }} >
                                        <PencilIcon className={`h-5 w-5 !text-white hover:!text-white ${selectedSubject.id == Subject.id ? " !text-gray-600" : ""}`} />
                                    </div>
                                    <div className='rounded-[50%] h-10 w-10 bg-red-500 flex place-content-center items-center mx-1 hover:!bg-red-700' 
                                    onClick={
                                        () => {
                                            if (Subject.id == selectedSubject.id) {
                                                setWarning(!warning);
                                            } else if (!editing && selectedSubject.id == '') {
                                                setEditing(true);
                                                setSelectedSubject(Subject);
                                                setData(Subject);
                                                setWarning(!warning);
                                            }
                                        }   
                                    }>
                                        <TrashIcon className="h-5 w-5  text-white" />
                                    </div>

                                </>
                            }
                        />
                    )
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
                                        {errors.subject}
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
