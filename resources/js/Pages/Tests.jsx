import { useState } from 'react'
import Layout from '@/Layouts/Layout';
import { useForm } from '@inertiajs/react';
import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';

export default function Tests({ auth }) {

    const [editing, setEditing] = useState(false);


    const empty = {
        id: '',
        title: '',
        subTitle: '',
        body: '',
    };

    const [selectedReport, setSelectedReport] = useState({
        id: '',
        title: '',
        subTitle: '',
        body: '',
    });

    const { data, setData, post, patch, errors, hasErrors, processing, reset, recentlySuccessful } = useForm({
        id: '',
        title: '',
        subtitle: '',
        body: ''
    });

    const submit = (e) => {
        e.preventDefault();
        if (editing) {
            console.log(data.id);
            patch(route('dummy.update', data.id), { onSuccess: () => reset() });
        } else {
            console.log('creating');
            post(route('dummy.store'), { onSuccess: () => reset() });
            console.log(errors)
            setView(1);
        }
    };

    return (
        <Layout user={auth.user} icon={null} headerTitle="Test" headerSubtitle="Test" >
            <SingleCardWithHeader
                header=
                {
                    editing ? (
                        "Edit Report"
                    ) : (
                        "Create Report"
                    )
                }
                body={
                    <form className='p-3' onSubmit={submit}>
                        {hasErrors}
                        <div className="mb-4">
                            <input className="form-control !rounded-none !border-0 !border-b-2 !text-lg focus:!border-black focus:!ring-0 !w-2/3" id="inputTitle" type="text" placeholder="Title" value={data.title} onChange={(e) => { setData('title', e.target.value) }} />
                        </div>
                        {errors.title}
                        <div className="mb-4">
                            <input className="form-control !rounded-none !border-0 !border-b-2 !text-lg focus:!border-black focus:!ring-0 !w-1/3" id="inputSubtitle" type="text" placeholder="Subtitle" value={data.subtitle} onChange={(e) => { setData('subtitle', e.target.value) }} />
                        </div>
                        {errors.subtitle}
                        <div className='my-8'>
                            <textarea className='form-control !h-[22rem] !rounded-[4px] !border-1  focus:!border-black focus:!ring-0 !text-lg !leading-[150%]' placeholder='Body' value={data.body} onChange={(e) => { setData('body', e.target.value) }} />
                        </div>
                        {errors.body}
                        <button className="btn btn-primary" type="submit" disabled={processing}>
                            {
                                editing ? (
                                    "Edit"
                                ) : (
                                    "Add"
                                )
                            }
                        </button>
                    </form>
                }
            />


        </Layout>
    );
}

