import Layout from '@/Layouts/Layout'
import React from 'react'
import { UserIcon } from "@heroicons/react/24/outline";
import { useForm } from '@inertiajs/react';



export default function Sample({auth, mustVerifyEmail , status}) {

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        username: auth.user.username,
        firstname: auth.user.firstname,
        lastname: auth.user.lastname,
        address: auth.user.address,
        phone: auth.user.phone,
        email: auth.user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };


    return (
        <Layout user={auth.user} icon={<UserIcon className="h-9 w-9 text-gray-500" />} headerTitle={"Account"} headerSubtitle={"Profile"}>
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
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                                    <input className="form-control" id="inputUsername" type="text"  value={data.username} disabled={true}/>
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputFirstName">First name</label>
                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={data.firstname}  />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputLastName">Last name</label>
                                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name"  value={data.lastname}/>
                                    </div>
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputOrgName">Organization name</label>
                                        <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name"  />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputLocation">Address</label>
                                        <input className="form-control" id="inputLocation" type="text" placeholder="Enter your Address"  value={data.address}/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your Email" value={data.email} />
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputPhone">Phone number</label>
                                        <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number"  value={data.phone} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" for="inputBirthday">Birthday</label>
                                        <input className="form-control" id="inputBirthday" type="date" name="birthday" placeholder="Enter your birthday"  />
                                    </div>
                                </div>
                                <button className="btn btn-primary" type="button">Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
