import Item from '../Item/Item'
const ItemList = ({lista}) => {
    console.log (lista)
  return (
    <div>
        {lista.map((bordados)=> (
            <Item 
                key={bordados.id}
                titulo={bordados.titulo}
                precio= {bordados.precio}
                imagen={bordados.imagen}
                />
        ))}
    </div>
);
};

export default ItemList