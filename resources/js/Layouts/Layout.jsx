import Dropdown from '@/Components/Dropdown';
import { useState, useEffect } from 'react'
import PageHeader from '../Components/CDMLMS/PageHeader';
import { Headers } from '../utils/headers';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from '@inertiajs/react';

const headers = Headers('w-5 h-5');
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
        user,
        icon,
        headerTitle,
        headerSubtitle,
        children,
        openDropdown = false

    }
) {
    const [isOpen, setIsOpen] = useState(true)

    const [dropdown, setDropDown] = useState(openDropdown);

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
                                <Link href="/d" className="nav-link mt-4 hover:cursor-pointer" >
                                    <div className="nav-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity text-gray-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                                    Dashboard
                                </Link>
                                <div className="sidenav-menu-heading text-gray-500">Faculty</div>
                                {
                                    headers.map((item, index) => {
                                        if (index == 0) {
                                            return null
                                        } else if (index == 5) {
                                            return (
                                                <div key={index}>
                                                    <Disclosure defaultOpen={openDropdown}>
                                                        <DisclosureButton className="nav-link hover:cursor-pointer !py-[10px] w-full justify-between flex flex-row" onClick={() => { setDropDown(!dropdown) }}>
                                                            <div>
                                                                <div className='nav-link-icon'>
                                                                    {item.icon}
                                                                </div>
                                                                {item.title}
                                                            </div>
                                                            {
                                                                (dropdown) ? (
                                                                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />

                                                                ) : (
                                                                    <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                                                                )
                                                            }
                                                        </DisclosureButton>
                                                        <DisclosurePanel transition className={`origin-top transition duration-50 ease-in-out pl-[14px] ml-[26px] border-l-[1px] border-gray-500 ${(route().current('syllabus') || route().current('classrecord') || route().current('gradesheets')) ? "" : "data-[closed]:-translate-y-6 data-[closed]:opacity-0"}`}>
                                                            <Link href="syllabus" className='nav-link hover:cursor-pointer !py-[10px]'  >
                                                                Syllabus
                                                            </Link>
                                                            <Link href="classrecord" className='nav-link hover:cursor-pointer !py-[10px]'  >
                                                                Class Record
                                                            </Link>
                                                            <Link href="gradesheets" className='nav-link hover:cursor-pointer !py-[10px]'  >
                                                                Grade Sheets
                                                            </Link>
                                                        </DisclosurePanel>
                                                    </Disclosure>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <Link key={index.toString()} href={`${(index == 6) ? "dummy" : item.title.toLowerCase()}`} className='nav-link hover:cursor-pointer !py-[10px]'  >
                                                    <div className='nav-link-icon'>
                                                        {item.icon}
                                                    </div>
                                                    {item.title}
                                                </Link>
                                            );
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className="sidenav-footer" style={{ visibility: isOpen ? "visible" : "hidden" }}>
                            <div className="sidenav-footer-content">
                                <div className="sidenav-footer-subtitle">Logged in as:</div>
                                <div className="sidenav-footer-title">{((user.firstname != null) && (user.lastname != null)) ? (user.firstname + " " + user.lastname) : ("Please Update Profile!")}</div>
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

