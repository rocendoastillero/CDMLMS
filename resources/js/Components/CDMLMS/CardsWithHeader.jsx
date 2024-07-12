import React from 'react'

/**
 * @function Component child for <CardsRow/> 
 * Card with header
 * @param  header Header 
 * @param  body header Body
 * @returns HTML
 */
function CardsWithHeader({ header, body }) {
  return (
    <div className="col-xxl-6 col-xl-12 mb-4">
      <div className="card card-header-actions h-100">
        <div className="card-header">
          {header}
        </div>
        <div className="card-body">
          {body}
        </div>
      </div>
    </div>


  )
}

export default CardsWithHeader