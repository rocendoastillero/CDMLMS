import React from 'react'

/**
 * @function Component Container of cards with Sticky Nav
 * 
 * @param  cards Cards children 
 * @param withCard show Card of Sticky 
 * @param  stickyNavHeader Header of Sticky Nav
 * @param stickyNavBody Body of Sticky Nav
 * @param stickySize tailwind for the width of Sticky column
 * @param contentSize tailwind for the width of Cards column
 * @returns HTML
 */
function CardsWithSticky({ cards,stickyNavHeader, stickyNavBody, withCard = true, stickySize = '', contentSize = '' }) {
    return (
        <div className="row">
            <div className={`col-lg-9 ${contentSize}`}>
                {cards}

            </div>
            <div className={`col-lg-3 ${stickySize}`}>
                {
                    withCard ? (
                        <div className="nav-sticky">
                            <div className="card mb-4">
                                <div className="card-header">
                                    {stickyNavHeader}
                                </div>
                                <div className="card-body relative">
                                    {stickyNavBody}
                                </div>
                            </div>
                        </div>
                    ) : (
                        stickyNavBody
                    )
                }
            </div>
        </div>
    )
}

export default CardsWithSticky