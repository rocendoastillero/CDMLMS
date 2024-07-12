import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Headers } from "@/utils/headers"
import { Head } from '@inertiajs/react'

const headers = Headers('w-9 w-9');

/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Schedules({ auth }) {
    return (
        <Layout user={auth.user} icon={headers[5].icon} headerTitle={headers[5].title} headerSubTitle={headers[5].subTitle}>
            <Head title={headers[5].title} />
            <nav className="nav nav-borders  !mb-8">
                <a className="nav-link !text-white ms-0" href="account-profile.html">Profile</a>
                <a className="nav-link !text-white active" href="account-billing.html">Billing</a>
                <a className="nav-link !text-white" href="account-security.html">Security</a>
                <a className="nav-link !text-white" href="account-notifications.html">Notifications</a>
            </nav>
            <div className='w-full flex flex-row overflow-x-auto'>
                <div className='flex w-[14.2857142857%] mx-2'>
                    <a className="card lift lift-sm h-100" href="https://request.pnm.edu.ph">
                        <div className="card-body py-5">
                            <h5 className="card-title text-primary mb-2 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clipboard me-2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                Student Google Email                                            </h5>
                            <p className="card-text">Get your your.name@student.pnm.edu.ph email now! Exclusively available for enrolled students of Colegio de Montalban. Go to request.pnm.edu.ph or click this card.</p>
                        </div>
                        <div className="card-footer">
                            <div className="small text-muted">May-30-24</div>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    )
}
