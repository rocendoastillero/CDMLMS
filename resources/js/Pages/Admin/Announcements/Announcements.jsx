import AlertCard from '@/Components/CDMLMS/AlertCard';
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import IconCard from '@/Components/CDMLMS/IconCard';
import IconParse from '@/Components/CDMLMS/IconParse';
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';
import Dropdown from '@/Components/Dropdown';
import Layout from '@/Layouts/Layout'
import { EllipsisVerticalIcon, ExclamationTriangleIcon, MegaphoneIcon } from '@heroicons/react/24/outline'
import { Head, Link } from '@inertiajs/react'
import React, { useRef, useState } from 'react'
import Form from './Form';

export default function Announcements({ auth, paginated }) {

    const announceRef = useRef([]);

    const [editing, setEditing] = useState(false);

    const [tab, setTab] = useState(1);

    const [selectedAnnouncement, setSelectedAnnouncement] = useState({
        id: '',
        title: '',
        content: '',
        cardtype: '',
        icon: '',
        color: '',
    });

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
        >
            <Head title='Admin Announcements' />
            <OverlapHeader
                icon={<MegaphoneIcon className='w-9 h-9 text-gray-500' />}
                title="Announcements"
                subtitle="Admin Announcements"
            >
                <div className='relative text-gray-400 p-1 my-2'>
                    <div className='absolute bottom-[110%] w-full flex flex-row gap-2 md:mb-1 lg:mb-2'>
                        <button onClick={() => { setTab(1) }} className={`${tab == 1 ? "border-b-2 !text-white" : ""} p-2 `} >
                            View
                        </button>
                        <button onClick={() => { setTab(2) }} className={`${tab == 2 ? "border-b-2 !text-white" : ""} p-2 `} >
                            Create
                        </button>
                    </div>
                </div>
                {
                    (
                        //TODO edit logic, edit tab
                        () => {
                            if (tab == 1) {
                                return (
                                    <CardsWithSticky
                                        cards={
                                            <>
                                                {
                                                    paginated.data.length != 0 ? (
                                                        paginated.data.map(
                                                            (announcement, index) => {
                                                                if (announcement.cardtype == 'center') {
                                                                    return (
                                                                        <SingleCardCenter
                                                                            ref={el => announceRef.current[index] = el}
                                                                            title={announcement.title}
                                                                            body={announcement.content}
                                                                            button={
                                                                                <Dropdown>
                                                                                    <Dropdown.Trigger>
                                                                                        <button className='rounded-[50%] hover:bg-gray-200 p-1 mx-2 mt-2' type='button'>
                                                                                            <EllipsisVerticalIcon className='w-6 h-6 text-black' />
                                                                                        </button>
                                                                                    </Dropdown.Trigger>
                                                                                    <Dropdown.Content contentClasses='flex flex-col gap-2 text-center !font-normal' margin='!mt-0 mr-3' width='w-auto'>
                                                                                        <button className='hover:bg-green-50 '
                                                                                        // onClick={() => {
                                                                                        //     if (editing && (subject.id != selectedSubject.id)) {
                                                                                        //         setSelectedSubject(subject);
                                                                                        //         setData(subject);
                                                                                        //     } else if (!editing && selectedSubject.id == '') {
                                                                                        //         setEditing(true);
                                                                                        //         setSelectedSubject(subject);
                                                                                        //         setData(subject);
                                                                                        //     } else if (editing && subject.id == selectedSubject.id) {
                                                                                        //         setEditing(false);
                                                                                        //         setSelectedSubject(empty);
                                                                                        //         setData(empty);
                                                                                        //     }
                                                                                        //     if (warning) {
                                                                                        //         setWarning(false);
                                                                                        //     }
                                                                                        // }}
                                                                                        >
                                                                                            {/* {subject.id == selectedSubject.id ? "Cancel" : "Edit"} */}
                                                                                            Edit
                                                                                        </button>
                                                                                        <button className='hover:bg-green-50 mx-1'
                                                                                        // onClick={() => {
                                                                                        //     if (subject.id == selectedSubject.id) {
                                                                                        //         setWarning(!warning);
                                                                                        //     } else if (!editing && selectedSubject.id == '') {
                                                                                        //         setEditing(true);
                                                                                        //         setSelectedSubject(subject);
                                                                                        //         setData(subject);
                                                                                        //         setWarning(!warning);
                                                                                        //     }
                                                                                        // }}
                                                                                        >
                                                                                            Delete
                                                                                        </button>
                                                                                    </Dropdown.Content>
                                                                                </Dropdown>
                                                                            }
                                                                        />

                                                                    )
                                                                } else if (announcement.cardtype == 'icon') {
                                                                    return (
                                                                        <IconCard
                                                                            ref={el => announceRef.current[index] = el}
                                                                            icon={<IconParse icon={announcement.icon} color='text-white' />}
                                                                            title={announcement.title}
                                                                            body={announcement.content}
                                                                            iconColor={`bg-[${announcement.color}]`}
                                                                            button={
                                                                                <Dropdown>
                                                                                    <Dropdown.Trigger>
                                                                                        <button className='rounded-[50%] hover:bg-gray-200 p-1 mx-2 mt-2' type='button'>
                                                                                            <EllipsisVerticalIcon className='w-6 h-6 text-black' />
                                                                                        </button>
                                                                                    </Dropdown.Trigger>
                                                                                    <Dropdown.Content contentClasses='flex flex-col gap-2 text-center !font-normal' margin='!mt-0 mr-3' width='w-auto'>
                                                                                        <button className='hover:bg-green-50 '
                                                                                        // onClick={() => {
                                                                                        //     if (editing && (subject.id != selectedSubject.id)) {
                                                                                        //         setSelectedSubject(subject);
                                                                                        //         setData(subject);
                                                                                        //     } else if (!editing && selectedSubject.id == '') {
                                                                                        //         setEditing(true);
                                                                                        //         setSelectedSubject(subject);
                                                                                        //         setData(subject);
                                                                                        //     } else if (editing && subject.id == selectedSubject.id) {
                                                                                        //         setEditing(false);
                                                                                        //         setSelectedSubject(empty);
                                                                                        //         setData(empty);
                                                                                        //     }
                                                                                        //     if (warning) {
                                                                                        //         setWarning(false);
                                                                                        //     }
                                                                                        // }}
                                                                                        >
                                                                                            {/* {subject.id == selectedSubject.id ? "Cancel" : "Edit"} */}
                                                                                            Edit
                                                                                        </button>
                                                                                        <button className='hover:bg-green-50 mx-1'
                                                                                        // onClick={() => {
                                                                                        //     if (subject.id == selectedSubject.id) {
                                                                                        //         setWarning(!warning);
                                                                                        //     } else if (!editing && selectedSubject.id == '') {
                                                                                        //         setEditing(true);
                                                                                        //         setSelectedSubject(subject);
                                                                                        //         setData(subject);
                                                                                        //         setWarning(!warning);
                                                                                        //     }
                                                                                        // }}
                                                                                        >
                                                                                            Delete
                                                                                        </button>
                                                                                    </Dropdown.Content>
                                                                                </Dropdown>
                                                                            }
                                                                        />

                                                                    )
                                                                } else if (announcement.cardtype == 'header') {
                                                                    return (
                                                                        <SingleCardWithHeader
                                                                            ref={el => announceRef.current[index] = el}
                                                                            header={announcement.title}
                                                                            body={
                                                                                <div className='mt-2'>
                                                                                    {announcement.content}
                                                                                </div>
                                                                            }
                                                                            button={
                                                                                <Dropdown>
                                                                                    <Dropdown.Trigger>
                                                                                        <button className='rounded-[50%] hover:bg-gray-200 p-1 mx-2 mt-2' type='button'>
                                                                                            <EllipsisVerticalIcon className='w-6 h-6 text-black' />
                                                                                        </button>
                                                                                    </Dropdown.Trigger>
                                                                                    <Dropdown.Content contentClasses='flex flex-col gap-2 text-center !font-normal' margin='!mt-0 mr-3' width='w-auto'>
                                                                                        <button className='hover:bg-green-50 '
                                                                                        // onClick={() => {
                                                                                        //     if (editing && (subject.id != selectedSubject.id)) {
                                                                                        //         setSelectedSubject(subject);
                                                                                        //         setData(subject);
                                                                                        //     } else if (!editing && selectedSubject.id == '') {
                                                                                        //         setEditing(true);
                                                                                        //         setSelectedSubject(subject);
                                                                                        //         setData(subject);
                                                                                        //     } else if (editing && subject.id == selectedSubject.id) {
                                                                                        //         setEditing(false);
                                                                                        //         setSelectedSubject(empty);
                                                                                        //         setData(empty);
                                                                                        //     }
                                                                                        //     if (warning) {
                                                                                        //         setWarning(false);
                                                                                        //     }
                                                                                        // }}
                                                                                        >
                                                                                            {/* {subject.id == selectedSubject.id ? "Cancel" : "Edit"} */}
                                                                                            Edit
                                                                                        </button>
                                                                                        <button className='hover:bg-green-50 mx-1'
                                                                                        // onClick={() => {
                                                                                        //     if (subject.id == selectedSubject.id) {
                                                                                        //         setWarning(!warning);
                                                                                        //     } else if (!editing && selectedSubject.id == '') {
                                                                                        //         setEditing(true);
                                                                                        //         setSelectedSubject(subject);
                                                                                        //         setData(subject);
                                                                                        //         setWarning(!warning);
                                                                                        //     }
                                                                                        // }}
                                                                                        >
                                                                                            Delete
                                                                                        </button>
                                                                                    </Dropdown.Content>
                                                                                </Dropdown>
                                                                            }
                                                                        />
                                                                    );
                                                                }
                                                            }
                                                        )
                                                    ) : (
                                                        <AlertCard
                                                            type='alert-info'
                                                            icon={<ExclamationTriangleIcon className="h-6 w-6" />}
                                                            title="Empty!"
                                                            message={
                                                                <div className='flex flex-row'>
                                                                    No Announements
                                                                </div>
                                                            }
                                                        />
                                                    )
                                                }

                                            </>
                                        }
                                        withCard={paginated.data.length != 0}
                                        stickyNavHeader={paginated.data.length != 0 && (`Page: ${paginated.current_page}`)}
                                        stickyNavBody={
                                            <>
                                                {paginated.data.map((announcement, index) =>
                                                    <button
                                                        onClick={() => announceRef.current[index].scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' })}
                                                        className='nav-link mb-5'>
                                                        {announcement.title}
                                                    </button>
                                                )}
                                                {
                                                    paginated.data.length != 0 && (
                                                        <div className='absolute -translate-x-2/4 left-2/4 bottom-1 w-full flex flex-row items-center place-content-center'>
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
                                                    )
                                                }
                                            </>
                                        }

                                    />
                                );
                            } else if (tab == 2) {
                                return (
                                    <Form />
                                )
                            } else if (tab == 3) {

                            }
                        }
                    )()
                }
            </OverlapHeader>
        </Layout>
    )
}
