import React, { useRef } from 'react'
import Layout from "@/Layouts/Layout";
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';
import { Head } from '@inertiajs/react';
import IconCard from '@/Components/CDMLMS/IconCard';
import { ExclamationTriangleIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import { Link } from '@inertiajs/react';
import IconParse from '@/Components/CDMLMS/IconParse';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import AlertCard from '@/Components/CDMLMS/AlertCard';
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader';
import PageNav from '@/Components/CDMLMS/PageNav';


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Announcements({ auth, paginated }) {

    const announceRef = useRef([]);

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
        >
            <Head title='Announcements' />
            <OverlapHeader
                icon={<MegaphoneIcon className='w-9 h-9 text-gray-500' />}
                title='Announcements'
                subtitle='View Announcements'
            >
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
                                                        key={announcement.id}
                                                        title={announcement.title}
                                                        body={announcement.content}

                                                    />

                                                )
                                            } else if (announcement.cardtype == 'icon') {
                                                return (
                                                    <IconCard
                                                        ref={el => announceRef.current[index] = el}
                                                        key={announcement.id}
                                                        icon={<IconParse icon={announcement.icon} color='text-white' />}
                                                        title={announcement.title}
                                                        body={announcement.content}
                                                        iconColor={`bg-[${announcement.color}]`}

                                                    />

                                                )
                                            } else if (announcement.cardtype == 'header') {
                                                return (
                                                    <SingleCardWithHeader
                                                        ref={el => announceRef.current[index] = el}
                                                        key={announcement.id}
                                                        header={announcement.title}
                                                        body={
                                                            <div className='mt-2'>
                                                                {announcement.content}
                                                            </div>
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
                        <div className='flex flex-col gap-4'>
                            <div>
                                {
                                    paginated.data.map((announcement, index) =>
                                        <button
                                            onClick={() => announceRef.current[index].scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' })}
                                            className='nav-link'
                                        >
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

            </OverlapHeader>
        </Layout>
    )
}
//
