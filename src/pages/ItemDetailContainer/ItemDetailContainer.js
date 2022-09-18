import data from '../../Component/mockData'
import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Component/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [produc, setProduct] = useState([]);

  useEffect (() => {
    getProduct.then((res) => {
        const dataFiltrada = res.filter((producto) => producto.id === id);
        setProduct(dataFiltrada[0]);
    })
},)

const getProduct = new Promise((resolve) => {
  setTimeout( () => {
      resolve(data);
  }, 2000);})

return (
    <div className="contenedorDetalle">
        { produc && <ItemDetail lista = {produc} />}
    </div>
    )
}
  export default ItemDetailContainer;
