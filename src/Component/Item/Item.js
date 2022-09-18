import './item.css'
const Item = ({titulo, precio, imagen}) => {
  return (
    <div className="cardi">
        <h2>{titulo}</h2>
        <img width={'150px'} src= {imagen} alt={titulo}/>
        <h3>$ {precio}</h3>
    </div>
  );
};
export default Item;
