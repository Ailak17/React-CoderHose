import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import moment from "moment/moment";
import {collection, addDoc, getFirestore, } from "firebase/firestore"


const Cart = () => {
    const {cart, addToCard, removeItem} = useContext(CartContext)
    
    const createOrder = () =>{
    const db = getFirestore();
    const order = {
      buyer:{
        name: 'Sofia',
        phone: '2211231231',
        email: 'ejemplo@ejemplo.com'
      }, 
      items: cart,
      total: cart.reduce((valorPasado, item) => valorPasado + item.precio * item.quantity, 0),
      date:moment().format("DD/MM/YYYY, h:mm:ss a")
  }
    const query = collection(db,'orders');
    addDoc(query, order)
    .then(({id})=> {
      console.log(id)
      alert('Felicidades por tu compra!')})
    .catch(()=> alert ('Tu compra no pudo ser completada'))
    };
  return (
    <div>
        <h1> Bordados en el Carrito! </h1>
        {cart.length === 0 ? (<><h2>El carrito esta vacio! </h2>
        <Link to={'/'}>Volver a la tienda</Link></>) : (<>
            {cart.map ((item)=> (
            <div key={item.id} className='acomodandoCart'>
            <img src={item.imagen} width={'50px'} alt={item.titulo}/>
            <h3>{item.titulo}</h3>
            <h4> Precio por unidad: ${item.precio} </h4>
            <h5>Cantidad seleccionada: {item.quantity}</h5>
            <button onClick={()=> removeItem(item.id)} className='botonEliminar'>Eliminar Bordado</button>
            <h1>Precio total: ${item.precio * item.quantity}</h1>
            </div>
        ))} </>)}
        <div>
        <button onClick={createOrder}>Crear orden</button>
        </div>

    </div>       
  )
}

export default Cart;