import data from '../../Component/mockData'
import {useEffect, useState } from 'react';
import ItemList from '../../Component/ItemList/ItemList';
import './ItemList.css'
import { useParams } from 'react-router-dom';
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore"



const ItemListConteiner = ({greeting}) => {
  const [listaProductos, setListaProductos] = useState([]);
  const {categoryName} =useParams();
 /*  useEffect (() => {
    if(categoryName){
        const response = data.filter((response) => response.category === categoryName)
        setListaProductos(response);
    }else{
        getProducts.then((response) => {
          setListaProductos(response);
        })
    }        
},[categoryName]) */
useEffect (() => {
  getProducts();
},[categoryName]);


const getProducts = () => {
  const db = getFirestore();
  const querySnapshot = collection(db, "items");
  if(categoryName){
      const queryFiltered = query(querySnapshot, where("category", "==",categoryName))
      getDocs(queryFiltered).then((response) => {
          console.log(response.docs);
          const data = response.docs.map((doc) => {
              return {id: doc.id, ...doc.data()}
          })
          setListaProductos(data);
      })
  }else{
      getDocs(querySnapshot).then((response) => {
          console.log(response.docs);
          const data = response.docs.map((doc) => {
              return {id: doc.id, ...doc.data()}
          })
          setListaProductos(data);
      })
  }
  
}

/* const getProducts = new Promise((resolve) => { 
  setTimeout(() => {
      resolve(data);
  }, 2000);
  
}); */
  return (
    <>
    <h1 className='greeting' >{greeting}</h1>
    <ItemList lista={listaProductos}/>
    </>
  )
}
export default ItemListConteiner;