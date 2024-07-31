import React from 'react'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import Layout from '@/Layouts/Layout'
import { Head, useForm } from '@inertiajs/react'
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky'
import { DocumentIcon } from '@heroicons/react/24/outline'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function ClassRecord({ auth }) {

    const { data, setData, post, errors } = useForm({
        classrecord: ''
    });

    const submit = () => {
        // post(route('classrecord.store'));
        console.log(data)
    }

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
            icon={<DocumentIcon className='w-9 h-9 text-gray-500' />}
            headerTitle="Class Record"
            headerSubtitle='Files'
            openDropdown={true}>
            <Head title='Files' />
            <CardsWithSticky
                contentSize='!w-8/12'
                stickySize='!w-4/12'
                cards={
                    <SingleCardWithHeader
                        header="Class Record"
                        body={
                            <div className='h-96'>
                            </div>
                        }
                    />
                }
                stickyNavHeader="Upload a File"
                stickyNavBody={
                    <div className='h-36 relative '>
                        <form 
                        // onSubmit={submit}
                        >
                            <div className='mb-3'>

                                <TextInput
                                    id="classrecord"
                                    type="file"
                                    name="classrecord"
                                    value={data.classrecord}
                                    placeholder="upload classrecord"
                                    autoComplete="classrecord"
                                    onChange={(e) => setData('classrecord', e.target.value)}
                                />

                                <InputError message={errors.classrecord} className="mt-2" />
                            </div>

                            <button className="btn btn-primary !absolute !-translate-x-2/4 !left-2/4 bottom-0" type="button" onClick={submit}>Upload</button>
                        </form>
                    </div>
                }
            />
        </Layout >
    )
}
