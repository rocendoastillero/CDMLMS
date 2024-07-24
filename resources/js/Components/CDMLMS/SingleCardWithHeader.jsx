import React from 'react'


/**
 * @function Component Single Card with header
 * 
 * @param title Header Title 
 * @param subtitle Sub Title
 * @param body Card Body
 * @param button Card button(s)
 * @returns HTML
 */
function SingleCardWithHeader({ header, subtitle = '', body, button, alert }) {
  return (
    <div className="card mb-4 relative">
      {
        alert && (
          <div className='absolute w-full h-full bg-black opacity-45 '>

          </div>
        )
      }

      <div className="card-header relative">
        {header}
        <div className='absolute -translate-y-2/4 top-2/4 right-0 flex flex-row place-content-center'>
          {button}
        </div>
      </div>
      <div className="card-body px-4 pt-0 !pb-4 flex flex-col">
        {
          (subtitle == '') ? (
            <>
              {body}
            </>
          ) : (
            <>
              <div className='mb-3 mt-2 text-[1rem] font-semibold'>
                {subtitle}
              </div>
              {body}
            </>
          )
        }
      </div>
    </div>
  )
}

export default SingleCardWithHeader