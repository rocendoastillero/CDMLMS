import { useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>

                <p className="mt-1 text-sm text-gray-600">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="current_password" value="Current Password" />
                    <div className='relative'>

                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type={show1 ? "" : "password"}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />
                        <div className='!absolute !-translate-y-2/4 !m-0 !top-2/4 right-3 cursor-pointer' onClick={() => { setShow1(!show1) }}>
                            {
                                show1 ? (
                                    <EyeSlashIcon className='w-6 h-6' />
                                ) : (
                                    <EyeIcon className='w-6 h-6' />
                                )
                            }
                        </div>
                    </div>

                    <InputError message={errors.current_password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="New Password" />
                    <div className='relative'>
                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type={show2 ? "" : "password"}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                        />
                        <div className='!absolute !-translate-y-2/4 !m-0 !top-2/4 right-3 cursor-pointer' onClick={() => { setShow2(!show2) }}>
                            {
                                show2 ? (
                                    <EyeSlashIcon className='w-6 h-6' />
                                ) : (
                                    <EyeIcon className='w-6 h-6' />
                                )
                            }
                        </div>
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <div className='relative'>
                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            type={show3 ? "" : "password"}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                        />
                        <div className='!absolute !-translate-y-2/4 !m-0 !top-2/4 right-3 cursor-pointer' onClick={() => { setShow3(!show3) }}>
                            {
                                show3 ? (
                                    <EyeSlashIcon className='w-6 h-6' />
                                ) : (
                                    <EyeIcon className='w-6 h-6' />
                                )
                            }
                        </div>
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
