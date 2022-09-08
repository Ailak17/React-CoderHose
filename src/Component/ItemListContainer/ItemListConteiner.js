import data from '../mockData'
import {useEffect, useState } from 'react';
/* import ItemCount from '../ItemCount/ItemCount'; */
import ItemList from '../ItemList/ItemList';
import './ItemList.css'



const ItemListConteiner = ({greeting}) => {
  const [listaProductos, setListaProductos] = useState([]);
  useEffect(()=> {
    getProductos.then((response)=>{
      setListaProductos(response)
    });
  },[]);
  
  const getProductos = new Promise((resolve,reject) => {
    setTimeout(()=> {
      resolve(data);} , 2000);
    }
  );

  return (
    <>
    <h1 className='greeting' >{greeting}</h1>
    <ItemList lista={listaProductos}/>
    {/* <ItemCount stock={5} initial= {1} /> */}
    </>
  )
}
export default ItemListConteiner;