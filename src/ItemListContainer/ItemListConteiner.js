import ItemCount from '../ItemCount/ItemCount';
import './ItemList.css'


const ItemListConteiner = ({greeting}) => {
  const stock = 5;

  return (
    <>
    <h1 className='greeting' >{greeting}</h1>
    <ItemCount stock={stock} initial= {1} />
    </>
  )
}
export default ItemListConteiner;