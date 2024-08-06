import SingleCardWithHeader from '@/Components/CDMLMS/SingleCardWithHeader';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useForm, usePage } from '@inertiajs/react';
import React from 'react'

export default function Create() {

    const { data, setData, post, patch, errors, processing, reset } = useForm({
        subject: usePage().props.subject,
        start: '',
        end: '',
        day: 'Mon',
        room: '204',
        yrsec: '1A',
        type: 'Lec',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('schedules.store'), { onSuccess: () => reset() });
        console.log(errors);
    };

    return (
        <SingleCardWithHeader
            header='Create Schedule'
            body={
                <div className="mt-3">
                    <form onSubmit={submit}>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row gap-3">
                                <div className="mb-3">
                                    <InputLabel value="Day" />
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <div className="form-control !flex !flex-row !justify-between items-center gap-3 !pr-2">
                                                <div className=''>
                                                    {data.day}
                                                </div>
                                                <ChevronDownIcon className='w-5 h-5' />
                                            </div>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content contentClasses="flex flex-col gap-1 text-center cursor-pointer" margin="mt-0" width="w-full">
                                            <div className='hover:bg-green-50' onClick={() => { setData('day', 'Mon') }}> Mon</div>
                                            <div className='hover:bg-green-50' onClick={() => { setData('day', 'Tue') }}> Tue</div>
                                            <div className='hover:bg-green-50' onClick={() => { setData('day', 'Wed') }}> Wed</div>
                                            <div className='hover:bg-green-50' onClick={() => { setData('day', 'Thu') }}> Thu</div>
                                            <div className='hover:bg-green-50' onClick={() => { setData('day', 'Fri') }}> Fri</div>
                                            <div className='hover:bg-green-50' onClick={() => { setData('day', 'Sat') }}> Sat</div>
                                            <div className='hover:bg-green-50' onClick={() => { setData('day', 'Sun') }}> Sun</div>
                                        </Dropdown.Content>
                                    </Dropdown>

                                </div>
                                <div>
                                    <InputLabel value="Year and Setion" />
                                    <TextInput
                                        id="yrsec"
                                        type="text"
                                        name="yrsec"
                                        value={data.yrsec}
                                        placeholder="1A"
                                        onChange={(e) => { setData('yrsec', e.target.value) }}
                                    />
                                    <InputError message={errors.yrsec} />
                                </div>
                                <div>
                                    <InputLabel value="Room" />
                                    <TextInput
                                        id="room"
                                        type="text"
                                        name="room"
                                        value={data.room}
                                        placeholder="1A"
                                        onChange={(e) => { setData('room', e.target.value) }}
                                    />
                                    <InputError message={errors.room} />
                                </div>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="mb-3">
                                    <InputLabel value="Start" />
                                    <TextInput
                                        id="start"
                                        type="time"
                                        name="start"
                                        value={data.start}
                                        onChange={(e) => { setData('start', e.target.value) }}
                                    />
                                    <InputError message={errors.start} />
                                </div>
                                <div className="mb-3">
                                    <InputLabel value="End" />
                                    <TextInput
                                        id="end"
                                        type="time"
                                        name="end"
                                        value={data.end}
                                        onChange={(e) => { setData('end', e.target.value) }}
                                    />
                                    <InputError message={errors.end} />
                                </div>
                            </div>
                        </div>
                        <PrimaryButton disabled={processing}>
                            Create
                        </PrimaryButton>

                    </form>
                </div>

            }
        />
    )
}
