import React from 'react'

/**
 * @function Component a centered Alert Card with abosolute position
 *
 *  
 * @param  icon Icon
 * @param  title Header
 * @param  message Message
 * @param  type Alert-warning, Alert-info, Alert-success
 * @param  actions Action buttons
 * @returns HTML 
 */
export default function AlertCard({ icon, title, message, type= '', actions }) {
    return (
        <div className={`alert ${type} alert-icon !absolute right-!-translate-x-2/4 !-translate-y-2/4 !m-0 !left-2/4 !top-2/4 !max-w-[40%] z-[1]`}>
            <div className='flex flex-row absolute top-0 right-0  mt-[9px] mr-2 border-none'>
                {actions}
            </div>
            <div className="alert-icon-aside">
                {icon}
            </div>
            <div className="alert-icon-content">
                <h6 className="alert-heading border-none">
                    {title}
                </h6>
                {message}
            </div>
        </div>
    )
}
