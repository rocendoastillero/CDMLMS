import Layout from "@/Layouts/Layout";
import CardsRow from "@/Components/CDMLMS/CardsRow";
import CardsWithHeader from "@/Components/CDMLMS/CardsWithHeader";
import { Head } from "@inertiajs/react";
import CardsCenter from "@/Components/CDMLMS/CardsCenter";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function Dashboard({ auth }) {

    const [dropdown, setDropDown] = useState(false);

    return (
        <Layout
            user={auth.user}
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity text-gray-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>}
            headerTitle='Dashboard'
            headerSubtitle='The Dashboard'>
            <Head title='Dashboard' />

            <CardsRow
                card1={
                    <CardsCenter
                        title="Welcome to CDM LMS"
                        body="LMS for CDM Faculty"
                        image={
                            <img className="img-fluid !max-w-[20rem]" src="https://www.shutterstock.com/image-vector/teachers-concept-academics-school-education-600nw-1805637904.jpg" />
                        }

                    />
                }
                card2={
                    <CardsWithHeader
                        header="Disclosure"
                        body={
                            <Disclosure>
                                <DisclosureButton className="w-full justify-between py-2 flex flex-row" onClick={() => { setDropDown(!dropdown) }}>
                                    IMPORTANT
                                    {
                                        dropdown ? (
                                            <ChevronDownIcon className="h-6 w-6 text-gray-500" />

                                        ) : (
                                            <ChevronRightIcon className="h-6 w-6 text-gray-500" />
                                        )
                                    }
                                </DisclosureButton>
                                <DisclosurePanel className="text-gray-500">
                                    {`return Chirp::where('user_id', Auth::user()->id)->latest()->get();`}
                                </DisclosurePanel>
                            </Disclosure>
                        }
                    />
                }

            />
            <CardsRow
                card1=
                <CardsWithHeader
                    header="noun"
                    body={
                        <p>1.<br />
                            the panel facing the driver of a vehicle or the pilot of an aircraft, containing instruments and controls.<br />
                            "Scott looked at the clock on the dashboard"

                        </p>
                    }
                />
                card2=
                <CardsWithHeader
                    header="Historical"
                    body={
                        <p>2.<br />
                            a board of wood or leather in front of a carriage, to keep out mud.</p>
                    }
                />

            />
        </Layout>
    );
}

