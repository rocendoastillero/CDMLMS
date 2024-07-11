import React from 'react'

function CardsWithSticky({ cards, stickyNav, withCard = true, stickySize = '', contentSize = '' }) {
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
                                <div className="card-header">Subject Details</div>
                                <div className="card-body">
                                    {stickyNav}
                                </div>
                            </div>
                        </div>
                    ) : (
                        stickyNav
                    )
                }
            </div>
        </div>
    )
}

export default CardsWithSticky