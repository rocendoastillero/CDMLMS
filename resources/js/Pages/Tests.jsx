import CompactHeader from "@/Components/CDMLMS/CompactHeader";
import OverlapHeader from "@/Components/CDMLMS/OverlapHeader";
import TestLayout from "@/Layouts/TestLayout";
import { Head } from "@inertiajs/react";

export default function Tests({ auth }) {

    return (
        <TestLayout>
            <Head title="Test" />
            <CompactHeader
                title='Test'
                subtitle='Test'
            >

            </CompactHeader>
        </TestLayout>
    );
}

