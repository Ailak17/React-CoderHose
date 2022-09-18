import data from '../../Component/mockData'
import {useEffect, useState } from 'react';
import ItemList from '../../Component/ItemList/ItemList';
import './ItemList.css'
import { useParams } from 'react-router-dom';



const ItemListConteiner = ({greeting}) => {
  const [listaProductos, setListaProductos] = useState([]);
  const {categoryName} =useParams();
  useEffect (() => {
    if(categoryName){
        const response = data.filter((response) => response.category === parseInt.categoryName)
        setListaProductos(response);
    }else{
        getProducts.then((response) => {
          setListaProductos(response);
        })
    }        
},[categoryName])

const getProducts = new Promise((resolve) => { 
  setTimeout(() => {
      resolve(data);
  }, 2000);
  
});
  return (
    <>
    <h1 className='greeting' >{greeting}</h1>
    <ItemList lista={listaProductos}/>
    </>
  )
}
export default ItemListConteiner;