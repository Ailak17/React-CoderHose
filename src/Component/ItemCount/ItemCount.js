import React, { useState } from 'react'
import './style.css'

const ItemCount = ({setCount, count, stock}) => {
  const onAdd = () => {
    if (count === stock){
      return;
    }
    setCount(count + 1 )
  };
  const onRemove = () => {
    if (count === 1){
      return;
    }
    setCount(count - 1 )
  };
  return(
    <div className='contador'>
        
        <div className='contadorB'>
            
            <button onClick={onRemove} >-</button>
            <h3>{count}</h3>
            <button onClick={onAdd}>+</button>
        </div>
        <h3 className='stocki'>Stock disponible: {stock}</h3>
    </div>
  )


}
export default ItemCount;