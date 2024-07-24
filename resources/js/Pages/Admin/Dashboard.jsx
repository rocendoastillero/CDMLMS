import Layout from '@/Layouts/Layout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Dashboard({ auth }) {
  return (
    <Layout
      isAdmin={auth.isAdmin}
      user={auth.user}
      icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity text-gray-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>}
      headerTitle="Dashboard"
      headerSubtitle="Admin Dashboard"
    >
      <Head title='Admin Dashboard' />
      aaaaaaa
    </Layout>
  )
}
