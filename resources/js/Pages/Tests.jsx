import PageHeader from "@/Components/CDMLMS/PageHeader";
import TestLayout from "@/Layouts/TestLayout";
import { Head } from "@inertiajs/react";

export default function Tests({ auth }) {

    return (
        <TestLayout>
            <Head title="Test" />
            <main>
                <PageHeader
                    title='Test'
                    subtitle='Test'
                />
                <div className="container-xl px-4">

                </div>
            </main>
        </TestLayout>
    );
}

