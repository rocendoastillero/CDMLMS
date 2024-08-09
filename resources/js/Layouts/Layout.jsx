import Dropdown from '@/Components/Dropdown';
import { useEffect, useState } from 'react'
import PageHeader from '@/Components/CDMLMS/PageHeader';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, BookOpenIcon, CalendarDaysIcon, ChevronDownIcon, ChevronRightIcon, CloudArrowUpIcon, DocumentIcon, HandRaisedIcon, LockClosedIcon, MegaphoneIcon, PencilSquareIcon, TrophyIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link } from '@inertiajs/react';
//TODO responsiveness
/**
 * @function Component Main Layout for the app
 * 
 * SB Admin Pro Layout
 * 
 * @param user The Authenticated User 
 * @param icon Page Header Icon
 * @param headerTitle Page Header Title
 * @param headerSubtitle Page Header Sub Title
 * @param children Layout Children
 * @param openDropdown Dropdown state
 * @returns HTML
 */
export default function Layout(
    {
        isAdmin,
        user,
        icon,
        headerTitle,
        headerSubtitle,
        children,
        openDropdown = false,

    }
) {
    const [isOpen, setIsOpen] = useState(true)

    const [dropdown, setDropDown] = useState(openDropdown);

    useEffect((() => {
        console.log(window.innerHeight);
        console.log(window.innerWidth);
    }), [])

    return (
        <div className={`nav-fixed ${isOpen ? "" : "sidenav-toggled"}`}>
            <nav className="topnav navbar shadow sm:!gap-0 max-sm: max-md:!justify-between  navbar-light bg-white"
                id="sidenavAccordion">
                <button onClick={() => { setIsOpen(!isOpen) }} className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0 " id="sidebarToggle">
                    <Bars3Icon className="h-5 w-5 text-gray-600" />
                </button>
                <Link className="navbar-brand pe-3 ps-4 ps-lg-2 max-sm:!w-32" href={isAdmin ? route('admin.dashboard') : route('dashboard')}>
                    CDM LMS
                </Link>
                <div className="form-inline me-auto d-none d-lg-block">

                </div>
                <div className="ms-3 mr-6 relative">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="text-[#212832] inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    {user.lastname}

                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sidenav shadow-right sidenav-light">
                        <div className="sidenav-menu">
                            <div className="nav accordion" id="accordionSidenav">
                                <Link href={isAdmin ? route('admin.dashboard') : route('dashboard')} className="nav-link mt-4" >
                                    <div className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity text-gray-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                                    Dashboard
                                </Link>
                                {
                                    isAdmin && (
                                        <>
                                            <div className="sidenav-menu-heading text-gray-500">Admin</div>
                                            <Link className="nav-link" href={route('announcements.index')}>
                                                <div className='nav-link-icon'>
                                                    <MegaphoneIcon className='w-5 h-5 text-gray-500' />
                                                </div>
                                                Announcements
                                            </Link>
                                            <Link className='nav-link !py-[10px]' href={route('admin.instructors')}>
                                                <div className='nav-link-icon'>
                                                    <UsersIcon className='w-5 h-5 text-gray-500' />
                                                </div>
                                                Instructors
                                            </Link>
                                            <Link className='nav-link !py-[10px]' href={route('admin.repositoryoffiles')} >
                                                <div className='nav-link-icon'>
                                                    <CloudArrowUpIcon className='w-5 h-5 text-gray-500' />
                                                </div>
                                                Repository of Files
                                            </Link>
                                            <Link className="nav-link" href={route('schedules.index')}>
                                                <div className='nav-link-icon'>
                                                    <CalendarDaysIcon className='w-5 h-5 text-gray-500' />
                                                </div>
                                                Schedule
                                            </Link>
                                            <Link className="nav-link" href={route('admin.subjects')}>
                                                <div className='nav-link-icon'>
                                                    <BookOpenIcon className='w-5 h-5 text-gray-500' />
                                                </div>
                                                Subjects
                                            </Link>
                                        </>
                                    )
                                }
                                <div className="sidenav-menu-heading text-gray-500">Faculty</div>
                                <Link href={route('accomplishmentreports.index')} className='nav-link !py-[10px]'  >
                                    <div className='nav-link-icon'>
                                        <TrophyIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Accomplishment Reports
                                </Link>
                                {
                                    !isAdmin && (
                                        <Link href={route('announcements')} className='nav-link !py-[10px]'  >
                                            <div className='nav-link-icon'>
                                                <MegaphoneIcon className='w-5 h-5 text-gray-500' />
                                            </div>
                                            Announcements
                                        </Link>
                                    )
                                }
                                <Link href={route('attendance')} className='nav-link !py-[10px]'  >
                                    <div className='nav-link-icon'>
                                        <HandRaisedIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Attendance
                                </Link>
                                <div>
                                    <Disclosure defaultOpen={openDropdown}>
                                        <DisclosureButton className="nav-link !py-[10px] w-full flex flex-row !text-start relative" onClick={() => { setDropDown(!dropdown) }}>
                                            <div className='nav-link-icon'>
                                                <DocumentIcon className='w-5 h-5 text-gray-500' />
                                            </div>
                                            Files
                                            {
                                                (dropdown) ? (
                                                    <ChevronDownIcon className="h-5 w-5 absolute text-gray-500 right-4" />

                                                ) : (
                                                    <ChevronRightIcon className="h-5 w-5 absolute text-gray-500 right-4" />
                                                )
                                            }
                                        </DisclosureButton>
                                        <DisclosurePanel transition className={`origin-top transition duration-50 ease-in-out pl-[14px] ml-[26px] border-l-[1px] border-gray-500 ${(route().current('syllabus') || route().current('classrecord') || route().current('gradesheet')) ? "" : "data-[closed]:-translate-y-6 data-[closed]:opacity-0"}`}>
                                            <Link href={route('classrecord')} className='nav-link !py-[10px]'  >
                                                Class Record
                                            </Link>
                                            <Link href={route('gradesheet')} className='nav-link !py-[10px]'  >
                                                Grade Sheets
                                            </Link>
                                            <Link href={route('syllabus')} className='nav-link !py-[10px]'  >
                                                Syllabus
                                            </Link>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </div>
                                <Link className='nav-link !py-[10px]'  >
                                    <div className='nav-link-icon'>
                                        <LockClosedIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    File Encrypter
                                </Link>
                                <Link href={route('onlineclass')} className='nav-link !py-[10px]'  >
                                    <div className='nav-link-icon'>
                                        <TrophyIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Online Class
                                </Link>
                                <Link href={route('onlineexam')} className='nav-link !py-[10px]'  >
                                    <div className='nav-link-icon'>
                                        <PencilSquareIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Online Exam
                                </Link>
                                <Link href={route('schedules')} className='nav-link !py-[10px]'  >
                                    <div className='nav-link-icon'>
                                        <CalendarDaysIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Schedule
                                </Link>
                                <Link href={route('subjects.index')} className='nav-link !py-[10px]'  >
                                    <div className='nav-link-icon'>
                                        <BookOpenIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Subjects
                                </Link>
                            </div>
                        </div>
                        <div className="sidenav-footer">
                            <div className="sidenav-footer-content">
                                <div className="sidenav-footer-subtitle">Logged in as:</div>
                                <div className="sidenav-footer-title">{((user.firstname != null) && (user.lastname != null)) ? (user.firstname + " " + user.lastname) : ("Please Update Profile!")}</div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content" onClick={()=>{if(window.innerWidth < 992 && !isOpen){setIsOpen(true)}}}>
                    <main >
                        <PageHeader
                            icon={icon}
                            title={headerTitle}
                            subtitle={headerSubtitle}
                        />
                        <div className="container-xl px-4 mt-n10">
                            {children}
                        </div>
                    </main>
                    <footer className="footer-admin mt-auto footer-light">
                        <div className="container-xl px-4">
                            <div className="row">
                                <div className="col-md-6 small">Copyright © CDM LMS 2024</div>
                                <div className="col-md-6 text-md-end small">
                                    <Link href="#!">Privacy Policy</Link>
                                    ·
                                    <Link href="#!">Terms &amp; Conditions</Link>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

