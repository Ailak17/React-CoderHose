import './NavBar.css'
import CardWidget from '../CartWidget/CardWidget'
import logo from '../../logo.png'
import { NavLink } from "react-router-dom"
const NavBar = () => {
    return <>
    <div className='header1'>
        <NavLink to={"/"}>
            <img src={logo} className="logo" alt="logo" />
        </NavLink>
        <ul className='ull'>
            <li>Inicio</li>
            <li className="lista"><NavLink to={"/bordadosChicos"}>Bordados Chicos</NavLink></li> 
        </ul>
        <CardWidget/>
    </div>
    

</>}
export default NavBar;