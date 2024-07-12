import React from 'react'

/**
 * @function Component Container for <CardsCenter/>,<CardsWithHeader/> 
 * can only hold two cards
 * @param {*} card1 Card on the left side 
 * @param {*} card2 Card on the right side
 * @returns HTML
 */
function CardsRow({card1, card2}) {
    return (
        <div className="row">
            {card1}
            {card2}
        </div>
    )
}

export default CardsRow