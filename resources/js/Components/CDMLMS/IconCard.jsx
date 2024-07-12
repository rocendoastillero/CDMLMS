import React from 'react'
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

/** TODOOOOOOO
 * @function Component Card with Icon 
 * @param  icon Icon of Card
 * @param  title  Title of Card
 * @param  body  Body of Card
 * @param  className CHANGE THIS
 * @param  editAction CHANGE THIS
 * @param  deleteAction CHANGE THIS
 * @param  PUT_THESE_IN_ONE_PROP
 * @returns HTML
 */
function IconCard({ icon = null, title, body, className = 'bg-sky-800', editAction, deleteAction, active ,setWarning}) {

    
    return (
        <div className={`card card-icon mb-4 lift !border-0 relative ${active ? "!translate-y-[-0.4444444rem] !shadow-[0_1.5rem_3rem_0_rgba(33,40,50,1)]" : ""}`} >
            <div className='absolute top-0 right-0 mr-3 mt-2 flex flex-row pt-2 pr-1'>
                <div className={`rounded-[50%] h-10 w-10 bg-sky-500 flex place-content-center items-center mx-1 hover:!bg-sky-700  ${active ? "!bg-sky-300 " : ""}`} onClick={editAction} >
                    <PencilIcon className={`h-5 w-5 !text-white hover:!text-white ${active ? " !text-gray-600" : ""}`} />
                </div>
                <div className='rounded-[50%] h-10 w-10 bg-red-500 flex place-content-center items-center mx-1 hover:!bg-red-700' onClick={deleteAction}>
                    <TrashIcon class="h-5 w-5  text-white"  />
                </div>

            </div>
            <div className="row g-0 ">
                <div className={`col-auto card-icon-aside ` + className} >
                    {icon}
                </div>
                <div className="col">
                    <div className={`card-body py-5 ${setWarning ? " !bg-gray-300":""}`} onClick={editAction}>
                        <h5 className="card-title ">
                            {title}
                        </h5>
                        <p className="card-text">
                            {body}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconCard