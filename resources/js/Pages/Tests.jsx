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
                <button onClick={() => setSample(sample + 1)}>
                    click
                </button>

                {
                    sample.map((question) => {
                        return (
                            <div key={question.id} className="w-full bg-slate-400 my-2">
                                <h1>{question.question}</h1>
                                <ul>
                                    {
                                        question.choices.map(choice =>
                                            <li>
                                                {choice.choice}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }
                    )
                }

            </OverlapHeader>

        </Layout>
    );
}

