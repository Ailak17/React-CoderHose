import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {
    const {cart, addToCard, removeItem} = useContext(CartContext)
  return (
    <div>
        <h1> Bordados en el Carrito! </h1>
        {cart.length === 0 ? (<><h2>El carrito esta vacio! </h2>
        <Link to={'/'}>Volver a la tienda</Link></>) : (<>
            {cart.map ((item)=> (
            <div key={item.id} className='acomodandoCart'>
            <img src={item.imagen} width={'50px'} alt={item.titulo}/>
            <h3>{item.titulo}</h3>
            <h4> Precio por unidad: ${item.precio} </h4>
            <h5>Cantidad seleccionada: {item.quantity}</h5>
            <button onClick={()=> removeItem(item.id)} className='botonEliminar'>Eliminar Bordado</button>
            <h1>Precio total: ${item.precio * item.quantity}</h1>
            </div>
            
        ))} </>)}
        
           
    </div>       
  )
}

export default Cart;