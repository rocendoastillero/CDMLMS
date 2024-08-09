import AlertCard from '@/Components/CDMLMS/AlertCard';
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import IconCard from '@/Components/CDMLMS/IconCard';
import IconParse from '@/Components/CDMLMS/IconParse';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Layout from '@/Layouts/Layout'
import { ChevronDownIcon, EllipsisVerticalIcon, ExclamationTriangleIcon, MegaphoneIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'


const App = props => {
    const itemsRef = useRef([]);
    // you can access the elements with itemsRef.current[n]

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, props.items.length);
    }, [props.items]);

    return props.items.map((item, i) => (
        <div
            key={i}
            ref={el => itemsRef.current[i] = el}
            style={{ width: `${(i + 1) * 100}px` }}>
            ...
        </div>
    ));
}


export default function Announcements({ auth, paginated }) {

    // const { refs, floatingStyles, context } = useFlo

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

    const { data, setData, post, patch, errors, hasErrors, processing, reset, recentlySuccessful } = useForm({
        id: '',
        title: '',
        content: '',
        cardtype: 'center',
        icon: '',
        color: '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (editing) {
            patch(route('announcements.update'), data.id);
        } else {
            post(route('announcements.store'), { onSuccess: () => { reset(); setTab(1) } });
            console.log(errors)
        }
    }

    useEffect((() => {
        console.log(paginated);
    }), []);

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
            icon={<MegaphoneIcon className='w-9 h-9 text-gray-500' />}
            headerTitle="Announcements"
            headerSubtitle="Admin Announcements"
        >
            <Head title='Admin Announcements' />
            <>
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
                        () => {
                            if (tab == 1) {
                                return (
                                    <CardsWithSticky
                                        cards={
                                            <>
                                                {
                                                    paginated.data.length != 0 ? (
                                                        paginated.data.map(
                                                            announcement => {
                                                                if (announcement.cardtype == 'center') {
                                                                    return (
                                                                        <SingleCardCenter
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
                                                {paginated.data.map(announcement =>
                                                    <div className='nav-link mb-5'>
                                                        {announcement.title}
                                                    </div>
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
                                    <SingleCardWithHeader
                                        header='Create Announcement'
                                        body={
                                            <>
                                                <form onSubmit={submit}>
                                                    <div className='flex flex-row gap-4 my-3'>
                                                        <div>
                                                            <InputLabel htmlFor='title' value='Title' />
                                                            <TextInput
                                                                id="title"
                                                                type="text"
                                                                name="title"
                                                                value={data.title}
                                                                placeholder="Announcement Title"
                                                                autoComplete="title"
                                                                isFocused={true}
                                                                onChange={(e) => setData('title', e.target.value)}
                                                                className='lg:!text-lg'
                                                            />
                                                            <InputError message={errors.title} className="mt-2" />
                                                        </div>
                                                        <div>
                                                            <Dropdown>
                                                                <Dropdown.Trigger>
                                                                    <InputLabel htmlFor='cardtype' value='Card Type' />
                                                                    <button className='form-control flex flex-row justify-between lg:!text-lg relative !pr-12' type='button'>
                                                                        {data.cardtype.charAt(0).toUpperCase() + data.cardtype.slice(1)}
                                                                        <ChevronDownIcon className='absolute -translate-y-2/4 top-2/4 right-3 max-w-5 max-h-5 lg:w-8 lg:h-8' />
                                                                    </button>
                                                                    <InputError message={errors.cardtype} className="mt-2" />
                                                                </Dropdown.Trigger>
                                                                <Dropdown.Content contentClasses='bg-white text-center' margin="!mt-0" width='w-full'>
                                                                    <div className='custom-tooltip-parent cursor-pointer py-1 hover:bg-green-50' onClick={() => { setData('cardtype', 'center') }}>
                                                                        Center
                                                                        <div className='custom-tooltip-child w-max absolute -translate-y-2/4 top-2/4 left-[105%]'>
                                                                            <div className='card'>
                                                                                <div className='card-body'>
                                                                                    <div className='text-center'>
                                                                                        <h1 className='!text-lg !m-0'>center</h1>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='custom-tooltip-parent cursor-pointer py-1 hover:bg-green-50' onClick={() => { setData('cardtype', 'icon') }}>
                                                                        Icon
                                                                        <div className='custom-tooltip-child w-max absolute -translate-y-2/4 top-2/4 left-[105%]'>
                                                                            <div className='card card-icon'>
                                                                                <div className='flex flex-row'>
                                                                                    <div className='max-h-max w-8 bg-blue-600'>

                                                                                    </div>
                                                                                    <div className='card-body !pl-2'>
                                                                                        <h1 className='!text-lg !m-0'>Icon</h1>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='custom-tooltip-parent cursor-pointer py-1 hover:bg-green-50' onClick={() => { setData('cardtype', 'header') }}>
                                                                        Header
                                                                        <div className='custom-tooltip-child w-max absolute -translate-y-2/4 top-2/4 left-[105%]'>
                                                                            <div className='card !p-0'>
                                                                                <div className='card-header !p-1 '>
                                                                                    <p className='!m-0'>Header</p>
                                                                                </div>
                                                                                <div className='card-body !py-1'>
                                                                                    <p className='!text-lg !m-0'>body</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Content>
                                                            </Dropdown>

                                                        </div>
                                                        {
                                                            data.cardtype == 'icon' && (
                                                                <>
                                                                    <div>
                                                                        <Dropdown>
                                                                            <Dropdown.Trigger>
                                                                                <InputLabel htmlFor='icon' value='Icon' />
                                                                                <button className='form-control flex flex-row justify-between lg:!text-lg relative !pr-12' type='button'>
                                                                                    <IconParse icon={data.icon} />
                                                                                    <ChevronDownIcon className='absolute -translate-y-2/4 top-2/4 right-3 max-w-5 max-h-5 lg:w-8 lg:h-8' />
                                                                                </button>
                                                                                <InputError message={errors.icon} className="mt-2" />
                                                                            </Dropdown.Trigger>
                                                                            <Dropdown.Content contentClasses='bg-white ' margin="!mt-0" width='w-full'>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50' onClick={() => { setData('icon', 'megaphone') }}><IconParse icon='megaphone' size='w-6 h-6' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50' onClick={() => { setData('icon', 'exclamation1') }}><IconParse icon='exclamation1' size='w-6 h-6' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50' onClick={() => { setData('icon', 'exclamation2') }}><IconParse icon='exclamation2' size='w-6 h-6' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50' onClick={() => { setData('icon', 'paperclip') }}><IconParse icon='paperclip' size='w-6 h-6' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50' onClick={() => { setData('icon', 'nosymbol') }}><IconParse icon='nosymbol' size='w-6 h-6' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50' onClick={() => { setData('icon', 'bellalert') }}><IconParse icon='bellalert' size='w-6 h-6' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50' onClick={() => { setData('icon', 'calendar') }}><IconParse icon='calendar' size='w-6 h-6' /></div>
                                                                            </Dropdown.Content>
                                                                        </Dropdown>
                                                                    </div>
                                                                    <div>
                                                                        <Dropdown>
                                                                            <Dropdown.Trigger>
                                                                                <InputLabel htmlFor='color' value='Color' />
                                                                                <button className='form-control flex flex-row justify-between lg:!text-lg relative !pr-12' type='button'>
                                                                                    <div className={`${data.color != '' ? `bg-[${data.color}]` : "bg-[#0066ff]"}  max-w-5 max-h-5 lg:w-8 lg:h-8`} />
                                                                                    <ChevronDownIcon className='absolute -translate-y-2/4 top-2/4 right-3 max-w-5 max-h-5 lg:w-8 lg:h-8' />
                                                                                </button>
                                                                                <InputError message={errors.color} className="mt-2" />
                                                                            </Dropdown.Trigger>
                                                                            <Dropdown.Content contentClasses='bg-white text-center' margin="!mt-0" width='w-full'>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50 relative' onClick={() => { setData('color', '#0066ff') }}><div className='bg-[#0066ff]  max-w-5 max-h-5 lg:w-8 lg:h-8' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50 relative' onClick={() => { setData('color', '#996600') }}><div className='bg-[#996600]  max-w-5 max-h-5 lg:w-8 lg:h-8' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50 relative' onClick={() => { setData('color', '#009933') }}><div className='bg-[#009933]  max-w-5 max-h-5 lg:w-8 lg:h-8' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50 relative' onClick={() => { setData('color', '#cc3300') }}><div className='bg-[#cc3300]  max-w-5 max-h-5 lg:w-8 lg:h-8' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50 relative' onClick={() => { setData('color', '#cc0000') }}><div className='bg-[#cc0000]  max-w-5 max-h-5 lg:w-8 lg:h-8' /></div>
                                                                                <div className='flex cursor-pointer py-1 items-center place-content-center hover:bg-green-50 relative' onClick={() => { setData('color', '#9900ff') }}><div className='bg-[#9900ff]  max-w-5 max-h-5 lg:w-8 lg:h-8' /></div>
                                                                            </Dropdown.Content>
                                                                        </Dropdown>
                                                                    </div>

                                                                </>
                                                            )
                                                        }
                                                        {
                                                            (
                                                                () => {
                                                                    if (data.cardtype == 'center') {
                                                                        return (
                                                                            <div className='card'>
                                                                                <div className='card-body'>
                                                                                    <div className='text-center'>
                                                                                        <h1 className='!text-lg !m-0 !max-w-40 truncate'>{data.title != '' ? data.title : "Title"}</h1>
                                                                                        <p className='!text-lg !mb-1 !max-w-60 truncate'>{data.content != '' ? data.content : "Content"}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    } else if (data.cardtype == 'icon') {
                                                                        return (
                                                                            <div>
                                                                                <div className='card card-icon '>
                                                                                    <div className='flex flex-row'>
                                                                                        <div className={`flex flex-row items-center place-content-center max-h-max w-14 ${data.color != '' ? `bg-[${data.color}]` : "bg-[#0066ff]"}`}>
                                                                                            <IconParse icon={data.icon} color='text-white' />
                                                                                        </div>
                                                                                        <div className='card-body !pl-2'>
                                                                                            <h1 className='!text-lg !m-0 !max-w-20 truncate'>{data.title != '' ? data.title : "Title"}</h1>
                                                                                            <p className='!m-0 !max-w-40 truncate'>{data.content != '' ? data.content : "Content"}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    } else if (data.cardtype == 'header') {
                                                                        return (
                                                                            <div className='card !p-0'>
                                                                                <div className='card-header !p-2 !pl-4 '>
                                                                                    <p className='!m-0 !max-w-20 truncate'>{data.title != '' ? data.title : "Title"}</p>
                                                                                </div>
                                                                                <div className='card-body !py-1'>
                                                                                    <p className='!text-lg !m-0 !max-w-40 truncate'>{data.content != '' ? data.content : "Content"}</p>
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    }
                                                                }
                                                            )()
                                                        }
                                                    </div>
                                                    <div className='mb-3'>
                                                        <InputLabel htmlFor='content' value='Content' />
                                                        <textarea
                                                            id="content"
                                                            type="text"
                                                            name="content"
                                                            value={data.content}
                                                            placeholder="Announcement Content"
                                                            autoComplete="content"
                                                            onChange={(e) => setData('content', e.target.value)}
                                                            className='form-control sm:!h-[6rem] md:!h-[12rem] md:!text-md lg:!h-[22rem] lg:!rounded-[4px]  lg:!text-lg lg:!leading-[150%]'
                                                        />
                                                        <InputError message={errors.content} className="mt-2" />
                                                    </div>

                                                    <PrimaryButton disabled={processing}>
                                                        Create
                                                    </PrimaryButton>
                                                </form>
                                            </>
                                        }
                                    />
                                )
                            } else if (tab == 3) {

                            }
                        }
                    )()
                }
            </>
        </Layout>
    )
}
