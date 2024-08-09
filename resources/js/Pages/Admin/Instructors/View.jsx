import CompactHeader from "@/Components/CDMLMS/CompactHeader";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function View({ auth, instructor }) {
    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
        >
            <Head title={instructor.lastname} />
            <CompactHeader
                title={`${instructor.firstname} ${instructor.lastname}`}
            >
                
            </CompactHeader>
        </Layout>
    )
}