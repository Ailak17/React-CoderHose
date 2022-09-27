import carrito from '../../Carrito.png'
import './style.css'
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext';

const CardWidget = () => {
  const {cart} = useContext(CartContext);
  return (<div className='carritoo'>
    <NavLink to={"/cart"}>
      <img src={carrito} className="carrito" alt="logo" />
    </NavLink>
    <h1 className='numeroCarrito'>{cart.length}</h1>
  </div>
    
    
  )
}

export default CardWidget



