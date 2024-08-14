import AlertCard from "@/Components/CDMLMS/AlertCard";
import CardsWithSticky from "@/Components/CDMLMS/CardsWithSticky";
import IconCard from "@/Components/CDMLMS/IconCard";
import OverlapHeader from "@/Components/CDMLMS/OverlapHeader";
import SingleCardCenter from "@/Components/CDMLMS/SingleCardCenter";
import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import Dropdown from "@/Components/Dropdown";
import Layout from "@/Layouts/Layout";
import { CheckIcon, ChevronDownIcon, CodeBracketIcon, ExclamationTriangleIcon, HomeIcon, MagnifyingGlassIcon, MagnifyingGlassMinusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";

export default function Tests({ auth, test }) {

    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
        >
            <Head title="Test" />
            <OverlapHeader
                icon={<HomeIcon className="w-9 h-9" />}
                title="Dropdown"
                subtitle="Test"

            >

                <SingleCardWithHeader
                    header="Dropdown"
                    body={
                        <div className="flex flex-row mt-3">
                            <div className="flex w-1/3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="form-control !flex gap-2">
                                            Dropdown 1
                                            <ChevronDownIcon className=" text-gray-600 w-6 h-6" />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content contentClasses="flex flex-col gap-3 text-center" margin="mt-0">
                                        <div>Item 1</div>
                                        <div>Item 2</div>
                                        <div>Item 3</div>
                                        <div>Item 4</div>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                            <div className="flex w-1/3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="form-control !flex gap-2">
                                            Dropdown 2
                                            <ChevronDownIcon className=" text-gray-600 w-6 h-6" />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content contentClasses="flex flex-col gap-3 text-center" margin="mt-0">
                                        <div>Item 1</div>
                                        <div>Item 2</div>
                                        <div>Item 3</div>
                                        <div>Item 4</div>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    }
                />

            </OverlapHeader>

        </Layout>
    );
}

