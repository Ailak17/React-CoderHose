import data from '../../Component/mockData'
import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Component/ItemDetail/ItemDetail'

const getProducts = new Promise((resolve) => {
  setTimeout( () => {
      resolve(data);
  }, 2000);
});

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  useEffect (() => {
    getProducts.then((res) => {
      const currentProduct = res.find(product => product.id === parseInt(id));
      setProduct(currentProduct)
    })
}, [getProducts, id])


return (
    <div className="contenedorDetalle">
        
        { product && <ItemDetail lista = {product} />}
    </div>
    )
}
  export default ItemDetailContainer;
