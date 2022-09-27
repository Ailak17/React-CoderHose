import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState  } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({lista}) => {  
  const [count, setCount] = useState(1) 
  const {addToCard} = useContext(CartContext)
  const [cond, setCond] = useState(true)
  function onAdd (lista)  {
    addToCard (lista, count,)
    setCond(false)
  }
  function clickeado (){
    console.log('yendo al carrito')
  }
  const {cart} = useContext(CartContext);
  return (
    <div className='cardi2'>
        <div className="cardi1">
            <h2 className='titulo'>{lista.titulo}</h2>
            <img className='imagen' width={'200px'} src= {lista.imagen} alt={lista.titulo}/>
            <h4 className='detalle'>{lista.detalle}</h4>
            <h3 className='precio'>Precio $ {lista.precio}</h3>
        </div>
        <div>
        {cond ? <ItemCount stock= {lista.stock} setCount = {setCount} count= {count} /> : <h2> Agregado al carrito!  </h2>}
        {cart.length > 0 ? 
                        <Link to={"/cart"}>
                            <button className="boton" onClick={clickeado} >Ir al carrito</button>
                        </Link>
                        : "" }
        <button onClick= {() => onAdd(lista) } className='links'>Agragar al carrito</button>
        <Link to = '/'><button className='seguirComprando'>Seguir Comprando</button></Link>
          
        </div>
  </div>)
};
export default ItemDetail;