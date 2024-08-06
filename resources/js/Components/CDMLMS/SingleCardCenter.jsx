import React from 'react'

/**
 * @function Component Single Card with no header
 * 
 * @param title Card Title 
 * @param body Card Body
 * @param bodyPadding Card Body Padding in tailwind
 * @param table Card Table
 * @param button Card Buttons top Right
 * @returns HTML
 */
function SingleCardCenter({ title, body, bodyPadding = 'p-5', table, button }) {
    return (
        <div className='card mb-4 relative'>
            <div className='absolute top-0 right-0'>
                {button}
            </div>
            <div className={`card-body ${bodyPadding}`}>
                <div className="col-xl-8 col-xxl-12">
                    <div className="text-center text-xl-start text-xxl-center mb-4 mb-xl-0 mb-xxl-4 ">
                        <h1 className="text-primary">{title}</h1>
                        <p className="text-gray-700 mb-0">{body}</p>
                    </div>
                </div>
                {table}
            </div>
        </div>
    )
}

export default SingleCardCenter