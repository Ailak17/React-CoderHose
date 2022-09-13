import React, { useState } from 'react'
import './style.css'

const ItemCount = ({stock, initial}) => {
    const [items, setItems] = useState(initial);
    
    const suma = () => stock > items && stock ? setItems(items + 1) : alert ('Superas el stock')
    const resta = () => items > initial && stock ? setItems(items - 1) : alert ('No se puede estar en 0')

  return (
    <div className='contador'>

        <div className='contadorB'>
            <button onClick={resta} d-inline-flex>-</button>
            <h3>{items}</h3>
            <button onClick={suma}>+</button>
        </div>
        <button className='aac'>Agregar al carrito</button>     
    </div>
  )
}

export default ItemCount