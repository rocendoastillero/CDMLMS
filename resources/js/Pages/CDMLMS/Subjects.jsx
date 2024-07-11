import React, { useState } from 'react'
import Layout from "@/Layouts/Layout";
import IconCard from '@/Components/CDMLMS/IconCard';
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import { Headers } from "@/utils/headers"
import { ExclamationTriangleIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Link, Head, useForm } from '@inertiajs/react';


const headers = Headers('w-9 w-9');

export default function Subjects({ auth, subjects }) {

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

    const { data, setData, post, patch, errors, hasErrors, processing, reset, recentlySuccessful } = useForm({
        id: '',
        subject: '',
        description: '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (data.subject != empty.subject) {
            if (editing) {
                console.log('asdasdasd');
                patch(route('subjects.update', data.id), { preserveScroll: true });
            } else {
                post(route('subjects.store'), { onSuccess: () => reset() });
            }
        } else {
            setEmptyName(true);
        }
    };

    return (
        <Layout user={auth.user} icon={headers[4].icon} headerTitle={headers[4].title} headerSubTitle={headers[4].subTitle}>
            <Head title={headers[4].title} />
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
                                        <div className='alert alert-warning alert-icon !absolute !-translate-x-2/4 !-translate-y-2/4 !m-0 !left-2/4 !top-2/4 !max-w-[40%]'>
                                            <div className='flex flex-row absolute top-0 right-0  mt-[9px] mr-2 '>
                                                <Link as='button' href={route('subjects.destroy', Subject.id)} method='delete'>
                                                    <CheckIcon className="h-6 w-6 mx-1 hover:text-[#8b0d00]" />
                                                </Link>

                                                <XMarkIcon className="h-6 w-6 mx-1 hover:cursor-pointer" onClick={() => { setWarning(false) }} />

                                            </div>
                                            <div className="alert-icon-aside">
                                                <ExclamationTriangleIcon className="h-6 w-6" />
                                            </div>
                                            <div className="alert-icon-content">
                                                <h6 className="alert-heading">Delete {Subject.subject}?</h6>
                                                The subject will be deleted forever and any related data to it
                                            </div>
                                        </div>
                                    ))}
                                </>

                            }
                            setWarning={
                                 Subject.id == selectedSubject.id &&
                                    warning
                                
                            }
                            active={selectedSubject.id == Subject.id}
                            editAction={() => {

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
                            deleteAction={() => {
                                if (Subject.id == selectedSubject.id) {
                                    setWarning(!warning);
                                } else if (!editing && selectedSubject.id == '') {
                                    setEditing(true);
                                    setSelectedSubject(Subject);
                                    setData(Subject);
                                    setWarning(!warning);
                                }
                            }}
                        />
                    )
                }
                stickyNav={
                    <form onSubmit={submit} >
                        <div className="mb-3">
                            <label className="small !text-[16px] mb-1" >Subject {selectedSubject.id}</label>
                            <input className={`form-control  ${empytName ? "!border-red-600" : ""}`} id="inputSubject" type="text" placeholder="Subject Name" value={data.subject} onChange={(e) => { setData('subject', e.target.value) }} />
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
                                        {errors}
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

