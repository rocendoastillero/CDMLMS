import React from 'react'
import PageNav from './PageNav'

export default function Table({ paginated, margin = 'mt-3', tableStyle, headerStyle = 'card-header', headers, headersCount, body }) {
    return (
        <>
            <div className={`table-responsive ${margin}`}>
                <table className={`datatable-table text-center ${tableStyle}`}>
                    <thead>
                        <tr className={headerStyle}>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginated.data == '' ? (
                                <tr>
                                    <td colSpan={headersCount}>
                                        Empty
                                    </td>
                                </tr>
                            ) : (
                                body
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    Page: {paginated.current_page}
                </div>
                <div className='flex flex-row'>
                    <PageNav
                        links={paginated.links}
                    />
                </div>
            </div>
        </>
    )
}
