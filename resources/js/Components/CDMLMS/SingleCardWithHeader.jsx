import React from 'react'

function SingleCardWithHeader({ header, subtitle = '', body, button }) {
  return (
    <div className="card mb-4 relative">
      <div className='absolute top-0 right-0 mt-2 mr-2'>
        {button}
      </div>
      <div className="card-header">
        {header}
      </div>
      <div className="card-body px-4 pt-0 !pb-4 relative flex flex-col">
        {
          (subtitle == '') ? (
            <div className='mt-4'>
              {body}
            </div>
          ) : (
            <>
              <div className='mb-3 mt-2 text-[1rem] font-semibold'>
                {subtitle}
              </div>
              <div>
                {body}
              </div>
            </>
          )
        }

      </div>
    </div>
  )
}

export default SingleCardWithHeader