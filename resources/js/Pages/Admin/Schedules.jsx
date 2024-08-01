import Layout from "@/Layouts/Layout";

export default function Schedules({ auth }) {
    return (
        <Layout
            user={auth.user}
            isAdmin={auth.isAdmin}
            icon={<CalendarDaysIcon className='w-9 h-9 text-gray-500' />}
            headerTitle='Schedule'
            headerSubtitle='view Schedule'
        >
            
        </Layout>
    );
}