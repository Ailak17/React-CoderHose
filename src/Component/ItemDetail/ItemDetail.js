import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({lista}) => {  
  const [count, setCount] = useState(1) 
  const {addToCard} = useContext(CartContext)
  function onAdd (lista)  {
    addToCard (lista, count)
  }
  return (
    <div className='cardi2'>
        <div className="cardi1">
            <h2 className='titulo'>{lista.titulo}</h2>
            <img className='imagen' width={'200px'} src= {lista.imagen} alt={lista.titulo}/>
            <h4 className='detalle'>{lista.detalle}</h4>
            <h3 className='precio'>Precio $ {lista.precio}</h3>
        </div>
        <ItemCount stock= {lista.stock} setCount = {setCount} count= {count} />
        <button onClick= {() => onAdd(lista)} className='links'>Agragar al carrito</button>
  </div>)
};
export default ItemDetail;