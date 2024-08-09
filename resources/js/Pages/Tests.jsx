import OverlapHeader from "@/Components/CDMLMS/OverlapHeader";
import SingleCardWithHeader from "@/Components/CDMLMS/SingleCardWithHeader";
import TestLayout from "@/Layouts/TestLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function Tests({ auth, test }) {

    const testRef = useRef([]);

    // useEffect((() => {
    //     testRef.current = testRef.current.splice(0, test.length);
    // }),[]);

    // useEffect(() => {
    //     console.log(test);
    // }, [])

    return (
        <TestLayout>
            <Head title="Test" />
            <OverlapHeader
                title='Test'
                subtitle='Test'
            >
                <div className="relative w-full">
                    <div className="absolute bottom-[105%] flex flow-row gap-4 mb-10">
                        {
                            test.map((t, index) =>
                                <button onClick={() => testRef.current[index].scrollIntoView({
                                    behavior: 'auto',
                                    block: 'center',
                                    inline: 'center'
                                })}>
                                    {t.a}
                                </button>
                            )
                        }
                    </div>
                </div>
                {
                    test.map((t, index) =>
                        <>
                            <div className="mt-20" />
                            <SingleCardWithHeader
                                header={t.a}
                                body={
                                    <div className="flex flex-col gap-1">
                                        {t.b}
                                        <div
                                            key={index}
                                            ref={el => testRef.current[index] = el}
                                        />

                                    </div>
                                }
                            />
                        </>
                    )
                }
            </OverlapHeader>
        </TestLayout>
    );
}

