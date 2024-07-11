import React from 'react'

function CardsRow({card1, card2}) {
    return (
        <div className="row">
            {card1}
            {card2}
        </div>
    )
}

export default CardsRow