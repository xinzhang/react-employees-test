import React from 'react';
import '../../styles/Grid.css'

function Grid() {
  return (
    <div>
      { 
        for (let i=0; i<=15; i++) {
          <Card />
        }        
      }
    </div>
  )
}

export default Grid;