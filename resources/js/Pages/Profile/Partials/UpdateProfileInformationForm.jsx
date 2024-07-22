import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
    });



    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">

                <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                        <InputLabel htmlFor="firstname" value="First Name" />

                        <TextInput
                            id="firstname"
                            className="mt-1 block w-full"
                            value={data.firstname}
                            onChange={(e) => setData('firstname', e.target.value)}
                            required
                            isFocused
                            autoComplete="firstname"
                        />
                        <InputError className="mt-2" message={errors.firstname} />
                    </div>
                    <div className="col-md-6">
                        <InputLabel htmlFor="lastname" value="Last Name" />

                        <TextInput
                            id="lastname"
                            className="mt-1 block w-full"
                            value={data.lastname}
                            onChange={(e) => setData('lastname', e.target.value)}
                            required
                            autoComplete="lastname"
                        />
                        <InputError className="mt-2" message={errors.lastname} />
                    </div>
                </div>
                <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={user.email}
                            disabled={true}
                        />

                    </div>
                    <div className="col-md-6">
                        <InputLabel htmlFor="phone" value="Phone Number" />

                        <TextInput
                            id="phone"
                            className="mt-1 block w-full"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            required
                            autoComplete="phone"
                        />
                        <InputError className="mt-2" message={errors.phone} />

                    </div>
                </div>


                <div>


                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

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
