import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Layout from "@/Layouts/Layout";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Head, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Schedules({ auth }) {

    const { data, setData, post, patch, errors, processing, reset } = useForm({
        start: '',
        end: '',
        day: 'Mon',
        course: 'BSCPE',
        yrsec: '1A',
        type: 'Lec',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('schedules.store'), {onSuccess : () => reset()});
    };

    useEffect((()=>{
        console.log(errors);
    }),[]);

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
            icon={<CalendarDaysIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Schedule'
            headerSubtitle='view Schedule'
        >
            <Head title="Schedules" />

            <SingleCardWithHeader
                header="Create Schedule"
                body={
                    <div className="mt-3">
                        <form onSubmit={submit}>
                            <div className="flex gap-3">
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
                                <div className="mb-3">
                                    <InputLabel value="Day" />
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button className="form-control">
                                                {data.day}
                                            </button>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content margin="mt-0" width="w-full">
                                            <div className="flex flex-col gap-1 text-center">
                                                <button onClick={() => { setData('day', 'Mon') }}> Mon</button>
                                                <button onClick={() => { setData('day', 'Tue') }}> Tue</button>
                                                <button onClick={() => { setData('day', 'Wed') }}> Wed</button>
                                                <button onClick={() => { setData('day', 'Thu') }}> Thu</button>
                                                <button onClick={() => { setData('day', 'Fri') }}> Fri</button>
                                                <button onClick={() => { setData('day', 'Sat') }}> Sat</button>
                                                <button onClick={() => { setData('day', 'Sun') }}> Sun</button>
                                            </div>
                                        </Dropdown.Content>
                                    </Dropdown>

                                </div>
                                <div>
                                    <InputLabel value="Course" />
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button className="form-control">
                                                {data.course}
                                            </button>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content margin="mt-0" width="w-full">
                                            <div className="flex flex-col gap-1 text-center">
                                                <button onClick={() => { setData('course', 'CPE') }}>CPE</button>
                                                <button onClick={() => { setData('course', 'IT') }}>IT</button>
                                            </div>
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
                                    <InputError message={errors.yrsec}/>
                                </div>
                            </div>
                            <PrimaryButton disabled={processing}>
                                Create
                            </PrimaryButton>
                        </form>
                    </div>
                }
            />
        </Layout>
    );
}