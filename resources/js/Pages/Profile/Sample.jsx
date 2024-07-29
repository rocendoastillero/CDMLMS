import Layout from '@/Layouts/Layout'
import React from 'react'
import { UserIcon } from "@heroicons/react/24/outline";
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';



export default function Sample({  auth, mustVerifyEmail, status }) {

    


    return (
        <Layout user={auth.user} isAdmin={auth.isAdmin} icon={<UserIcon className="h-9 w-9 text-gray-500" />} headerTitle={"Account"} headerSubtitle={"Profile"}>
            <div className="row">
                <div className="col-xl-4">
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
                        <div className="card-body text-center">
                            <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                            <button className="btn btn-primary" type="button">Upload new image</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
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
                            <UpdatePasswordForm  />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
