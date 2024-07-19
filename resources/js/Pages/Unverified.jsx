import Guest from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function Unverified() {
    return (
        <Guest>
            <div className='px-3 my-4 text-lg font-semibold text-center'>
                Kindly contact the Dean for the verification of your account,<br /><br />Thank you for your cooperation.

            </div>
            <div className='w-full flex flex-row justify-between items-center'>
                <Link className='my-3 mx-4 pt-4 txt-lg font-semibold' href={route('logout')} method="post" as="button">
                    Log Out
                </Link>
                <Link className='my-3 mx-4 pt-4 txt-lg font-semibold' href={route('dashboard')}  as="button">
                    Already Verified?
                </Link>
            </div>
        </Guest>
    )
}
