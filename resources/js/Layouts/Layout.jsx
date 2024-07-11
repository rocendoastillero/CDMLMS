import Dropdown from '@/Components/Dropdown';
import { useState, useEffect } from 'react'
import PageHeader from '../Components/CDMLMS/PageHeader';
import { Headers } from '../utils/headers';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from '@inertiajs/react';

const headers = Headers('w-5 h-5');

export default function Layout({ user, icon, headerTitle, headerSubTitle, children, openDropdown = false }) {
    const [isOpen, setIsOpen] = useState(true)
    const [dropdown, setDropDown] = useState(openDropdown);

    return (
        <>
            <div className="nav-fixed">
                <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
                    id="sidenavAccordion">
                    <button onClick={() => { setIsOpen(!isOpen) }} className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle">
                        <Bars3Icon className="h-5 w-5 text-gray-600" />
                    </button>
                    <Link className="navbar-brand pe-3 ps-4 ps-lg-2" href={route('d')}>
                        CDM LMS
                    </Link>
                    <form className="form-inline me-auto d-none d-lg-block me-3">
                        <div className="input-group input-group-joined input-group-solid">
                            <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-text"><i data-feather="search"></i></div>
                        </div>
                    </form>
                    <div className="hidden sm:flex sm:items-center sm:ms-6 !mr-7">
                        <div className="ms-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {user.username}

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
                                            } else if (index == 7) {
                                                return (
                                                    <div key={index}>

                                                        <Disclosure defaultOpen={openDropdown}>
                                                            <DisclosureButton className="nav-link hover:cursor-pointer !py-[10px] w-full justify-between py-2 flex flex-row" onClick={() => { setDropDown(!dropdown) }}>
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
                                                            <DisclosurePanel transition className="origin-top transition duration-50 ease-in-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 pl-[14px] ml-[26px] border-l-[1px] border-gray-500">
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
                                                    <Link key={index.toString()} href={`${item.title.toLowerCase()}`} className='nav-link hover:cursor-pointer !py-[10px]'  >
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
                                    <div className="sidenav-footer-title">{user.firstname + " " + user.lastname}</div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content" style={{ "marginLeft": isOpen ? "0rem" : "-15rem" }}>
                        <main onClick={() => {
                            if (isOpen) {
                                setIsOpen(false);
                            }
                        }}
                        >

                            <PageHeader
                                icon={icon}
                                title={headerTitle}
                                subtitle={headerSubTitle}
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
            {
                /* 
                <div className='w-full h-full fixed  bg-[#F2F6FC]'>
                <div className='absolute top-0 w-full  z-[5] bg-white'>
                <nav className="mtopnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light mbg-white relative">
                    <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle" onClick={onClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                    <Link href="/d" className="navbar-brand pe-3 ps-4 ps-lg-2" >CDM LMS</Link>
                    <div className="w-full abosulute right-0 text-right mr-8">
                        
                    </div>

                </nav>
                </div>
                <div className='relative w-full h-full mt-[3.625rem]'>
                <div className='absolute left-0 h-full'>
                    <div className="msidenav right-0 bottom-0 h-full relative w-[0px]  z-[1] bg-white  transition-[0.5s]  left-0  shadow" style={{ width: isOpen ? "240px" : "0px" }}>
                        <div className='sidenav-menu'>
                            <div className='nav accordion'>
                                
                                
                            </div>
                        </div>
                        <div className="sidenav-footer absolute w-full bottom-0 left-0  bg-[#F4F4F5]">
                            <div className="sidenav-footer-content">
                                <div className="sidenav-footer-subtitle">Logged in as:</div>
                                <div className="sidenav-footer-title">User</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                </div>
                </div> 
                */
            }
        </>
        // <div className='nav-fixed h-screen'>
        //     <div>

        //     </div>
        //     <div className="flex flex-row h-full w-full relative">
        //         <div className='relative left-0 top-0 bottom-9 w-[260px] h-full z-[1030] bg-black'>
        //             asdasd
        //         </div>

        //         <div className="w-full bg-[#F2F6FC]">
        //             <main>
        //                 <PageHeader
        //                     icon={icon}
        //                     title={headerTitle}
        //                     subtitle={headerSubTitle}
        //                 />
        //                 <div className="container-xl px-4 mt-n10">
        //                     {children}
        //                     <a className="card lift" href="#!">
        //                         <div className="card-body">Card with the lift utility applied. Hover over me, and then click on me!</div>
        //                     </a>
        //                 </div>
        //                 <footer className="footer-admin mt-auto footer-light">
        //                     <div className="container-xl px-4">
        //                         <div className="row">
        //                             <div className="col-md-6 small">Copyright © CDM Portal 2024</div>
        //                             <div className="col-md-6 text-md-end small">
        //                                 <a href="#about" data-bs-toggle="modal" data-bs-target="#about">About</a>
        //                                 ·
        //                                 <a href="#TC" data-bs-toggle="modal" data-bs-target="#TC">Terms &amp; Conditions</a>
        //                                 ·
        //                                 <a href="#PP" data-bs-toggle="modal" data-bs-target="#PP">Privacy Policy</a>
        //                             </div>

        //                             <div className="modal fade" id="about" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        //                                 <div className="modal-dialog modal-dialog-centered" role="document">
        //                                     <div className="modal-content text-dark">
        //                                         <div className="modal-header">
        //                                             <h5 className="modal-title" id="exampleModalCenterTitle">About</h5>
        //                                             <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        //                                         </div>
        //                                         <div className="modal-body">This application is designed and developed by <strong>Engr. John Julius Baldia</strong> of Institute of Computer Studies - Computer Engineering Department.
        //                                             <br>
        //                                             </br>
        //                                             <ul>
        //                                                 <li><strong>Theme:</strong> SB Admin Pro</li>
        //                                                 <li><strong>Front-end:</strong> HTML, CSS, Javascript, Bootstrap</li>
        //                                                 <li><strong>Back-end:</strong> PHP, SQL</li>
        //                                                 <li><strong>Server:</strong> Azure Virtual Machine located in Singapore</li>
        //                                                 <li><strong>Security:</strong> Protected by Cloudflare</li>
        //                                             </ul>
        //                                         </div>
        //                                         <div className="modal-footer"><button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div className="modal fade" id="TC" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        //                                 <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
        //                                     <div className="modal-content">
        //                                         <div className="modal-header">
        //                                             <h5 className="modal-title" id="TCTitle">Terms &amp; Conditions</h5>
        //                                             <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        //                                         </div>
        //                                         <div className="modal-body text-black m-4">
        //                                             <p><strong>Effective Date:</strong> [date_of_approval]</p>

        //                                             <p>Welcome to the CDM Portal, provided by Colegio de Montalban. By accessing or using the CDM Portal, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>

        //                                             <h2 className="mt-4">Use of the CDM Portal:</h2>

        //                                             <p className="ms-4"><strong>Access:</strong> The CDM Portal is provided for the exclusive use of Colegio de Montalban. Users are granted access for educational and administrative purposes related to the College.</p>

        //                                             <p className="ms-4"><strong>Ownership:</strong> The CDM Portal is owned and operated by John Julius Baldia. It is provided to Colegio de Montalban for its exclusive use.</p>

        //                                             <p className="ms-4"><strong>Temporary Domain:</strong> The CDM Portal is currently accessible through the temporary domain "cdm.guarantechph.com." Please be aware that during this period, the domain and server owner of "guarantechph.com" may have access to the data.</p>

        //                                             <p className="ms-4"><strong>Domain Transfer:</strong> Colegio de Montalban is in the process of acquiring a dedicated ".edu.ph" domain and server for the CDM Portal. Once acquired, all data collected on the temporary domain "cdm.guarantechph.com" will be transferred to the dedicated domain.</p>

        //                                             <p className="ms-4"><strong>Registration:</strong> To access certain features, you may be required to register an account. You agree to provide accurate and complete information during the registration process.</p>

        //                                             <h2 className="mt-4">User Responsibilities:</h2>

        //                                             <p className="ms-4"><strong>Acceptable Use:</strong> You agree not to use the CDM Portal for any unlawful or prohibited purpose.</p>

        //                                             <p className="ms-4"><strong>User Content:</strong> Any content you submit to the CDM Portal remains your property. By submitting content, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and reproduce it.</p>

        //                                             <h2 className="mt-4">Intellectual Property:</h2>

        //                                             <p className="ms-4"><strong>Ownership:</strong> The CDM Portal and its original content, features, and functionality are owned by Colegio de Montalban and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

        //                                             <p className="ms-4"><strong>Restrictions:</strong> You may not modify, reproduce, distribute, create derivative works, publicly display, publicly perform, or otherwise use any part of the CDM Portal without our written consent.</p>

        //                                             <h2 className="mt-4">Privacy:</h2>

        //                                             <p className="ms-4"><strong>Data Collection:</strong> Our use of your personal information is governed by our Privacy Policy. By using the CDM Portal, you consent to the collection and use of your information as outlined in the Privacy Policy.</p>

        //                                             <h2 className="mt-4">Termination:</h2>

        //                                             <p className="ms-4"><strong>Termination by Us:</strong> We reserve the right to terminate or suspend your access to the CDM Portal without prior notice for any reason, including a breach of these Terms and Conditions.</p>

        //                                             <p className="ms-4"><strong>Termination by You:</strong> You may stop using the CDM Portal at any time.</p>

        //                                             <h2 className="mt-4">Changes to Terms and Conditions:</h2>

        //                                             <p>We reserve the right to update or change these Terms and Conditions at any time. Your continued use of the CDM Portal after such changes indicates your acceptance of the modified terms.</p>

        //                                             <h2 className="mt-4">Governing Law:</h2>

        //                                             <p>These Terms and Conditions are governed by and construed in accordance with the laws of the Philippines. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of the Philippines.</p>

        //                                             <h2 className="mt-4">Contact Information:</h2>

        //                                             <p className="ms-4">If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:colegiodemontalban.official@gmail.com">colegiodemontalban.official@gmail.com</a>.</p>

        //                                             <p>By using the CDM Portal, you agree to be bound by these Terms and Conditions.</p>
        //                                         </div>
        //                                         <div className="modal-footer"><button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="modal fade" id="PP" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        //                                 <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
        //                                     <div className="modal-content">
        //                                         <div className="modal-header">
        //                                             <h5 className="modal-title" id="exampleModalCenterTitle">Terms &amp; Conditions</h5>
        //                                             <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        //                                         </div>
        //                                         <div className="modal-body text-black m-4">
        //                                             <p><strong>Effective Date:</strong> [date_of_approval]</p>

        //                                             <p>Welcome to the CDM Portal, provided by Colegio de Montalban. Your privacy is important to us, and we are committed to protecting your personal information in accordance with Republic Act No. 10173, also known as the Data Privacy Act of 2012.</p>

        //                                             <h2 className="mt-4">Information We Collect:</h2>

        //                                             <p className="ms-4">We collect the following types of information:</p>

        //                                             <ul className="ms-5">
        //                                                 <li><strong>Personal Information:</strong> This may include but is not limited to your name, contact information, and other personally identifiable details.</li>
        //                                                 <li><strong>Usage Information:</strong> We may collect information about how you interact with the CDM Portal, such as the pages you visit and the actions you take.</li>
        //                                             </ul>

        //                                             <h2 className="mt-4">How We Use Your Information:</h2>

        //                                             <ul className="ms-5">
        //                                                 <li><strong>To provide and maintain the CDM Portal.</strong></li>
        //                                                 <li><strong>To improve and customize user experience.</strong></li>
        //                                                 <li><strong>To send important notifications and updates.</strong></li>
        //                                             </ul>

        //                                             <h2 className="mt-4">Data Security:</h2>

        //                                             <p className="ms-4">We implement reasonable security measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. It's also important to note that during the temporary use of the domain "cdm.guarantechph.com" the domain and server owner of "guarantechph.com" may have access to the data.</p>

        //                                             <h2 className="mt-4">Data Transfer:</h2>

        //                                             <p className="ms-4">As part of Colegio de Montalban commitment to data security, we are in the process of acquiring a dedicated ".edu.ph" domain and server for the CDM Portal. Once acquired, all data collected on the temporary domain "cdm.guarantechph.com" will be transferred to the dedicated domain.</p>

        //                                             <h2 className="mt-4">Sharing Your Information:</h2>

        //                                             <p className="ms-4">We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may share it with trusted service providers who assist us in operating the CDM Portal.</p>

        //                                             <h2 className="mt-4">Your Rights:</h2>

        //                                             <p className="ms-4">You have the right to access, correct, and delete your personal information. To exercise these rights, please contact us at <a href="mailto:colegiodemontalban.official@email.com">colegiodemontalban.official@email.com</a>.</p>

        //                                             <h2 className="mt-4">Changes to This Privacy Policy:</h2>

        //                                             <p className="ms-4">In light of the impending domain and server transfer, we may update our privacy policy. Any changes related to data security and transfer will be posted on this page with an updated effective date.</p>

        //                                             <h2 className="mt-4">Contact Information:</h2>

        //                                             <p className="ms-4">If you have any questions or concerns about our privacy practices, please contact us at <a href="mailto:colegiodemontalban.official@email.com">colegiodemontalban.official@email.com</a>.</p>

        //                                             <p>By using the CDM Portal, you agree to the terms outlined in this privacy policy.</p>
        //                                         </div>
        //                                         <div className="modal-footer"><button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div></div></div></footer>
        //             </main>
        //         </div>
        //     </div>
        // </div>
    );
}

