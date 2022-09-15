import Item from '../Item/Item'
import { Link } from 'react-router-dom';
const ItemList = ({lista}) => {
    console.log(lista)
  return (
    <div>
        {lista.map((bordados)=> (
            <Link
                key={bordados.id}
                to={"/detalles/" + bordados.id }
                style={{ texDecoration:'none'}}>
                <Item 
                    titulo={bordados.titulo}
                    precio= {bordados.precio}
                    imagen={bordados.imagen}
                    categoria={bordados.category}
                />
            </Link>
        ))}
    </div>
);
};

export default ItemList