import React from 'react'
import Layout from '@/Layouts/Layout'
import CardsRow from '@/Components/CDMLMS/CardsRow';
import CardsWithHeader from '@/Components/CDMLMS/CardsWithHeader';
import { Headers } from "@/utils/headers"
import { Head } from '@inertiajs/react';

const headers = Headers('w-9 w-9');

/**
 * @function Page
 * 
 * @param  auth The Authentication 
 * @returns Page
 */
export default function People({ auth }) {
    return (
        <Layout user={auth.user} icon={headers[3].icon} headerTitle={headers[3].title} headerSubtitle={headers[3].subTitle}>
        <Head title={headers[3].title}/>
            <CardsRow
                card1=
                <CardsWithHeader
                    header="noun"
                    body={
                        <p>1.
                            human beings in general or considered collectively.<br />
                            "the earthquake killed 30,000 people"<br />
                            2.
                            the men, women, and children of a particular nation, community, or ethnic group.<br />
                            "the native peoples of Canada"
                        </p>
                    }
                />
                card2=
                <CardsWithHeader
                    header="verb"
                    body={
                        <p>(of a group of people) inhabit (a place).<br />
                            "an arid mountain region peopled by warring clans"
                        </p>
                    }
                />
            />
        </Layout>
    );
}
 