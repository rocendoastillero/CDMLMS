import React from 'react'
import Layout from "@/Layouts/Layout";
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';
import { Head } from '@inertiajs/react';
import IconCard from '@/Components/CDMLMS/IconCard';
import { ExclamationCircleIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import { Link } from '@inertiajs/react';


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Anouncements({ auth }) {
    return (
        <Layout 
        user={auth.user} 
        icon={<MegaphoneIcon className='w-9 h-9 text-gray-500' />} 
        headerTitle='Anouncements' 
        headerSubtitle='View Anouncements'>
            <Head title='Anouncements' />
            <CardsWithSticky
                contentSize='!w-10/12'
                stickySize='!w-2/12'
                cards={
                    <>
                        <IconCard
                            icon={
                                <ExclamationCircleIcon className="h-6 w-6 text-white" />
                            }
                            title="Anouncement 1"
                            body="This is an anouncement that is being anounced!"
                            className='bg-orange-800'
                        />
                        <SingleCardWithHeader
                            header='Anouncements'
                            body={
                                <>
                                    <p>
                                        a public and typically formal statement about a fact, occurrence, or intention.
                                        <br />"the spokesperson was about to make an announcement"
                                    </p>
                                    <div className="dropdown">
                                        <button className="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown Button</button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#!">Action</a>
                                            <a className="dropdown-item" href="#!">Another action</a>
                                            <a className="dropdown-item" href="#!">Something else here</a>
                                        </div>
                                    </div>
                                </>
                            }

                        /><IconCard
                            icon={
                                <ExclamationCircleIcon className="h-6 w-6 text-gray-500" />
                            }
                            title="Anouncement 2"
                            body="This is an anouncement that is being anounced!"
                        />

                        <IconCard
                            icon={
                                <ExclamationCircleIcon className="h-6 w-6 text-gray-500" />
                            }
                            title="Anouncement 3"
                            body="This is an anouncement that is being anounced!"
                        />
                        <div id="cardWithHeader">
                            <SingleCardWithHeader
                                header='Anouncements'
                                body={<p>

                                    a public and typically formal statement about a fact, occurrence, or intention. <br />"the spokesperson was about to make an announcement"</p>
                                }

                            />
                        </div>
                    </>
                }
                stickyNavBody={
                    <li className="nav-item">
                        <Link className="nav-link" href="#cardWithHeader">
                            Sticky Navigation
                        </Link>
                    </li>
                }
            />


        </Layout>
    )
}
//