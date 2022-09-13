import './ItemDetail.css'
import ItemCount from '../../ItemCount/ItemCount'


const ItemDetail = ({lista}) => {
    const stock = 10;
    console.log (lista)
  return (
    <div className='cardi2'>
        <div className="cardi1">
            <h2 className='titulo'>{lista.titulo}</h2>
            <img className='imagen' width={'200px'} src= {lista.imagen} alt={lista.titulo}/>
            <h4 className='detalle'>{lista.detalle}</h4>
            <h3 className='precio'>Precio $ {lista.precio}</h3>
        </div>
        <ItemCount stock = {stock} initial= {1} />
  
  </div>)
};
export default ItemDetail;