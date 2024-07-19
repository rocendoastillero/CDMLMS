import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Headers } from "@/utils/headers"
import { Head } from '@inertiajs/react'
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky'

const headers = Headers('w-9 w-9');

/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function ClassRecord({ auth }) {

    
    return (
        <Layout user={auth.user} icon={headers[5].icon} headerTitle={"Class Record"} headerSubtitle={headers[5].title} openDropdown={true}>
            <Head title={headers[5].title} />
            <CardsWithSticky
                contentSize='!w-8/12'
                stickySize='!w-4/12'
                cards={
                    <SingleCardWithHeader
                        header="Class Record"
                        body={
                            <div className='h-96'>
                            </div>
                        }
                    />
                }
                stickyNavHeader="Upload a File"
                stickyNavBody={
                    <div className='h-36 relative '>
                        <button className="btn btn-primary !absolute !-translate-x-2/4 !left-2/4 bottom-0" type="button">Upload new image</button>
                    </div>
                }
            />
        </Layout>
    )
}
