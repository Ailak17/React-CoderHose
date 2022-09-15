import carrito from '../../Carrito.png'
import './style.css'
import { NavLink } from "react-router-dom"

const CardWidget = () => {
  return (
    <NavLink to={"/Carrito"}>
      <img src={carrito} className="carrito" alt="logo" />
    </NavLink>
    
  )
}

export default CardWidget