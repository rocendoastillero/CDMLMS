import React, { useEffect } from 'react'
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
export default function Announcements({ auth, paginated }) {

    useEffect((() => {
        console.log(paginated);
    }), [])

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
            icon={<MegaphoneIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Announcements'
            headerSubtitle='View Announcements'>
            <Head title='Announcements' />
            <CardsWithSticky
                contentSize='!w-9/12 max-lg:!w-10/12'
                stickySize='!w-3/12 max-lg:!w-2/12'
                cards={
                    <>
                        {
                            paginated.data.map(
                                announcement => {
                                    if (announcement.cardtype == 'center') {
                                        return (
                                            <SingleCardCenter
                                                title={announcement.title}
                                                body={announcement.content}

                                            />

                                        )
                                    } else if (announcement.cardtype == 'icon') {
                                        return (
                                            <IconCard
                                                icon={<IconParse icon={announcement.icon} color='text-white' />}
                                                title={announcement.title}
                                                body={announcement.content}
                                                iconColor={`bg-[${announcement.color}]`}

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
                        <div className='absolute -translate-x-2/4 left-2/4 bottom-0 w-full flex flex-row items-center place-content-center'>
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
                                                    disabled = {link.url == null}
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
                                                    disabled = {link.url == null}
                                                />
                                            )
                                        }
                                    }
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
