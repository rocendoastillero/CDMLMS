import React from 'react'
import Layout from "@/Layouts/Layout";
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';
import { Head } from '@inertiajs/react';
import IconCard from '@/Components/CDMLMS/IconCard';
import { ExclamationCircleIcon, MegaphoneIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import { Link } from '@inertiajs/react';
import IconParse from '@/Components/CDMLMS/IconParse';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Anouncements({ auth, paginated }) {
    return (
        <Layout
            isAdmin={auth.isAdmin}
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
                        {
                            paginated.data.map(
                                anouncement => {
                                    if (anouncement.cardtype == 'center') {
                                        return (
                                            <SingleCardCenter
                                                title={anouncement.title}
                                                body={anouncement.content}

                                            />

                                        )
                                    } else if (anouncement.cardtype == 'icon') {
                                        return (
                                            <IconCard
                                                icon={<IconParse icon={anouncement.icon} color='text-white' />}
                                                title={anouncement.title}
                                                body={anouncement.content}
                                                iconColor={`bg-[${anouncement.color}]`}

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

                                            />
                                        );
                                    }
                                }
                            )
                        }
                    </>
                }
                stickyNavHeader={`Page: ${paginated.current_page}`}
                stickyNavBody={
                    <>
                        <div className='absolute bottom-0 w-full flex flex-row items-center place-content-center'>
                            {
                                paginated.links.map(link =>
                                    <Link
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                        className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                        href={link.url}
                                        as='button'
                                        preserveScroll={true}
                                    />
                                )
                            }
                        </div>
                    </>
                }
            />
        </Layout>
    )
}
//
