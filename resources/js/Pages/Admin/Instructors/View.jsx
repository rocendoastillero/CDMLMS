import CompactHeader from "@/Components/CDMLMS/CompactHeader";
import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import Layout from "@/Layouts/Layout";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";

export default function View({ auth, instructor }) {
    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
        >
            <Head title={instructor.lastname} />
            <CompactHeader
                title={`${instructor.firstname} ${instructor.lastname}`}
                icon={<UserCircleIcon className="w-6 h-6" />}
                buttons={
                    <>
                        <Link
                            className="btn btn-sm btn-light text-primary"
                            as="button"
                        >
                            Accomplishment Reports
                        </Link>
                        <Link
                            className="btn btn-sm btn-light text-primary"
                            as="button"
                        >
                            Subjects
                        </Link>
                        <Link
                            className="btn btn-sm btn-light text-primary"
                            as="button"
                        >
                            Files
                        </Link>
                    </>
                }
            >
                <SingleCardWithHeader />
            </CompactHeader>
        </Layout>
    )
}