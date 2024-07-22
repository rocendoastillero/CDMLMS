import Guest from '@/Layouts/GuestLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Unverified() {
    return (
        <Guest
            footer={
                <div className='card-footer'>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <Link className='my-3 mx-4 txt-lg text-primary' href={route('logout')} method="post">
                            Log Out
                        </Link>
                        <Link className='my-3 mx-4 txt-lg text-primary' href={route('dashboard')}>
                            Already Verified?
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title='Unverified'/>
            <div className='px-3 my-4 text-lg font-semibold text-center'>
                Kindly contact the Dean for the verification of your account,<br /><br />Thank you for your cooperation.
            </div>
        </Guest>
    )
}
