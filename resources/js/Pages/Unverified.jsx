import Guest from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function Unverified() {
    return (
        <Guest>
            <div className='px-3 my-4 text-lg font-semibold text-center'>
                Kindly contact the Dean for the verification of your account,<br />Thank you for your cooperation.

            </div>
            <div className='w-full flex flex-row place-content-center items-center'>
                <Link className='my-3 pt-4 txt-lg font-semibold' href={route('logout')} method="post" as="button">
                    Log Out
                </Link>
            </div>
        </Guest>
    )
}
