import data from '../../Component/mockData'
import {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../Component/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const {id} = useParams();
    useEffect( ()=> {
      getProductos
      .then((response)=>{
        setListaProductos(response.find((item) => item.id === id));
      })
      .catch(
        console.log('error')
      )
    });
    
    const getProductos = new Promise((resolve,reject) => {
      setTimeout(()=> {
        resolve(data);} , 2000);
      }
    );
    return (<div className="contenedorDetalle">
            { listaProductos && <ItemDetail lista={listaProductos}/> }       
        </div>
    )
  };
  export default ItemDetailContainer;
