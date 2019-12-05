import React from 'react';
import '../../styles/Grid.css'

function Grid() {  
  const createCards = (cardCount) => {
    const cards = [];
    // Outer loop to create parent
    for (let i = 0; i < cardCount; i++) {
      cards.push(<div className="card" />);
    }
    return cards;
  }

  return (
    <div>
      {createCards()}      
    </div>
  )
}

export default Grid;