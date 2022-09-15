import './item.css'
const Item = ({titulo, precio,categoria, imagen}) => {
  return (
    <div className="cardi">
        <h2>{titulo}</h2>
        <img width={'150px'} src= {imagen} alt={titulo}/>
        <h2>Categoria: {categoria}</h2>
        <h3>$ {precio}</h3>
    </div>
  );
};
export default Item;
