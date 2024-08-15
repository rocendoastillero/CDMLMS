import { Link } from "@inertiajs/react"
import React, { useEffect, useRef } from 'react'

export default function PageNav({ links }) {

    const currPage = useRef(0);

    useEffect(() => { }, [
        links.map(
            (link, index) => {
                if (link.active) {
                    currPage.current = index;
                }
            }
        )
    ])

    return (
        <>
            {
                links.map(
                    (link, index) => {
                        if (index == 0 || index == links.length - 1) {
                            return (
                                <Link
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: index == 0 ? "&laquo;" : "&raquo;" }}
                                    className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                    href={link.url}
                                    as='button'
                                    preserveScroll={true}
                                    disabled={link.url == null}
                                />
                            )
                        } else if ((((index - currPage.current) < 3) && (index > currPage.current)) || (((currPage.current - index) < 3) && (index < currPage.current)) || link.active) {
                            return (
                                <Link
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                    className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                    href={link.url}
                                    as='button'
                                    preserveScroll={true}
                                    disabled={link.url == null}
                                />
                            )
                        } else if ((((index - currPage.current) == 3) && (index > currPage.current)) || (((currPage.current - index) == 3) && (index < currPage.current))) {
                            return (
                                <div key={index} className='pt-1'>
                                    ...
                                </div>
                            )
                        }
                    }
                )
            }
        </>
    );
}