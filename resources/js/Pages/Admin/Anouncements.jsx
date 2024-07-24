import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import IconCard from '@/Components/CDMLMS/IconCard';
import IconParse from '@/Components/CDMLMS/IconParse';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Layout from '@/Layouts/Layout'
import { ChevronDownIcon, MegaphoneIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
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


export default function Anouncements({ auth, paginated }) {

    // const { refs, floatingStyles, context } = useFlo

    const [editing, setEditing] = useState(false);

    const [tab, setTab] = useState(2);

    const [selectedAnouncement, setSelectedAnouncement] = useState({
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
            patch(route('anouncements.update'), data.id);
        } else {
            post(route('anouncements.store'), { onSuccess: () => { reset(); setTab(1) } });
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
            headerTitle="Anouncements"
            headerSubtitle="Admin Anouncements"
        >
            <Head title='Admin Anouncements' />
            <>
                <div className='relative text-white '>
                    <div className='absolute bottom-[110%] w-full flex flex-row gap-2'>
                        <button onClick={() => { setTab(1) }} className=''>
                            tab1
                        </button>
                        <button onClick={() => { setTab(2) }} className=''>
                            tab2
                        </button>
                    </div>
                </div>
                {
                    (
                        () => {
                            if (tab == 1) {
                                return (
                                    <CardsWithSticky
                                        contentSize='!w-10/12'
                                        stickySize='!w-2/12'
                                        cards={
                                            <>
                                                {
                                                    paginated.data.map(
                                                        anouncement => {
                                                            if (anouncement.cardtype == 'center') {
                                                                return (
                                                                    <SingleCardCenter
                                                                        title={anouncement.title}
                                                                        body={anouncement.content}
                                                                        button={
                                                                            <div className='m-2 flex flex-row gap-2'>
                                                                                <Link
                                                                                    className='rounded-[50%] bg-blue-500 min-h-5 min-w-5'
                                                                                    href={route('anouncements.destroy', anouncement.id)}
                                                                                    as='button'
                                                                                >
                                                                                    <PencilIcon className='m-2 w-5 h-5 text-white' />
                                                                                </Link>
                                                                                <Link
                                                                                    className='rounded-[50%] bg-red-500 min-h-5 min-w-5'
                                                                                    href={route('anouncements.destroy', anouncement.id)}
                                                                                    as='button'
                                                                                >
                                                                                    <TrashIcon className='m-2 w-5 h-5 text-white' />
                                                                                </Link>
                                                                            </div>
                                                                        }
                                                                    />

                                                                )
                                                            } else if (anouncement.cardtype == 'icon') {
                                                                return (
                                                                    <IconCard
                                                                        icon={<IconParse icon={anouncement.icon} color='text-white' />}
                                                                        title={anouncement.title}
                                                                        body={anouncement.content}
                                                                        iconColor={`bg-[${anouncement.color}]`}
                                                                        button={
                                                                            <>
                                                                                <div className='m-2 flex flex-row gap-2'>
                                                                                    <Link
                                                                                        className='rounded-[50%] bg-blue-500 min-h-5 min-w-5'
                                                                                        href={route('anouncements.destroy', anouncement.id)}
                                                                                        as='button'
                                                                                    >
                                                                                        <PencilIcon className='m-2 w-5 h-5 text-white' />
                                                                                    </Link>
                                                                                    <Link
                                                                                        className='rounded-[50%] bg-red-500 min-h-5 min-w-5'
                                                                                        href={route('anouncements.destroy', anouncement.id)}
                                                                                        as='button'
                                                                                    >
                                                                                        <TrashIcon className='m-2 w-5 h-5 text-white' />
                                                                                    </Link>
                                                                                </div>
                                                                            </>
                                                                        }
                                                                    />

                                                                )
                                                            } else if (anouncement.cardtype == 'header') {
                                                                return (
                                                                    <SingleCardWithHeader
                                                                        header={anouncement.title}
                                                                        body={
                                                                            <div className='mt-2'>
                                                                                {anouncement.content}
                                                                            </div>
                                                                        }
                                                                        button={
                                                                            <>
                                                                                <div className='m-2 flex flex-row gap-2'>
                                                                                    <Link
                                                                                        className='rounded-[50%] bg-blue-500 min-h-5 min-w-5'
                                                                                        href={route('anouncements.destroy', anouncement.id)}
                                                                                        as='button'
                                                                                    >
                                                                                        <PencilIcon className='m-2 w-5 h-5 text-white' />
                                                                                    </Link>
                                                                                    <Link
                                                                                        className='rounded-[50%] bg-red-500 min-h-5 min-w-5'
                                                                                        href={route('anouncements.destroy', anouncement.id)}
                                                                                        as='button'
                                                                                    >
                                                                                        <TrashIcon className='m-2 w-5 h-5 text-white' />
                                                                                    </Link>
                                                                                </div>
                                                                            </>
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        }
                                                    )
                                                }
                                            </>
                                        }
                                    />
                                );
                            } else if (tab == 2) {
                                return (
                                    <SingleCardWithHeader
                                        header='Create Anouncement'
                                        button={
                                            <button onClick={submit} className='flex items-center place-content-center w-10 h-10 rounded-[50%] bg-green-950 mr-6'>
                                                <PlusIcon className='w-8 h-8 text-white' />
                                            </button>
                                        }
                                        body={
                                            <>
                                                <form>
                                                    <div className='flex flex-row gap-4 my-3'>
                                                        <div>
                                                            <InputLabel htmlFor='title' value='Title' />
                                                            <TextInput
                                                                id="title"
                                                                type="text"
                                                                name="title"
                                                                value={data.title}
                                                                placeholder="Anouncement Title"
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
                                                                        center
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
                                                    <div>
                                                        <InputLabel htmlFor='content' value='Content' />
                                                        <textarea
                                                            id="content"
                                                            type="text"
                                                            name="content"
                                                            value={data.content}
                                                            placeholder="Anouncement Content"
                                                            autoComplete="content"
                                                            onChange={(e) => setData('content', e.target.value)}
                                                            className='form-control sm:!h-[6rem] md:!h-[12rem] md:!text-md lg:!h-[22rem] lg:!rounded-[4px]  lg:!text-lg lg:!leading-[150%]'
                                                        />
                                                        <InputError message={errors.content} className="mt-2" />
                                                    </div>
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
