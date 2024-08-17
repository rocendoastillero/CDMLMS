import OverlapHeader from "@/Components/CDMLMS/OverlapHeader";
import Layout from "@/Layouts/Layout";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Tests({ auth, test }) {

    const [sample, setSample] = useState(
        [
            {
                id: 1,
                question: 'What is',
                choices: [
                    { choice: 'A' },
                    { choice: 'B' },
                    { choice: 'C' }
                ],
                answer_key: 2
            }
        ]
    );

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

                <CardsRow
                    card1={
                        <>
                            <CardsCenter
                                title="asdlaosd"
                                body="askdaskdaosdoaskdoaksodkoak"
                            />
                        </>
                    }

                    card2={
                        <>
                            <CardsWithHeader
                                header="asdasmdoasmdoasd"
                                body={
                                    <div className="mt-4">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolore quibusdam dicta alias a. Ex minus velit natus voluptatum nam, molestiae, ut quisquam, excepturi aperiam iste nostrum maxime dolor totam.
                                    </div>
                                }
                            />
                        </>
                    }

                />

            </OverlapHeader>

        </Layout>
    );
}

