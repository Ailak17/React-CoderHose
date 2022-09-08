import './NavBar.css'
import CardWidget from '../CartWidget/CardWidget'
const NavBar = () => {
    return <>
    <div>
        <ul className='ull'>
            <li>Inicio</li>
            <li>Galeria</li>
            <li>Contactos</li>            
        </ul>
    </div>
    <CardWidget/>

</>}
export default NavBar;