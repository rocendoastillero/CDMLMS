import AlertCard from '@/Components/CDMLMS/AlertCard';
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import IconCard from '@/Components/CDMLMS/IconCard';
import IconParse from '@/Components/CDMLMS/IconParse';
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';
import Dropdown from '@/Components/Dropdown';
import Layout from '@/Layouts/Layout'
import { CheckIcon, EllipsisVerticalIcon, ExclamationTriangleIcon, MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Head, Link } from '@inertiajs/react'
import React, { useRef, useState } from 'react'
import Form from './Form';
import PageNav from '@/Components/CDMLMS/PageNav';

export default function Announcements({ auth, paginated }) {

    const announceRef = useRef([]);

    const [editing, setEditing] = useState(false);

    const [warning, setWarning] = useState(false);

    const [tab, setTab] = useState(0);

    const empty = {
        id: '',
        title: '',
        content: '',
        cardtype: 'center',
        icon: '',
        color: '',
    };

    const [selectedAnnouncement, setSelectedAnnouncement] = useState(empty);

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
                            icon={<ExclamationTriangleIcon className='w-5 h-5' />}
                            type='alert-warning'
                            title='Warning'
                            message={`Delete ${selectedAnnouncement.title}`}
                            actions={
                                <>
                                    <Link href={route('announcements.destroy', selectedAnnouncement.id)} method='delete' as='button'>
                                        <CheckIcon className='w-5 h-5' />
                                    </Link>
                                    <button onClick={() => { setWarning(false) }}>
                                        <XMarkIcon className='w-5 h-5' />
                                    </button>
                                </>
                            }
                        />
                    </div>
                )
            }
        >
            <Head title='Admin Announcements' />
            <OverlapHeader
                icon={<MegaphoneIcon className='w-9 h-9 text-gray-500' />}
                title="Announcements"
                subtitle="Admin Announcements"
            >
                <div className='relative text-gray-400 p-1 my-2'>
                    <div className='absolute bottom-[110%] w-full flex flex-row gap-2 md:mb-1 lg:mb-2'>
                        <button
                            onClick={() => { setTab(0); setEditing(false); setSelectedAnnouncement(empty); }}
                            className={`${tab == 0 ? "border-b-2 !text-white" : ""} p-2 `} >
                            View
                        </button>
                        <button
                            onClick={() => { setTab(1); setEditing(false); setSelectedAnnouncement(empty); }}
                            className={`${tab == 1 ? "border-b-2 !text-white" : ""} p-2 `} >
                            Create
                        </button>
                        {
                            tab == 2 && (
                                <button className="border-b-2 !text-white p-2 ">
                                    Edit
                                </button>
                            )
                        }
                    </div>
                </div>
                {
                    (
                        //TODO edit logic, edit tab
                        () => {
                            if (tab == 0) {
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
                                                                                            onClick={() => {
                                                                                                setEditing(true);
                                                                                                setSelectedAnnouncement(announcement);
                                                                                                setTab(2);
                                                                                            }}
                                                                                        >
                                                                                            {/* {announcement.id == selectedAnnouncement.id ? "Cancel" : "Edit"} */}
                                                                                            Edit
                                                                                        </button>
                                                                                        <button className='hover:bg-green-50 mx-1'
                                                                                            onClick={() => {
                                                                                                setSelectedAnnouncement(announcement);
                                                                                                setWarning(true);
                                                                                            }}
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
                                                                                            onClick={() => {
                                                                                                setEditing(true);
                                                                                                setSelectedAnnouncement(announcement);
                                                                                                setTab(2);
                                                                                            }}
                                                                                        >
                                                                                            {/* {announcement.id == selectedAnnouncement.id ? "Cancel" : "Edit"} */}
                                                                                            Edit
                                                                                        </button>
                                                                                        <button className='hover:bg-green-50 mx-1'
                                                                                            onClick={() => {
                                                                                                setSelectedAnnouncement(announcement);
                                                                                                setWarning(true);
                                                                                            }}
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
                                                                                            onClick={() => {
                                                                                                setEditing(true);
                                                                                                setSelectedAnnouncement(announcement);
                                                                                                setTab(2);
                                                                                            }}
                                                                                        >
                                                                                            {/* {announcement.id == selectedAnnouncement.id ? "Cancel" : "Edit"} */}
                                                                                            Edit
                                                                                        </button>
                                                                                        <button className='hover:bg-green-50 mx-1'
                                                                                            onClick={() => {
                                                                                                setSelectedAnnouncement(announcement);
                                                                                                setWarning(true);
                                                                                            }}
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
                                        stickyNavHeader='Navigate'
                                        stickyNavBody={
                                            <div className='flex flex-col gap-4 '>
                                                <div>

                                                    {
                                                        paginated.data.map((announcement, index) =>
                                                            <button
                                                                onClick={() => announceRef.current[index].scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' })}
                                                                className='nav-link'>
                                                                {announcement.title}
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                                {
                                                    paginated.data.length != 0 && (
                                                        <div className='w-full flex flex-row items-center place-content-center'>
                                                            <PageNav
                                                                links={paginated.links}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        }

                                    />
                                );
                            } else if (tab == 1) {
                                return (
                                    <Form
                                        selected={empty}
                                        back={() => { setTab(0); setEditing(false); setSelectedAnnouncement(empty); }}
                                    />
                                )
                            } else if (tab == 2) {
                                return (
                                    <Form
                                        selected={selectedAnnouncement}
                                        editing={editing}
                                        back={() => { setTab(0); setEditing(false); setSelectedAnnouncement(empty); }}
                                    />
                                )
                            }
                        }
                    )()
                }
            </OverlapHeader>
        </Layout >
    )
}
