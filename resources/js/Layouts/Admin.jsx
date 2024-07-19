import PageHeader from '@/Components/CDMLMS/PageHeader';
import Dropdown from '@/Components/Dropdown';
import { Bars3Icon, BookOpenIcon, CalendarDaysIcon, MegaphoneIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react'

//TODO Subjects, finish admin layout
export default function Admin({ user, children, icon, headerTitle, headerSubtitle }) {

    const [isOpen, setIsOpen] = useState(true)

    const [dropdown, setDropDown] = useState(false);

    return (
        <div className="nav-fixed">
            <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
                id="sidenavAccordion">
                <button onClick={() => { setIsOpen(!isOpen) }} className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle">
                    <Bars3Icon className="h-5 w-5 text-gray-600" />
                </button>
                <Link className="navbar-brand pe-3 ps-4 ps-lg-2" href={route('dashboard')}>
                    CDM LMS
                </Link>
                <form className="form-inline me-auto d-none d-lg-block">
                    <div className="input-group input-group-joined input-group-solid">
                        <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-text"><i data-feather="search"></i></div>
                    </div>
                </form>
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
                <div id="layoutSidenav_nav" style={{ width: isOpen ? "240px" : "0px" }}>
                    <nav className="sidenav shadow-right sidenav-light">
                        <div className="sidenav-menu">
                            <div className="nav accordion transition-transform duration-900 ease-in-out" id="accordionSidenav">
                                <Link href={route('admin.dashboard')} className="nav-link mt-4 hover:cursor-pointer" >
                                    <div className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity text-gray-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                                    Dashboard
                                </Link>
                                <div className="sidenav-menu-heading text-gray-500">Admin</div>
                                {/* { icon: <UsersIcon className={`${size} text-gray-500`} />, title: 'People', subTitle: "View People" } */}
                                <Link className='nav-link hover:cursor-pointer !py-[10px]' href={route('admin.instructors')}>
                                    <div className='nav-link-icon'>
                                        <UsersIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Instructors
                                </Link>
                                <Link className="nav-link hover:cursor-pointer" href={route('admin.subjects')}>
                                    <div className='nav-link-icon'>
                                        <BookOpenIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Subjects
                                </Link>
                                <Link className="nav-link hover:cursor-pointer">
                                    <div className='nav-link-icon'>
                                        <CalendarDaysIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Schedule
                                </Link>
                                <Link className="nav-link hover:cursor-pointer">
                                    <div className='nav-link-icon'>
                                        <MegaphoneIcon className='w-5 h-5 text-gray-500' />
                                    </div>
                                    Anouncements
                                </Link>
                                <div className="sidenav-menu-heading text-gray-500">Faculty</div>

                            </div>
                        </div>
                        <div className="sidenav-footer" style={{ visibility: isOpen ? "visible" : "hidden" }}>
                            <div className="sidenav-footer-content">
                                <div className="sidenav-footer-subtitle">Logged in as:</div>
                                <div className="sidenav-footer-title">{((user.firstname != null) && (user.lastname != null)) ? (user.firstname + " " + user.lastname) : ("Please Update Profile!")}</div>
                                <div className='sidenav-footer-title'>{user.course}</div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content" style={{ "marginLeft": isOpen ? "0rem" : "-15rem" }}>
                    <main onClick={() => { if (isOpen) { setIsOpen(false); } }}>
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
