import Layout from '@/Layouts/Layout'
import React from 'react'
import { UserIcon } from "@heroicons/react/24/outline";
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import OverlapHeader from '@/Components/CDMLMS/OverlapHeader';
import CompactHeader from '@/Components/CDMLMS/CompactHeader';



export default function Profile({ auth, mustVerifyEmail, status }) {

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
        >
            <Head title='Profile' />
            <CompactHeader
                icon={<UserIcon className="h-6 w-6 text-gray-500" />}
                title={"Account"}
                subtitle={"Profile"}
            >

                <div className="card mb-4">
                    <h2 className="card-header">Profile Information</h2>
                    <div className="card-body !mt-0 !pt-2">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}

                        />
                    </div>
                </div>
                <div className='card mb-4'>
                    <h2 className="card-header">Update Password</h2>
                    <div className="card-body !mt-0 !pt-2">
                        <UpdatePasswordForm />
                    </div>
                </div>
            </CompactHeader>
        </Layout>
    )
}
