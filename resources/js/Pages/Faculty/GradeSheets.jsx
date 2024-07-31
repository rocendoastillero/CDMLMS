import React from 'react'
import Layout from '@/Layouts/Layout'
import { Head, useForm } from '@inertiajs/react'
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky'
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader'
import { DocumentIcon } from '@heroicons/react/24/outline'
import InputError from '@/Components/InputError'
import TextInput from '@/Components/TextInput'


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function GradeSheets({ auth }) {

    const { data, setData, post, errors } = useForm({
        gradesheet: ''
    });

    const submit = () => {
        // post(route('gradesheet.store'));
        console.log(data)
    }

    return (
        <Layout
            isAdmin={auth.isAdmin}
            user={auth.user}
            icon={<DocumentIcon className='w-9 h-9 text-gray-500' />}
            headerTitle="Grade Sheets"
            headerSubtitle='Files'
            openDropdown={true}>
            <Head title='Files' />
            <CardsWithSticky
                contentSize='!w-8/12'
                stickySize='!w-4/12'
                cards={
                    <SingleCardWithHeader
                        header="Grade Sheets"
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
                                    id="gradesheet"
                                    type="file"
                                    name="gradesheet"
                                    value={data.gradesheet}
                                    placeholder="upload gradesheet"
                                    autoComplete="gradesheet"
                                    onChange={(e) => setData('gradesheet', e.target.value)}
                                />

                                <InputError message={errors.gradesheet} className="mt-2" />
                            </div>

                            <button className="btn btn-primary !absolute !-translate-x-2/4 !left-2/4 bottom-0" type="button" onClick={submit}>Upload</button>
                        </form>
                    </div>
                }
            />

        </Layout>
    )
}
