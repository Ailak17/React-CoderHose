import data from '../../mockData'
import {useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    
    useEffect(()=> {
      getProductos.then((response)=>{
        const filtro = response.filter((bordado) => bordado.id === 2);
        setListaProductos(...filtro);
      });
    },[]);
    
    const getProductos = new Promise((resolve) => {
      setTimeout(()=> {
        resolve(data);} , 2000);
      }
    );
    return (
      <>
      <div className="contenedorDetalle">
            <ItemDetail lista = {listaProductos} />        
        </div>
      </>
    )
  }
  export default ItemDetailContainer;
