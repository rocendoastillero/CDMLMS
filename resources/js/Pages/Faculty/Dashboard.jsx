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
export default function Dashboard({  auth }) {

    const [dropdown, setDropDown] = useState(false);

    return (
        <Layout
            isAdmin={auth.isAdmin}
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
                        header="Announcements"
                        body={
                            <div>
                            </div>
                        }
                    />
                }

            />
            <CardsRow
                card1={
                    <CardsWithHeader
                        header="Schedule"
                        body={
                            <div>

                            </div>
                        }
                    />
                }
                card2={
                    <CardsWithHeader
                        header="Historical"
                        body={
                            <div>

                            </div>
                        }
                    />
                }
            />
        </Layout>
    );
}

