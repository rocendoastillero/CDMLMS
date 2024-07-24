import React from 'react'


/** 
 * 
 * @function Component Card with Icon 
 * @param  icon Icon of Card
 * @param  title  Title of Card
 * @param  body  Body of Card
 * @param  iconColor Tailwind bg-color
 * @param  selectAction Funtion for when the card is clicked
 * @param  setWarning Boolean for a warning 
 * 
 * @returns HTML
 */
function IconCard({ icon = null, title, body, iconColor = 'bg-sky-800', button, active, selectAction, setWarning}) {

    
    return (
        <div className={`card card-icon mb-4 lift !border-0 relative ${active ? "!translate-y-[-0.4444444rem] !shadow-[0_1.5rem_3rem_0_rgba(33,40,50,1)]" : ""}`} >
            <div className='absolute top-0 right-0'>
                {button}
            </div>
            <div className="row g-0 ">
                <div className={`col-auto card-icon-aside ` + iconColor} >
                    {icon}
                </div>
                <div className="col">
                    <div className={`card-body py-5 ${setWarning ? " !bg-gray-300":""}`} onClick={selectAction}>
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