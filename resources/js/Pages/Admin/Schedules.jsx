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

export default function Schedules({ auth, pageHeaderSubtitle = 'view Schedule' }) {

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
        post(route('schedules.store'), { onSuccess: () => reset() });
    };

    useEffect((() => {
        console.log(errors);
    }), []);

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
            icon={<CalendarDaysIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Schedule'
            headerSubtitle={pageHeaderSubtitle}
        >
            <Head title="Schedules" />

            <div className="relative w-full">
                <div className="absolute bottom-[105%] mb-1">

                </div>
            </div>

            <div className="flex flex-row gap-1 mt-2 text-white text-center">
                <div className="relative w-1/7 h-5">
                    Monday
                    <div className="absolute top-[105%] flex flex-col mt-2 h-10 w-full bg-white">

                    </div>
                </div>
                <div className="relative w-1/7 h-5">
                    Tuesday
                    <div className="absolute top-[105%] flex flex-col mt-2 h-10 w-full bg-white">

                    </div>
                </div>
                <div className="relative w-1/7 h-5">
                    Wednesday
                    <div className="absolute top-[105%] flex flex-col mt-2 h-10 w-full bg-white">

                    </div>
                </div>
                <div className="relative w-1/7 h-5">
                    Thursday
                    <div className="absolute top-[105%] flex flex-col mt-2 h-10 w-full bg-white">

                    </div>
                </div>
                <div className="relative w-1/7 h-5">
                    Friday
                    <div className="absolute top-[105%] flex flex-col mt-2 h-10 w-full bg-white">

                    </div>
                </div>
                <div className="relative w-1/7 h-5">
                    Saturday
                    <div className="absolute top-[105%] flex flex-col mt-2 h-10 w-full bg-white">

                    </div>
                </div>
                <div className="relative w-1/7 h-5">
                    Sunday
                    <div className="absolute top-[105%] flex flex-col mt-2 h-10 w-full bg-white">

                    </div>
                </div>
            </div>
            {/* <SingleCardWithHeader
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
                                            <div className="form-control">
                                                {data.day}
                                            </div>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content contentClasses="flex flex-col gap-1 text-center" margin="mt-0" width="w-full">
                                            <div onClick={() => { setData('day', 'Mon') }}> Mon</div>
                                            <div onClick={() => { setData('day', 'Tue') }}> Tue</div>
                                            <div onClick={() => { setData('day', 'Wed') }}> Wed</div>
                                            <div onClick={() => { setData('day', 'Thu') }}> Thu</div>
                                            <div onClick={() => { setData('day', 'Fri') }}> Fri</div>
                                            <div onClick={() => { setData('day', 'Sat') }}> Sat</div>
                                            <div onClick={() => { setData('day', 'Sun') }}> Sun</div>
                                        </Dropdown.Content>
                                    </Dropdown>

                                </div>
                                <div>
                                    <InputLabel value="Course" />
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <div className="form-control">
                                                {data.course}
                                            </div>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content contentClasses="flex flex-col gap-1 text-center" margin="mt-0" width="w-full">
                                            <div onClick={() => { setData('course', 'CPE') }}>CPE</div>
                                            <div onClick={() => { setData('course', 'IT') }}>IT</div>
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
                            </div>
                            <PrimaryButton disabled={processing}>
                                Create
                            </PrimaryButton>
                        </form>
                    </div>
                    
                }
            /> */}
        </Layout>
    );
}