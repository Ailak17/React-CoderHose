import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({lista}) => {  
  const [count, setCount] = useState(1) 
  const handleClick = () => {
    console.log(count)
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
        <Link to={'/cart'} onClick= {handleClick} className='links'>Ir Al carrito</Link>
  </div>)
};
export default ItemDetail;