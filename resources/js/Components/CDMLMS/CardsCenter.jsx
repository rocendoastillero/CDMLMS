import React from 'react'

/**
 * @function Component a Card child for <CardsRow/> 
 * Card with centered contents
 * @param {*} title Header
 * @param {*} body Card Body
 * @param {*} image Image Content 
 * @returns HTML
 */
function CardsCenter({ title, body, bodyPadding , image = null}) {
    return (
        <div className="col-xxl-6 col-xl-12 mb-4">
            <div className={`card`}>
                <div className={`card-body p-5 ${bodyPadding}`}>
                    <div className="col-xl-8 col-xxl-12">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-xxl-12">
                                <div className="text-center text-xl-start text-xxl-center mb-4 mb-xl-0 mb-xxl-4">
                                    <h1 className="text-primary">{title}</h1>
                                    <p className="text-gray-700 mb-0">{body}</p>                                
                                    </div>
                            </div>
                            <div className="col-xl-4 col-xxl-12 flex place-content-center">
                                {image}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsCenter