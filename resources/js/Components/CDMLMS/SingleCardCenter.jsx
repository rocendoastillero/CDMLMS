import React from 'react'

function SingleCardCenter({ title, body}) {
    return (

        <div className={`card mb-4`}>
            <div className={`card-body p-5`}>
                <div className="col-xl-8 col-xxl-12">
                    <div className="text-center text-xl-start text-xxl-center mb-4 mb-xl-0 mb-xxl-4">
                        <h1 className="text-primary">{title}</h1>
                        <p className="text-gray-700 mb-0">{body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCardCenter