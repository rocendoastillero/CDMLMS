import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Select } from '@headlessui/react';
import { ChevronDownIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Dropdown from '@/Components/Dropdown';


export default function Register() {

    const [show, setShow] = useState(0);

    const [showC, setShowC] = useState(0);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        firstname: '',
        lastname: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        console.log(data);

        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className='text-center'>


                <form onSubmit={submit}>

                    <div className='flex flex-row justify-between mt-4'>
                        <div className='w-full mr-2'>
                            <InputLabel htmlFor="firstname" value="First Name" />

                            <TextInput
                                className='capitalize'
                                id="firstname"
                                name="firstname"
                                value={data.firstname}
                                autoComplete="firstname"
                                isFocused={true}
                                onChange={(e) => { setData('firstname', e.target.value) }}
                                required
                            />

                            <InputError message={errors.firstname} className="mt-2" />
                        </div>
                        <div className='w-full ml-2'>
                            <InputLabel htmlFor="lastname" value="Last Name" />

                            <TextInput
                                className='capitalize'
                                id="lastname"
                                name="lastname"
                                value={data.lastname}
                                autoComplete="lastname"
                                isFocused={true}
                                onChange={(e) => { setData('lastname', e.target.value) }}
                                required
                            />

                            <InputError message={errors.lastname} className="mt-2" />
                        </div>
                    </div>

                    <div className='flex flex-row justify-between mt-4'>
                        <div className='w-full mr-2'>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="email"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>
                    </div>

                    <div className='mt-4'>
                        <InputLabel htmlFor="phone" value="Phone" />

                        <TextInput
                            id="phone"
                            name="phone"
                            type='tel'
                            value={data.phone}
                            autoComplete="phone"
                            isFocused={true}
                            onChange={(e) => { setData('phone', e.target.value) }}
                            placeholder='09XXXXXXXXX'
                            pattern='[0-9]{11}'
                            required
                        />

                        <InputError message={errors.phone} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />
                        <div className='relative'>


                            <TextInput
                                id="password"
                                type={show ? "text" : "password"}
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <div className='!absolute !-translate-y-2/4 !m-0 !top-2/4 right-3 cursor-pointer' onClick={() => { setShow(!show) }}>
                                {
                                    show ? (
                                        <EyeSlashIcon className='w-6 h-6' />
                                    ) : (
                                        <EyeIcon className='w-6 h-6' />
                                    )
                                }
                            </div>
                        </div>
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                        <div className='relative'>
                            <TextInput
                                id="password_confirmation"
                                type={showC ? "text" : "password"}
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <div className='!absolute !-translate-y-2/4 !m-0 !top-2/4 right-3 cursor-pointer' onClick={() => { setShowC(!showC) }}>
                                {
                                    showC ? (
                                        <EyeSlashIcon className='w-6 h-6' />
                                    ) : (
                                        <EyeIcon className='w-6 h-6' />
                                    )
                                }
                            </div>
                        </div>
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
