import { useContext, useState} from 'react';
import './cart.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import moment from "moment/moment";
import { useNavigate } from 'react-router-dom';
import {collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore"


const Cart = () => {
  const navigate = useNavigate();
    const {cart, clear, removeItem} = useContext(CartContext)
    
    //Crea una orden, y con el set la puede modificar//
    const [order, setOrder] = useState({
      buyer:{
        name: '',
        phone: '',
        email: '',
      }, 
      items: cart,
      total: cart.reduce((acc, item) => acc + item.precio * item.quantity, 0),
            date: moment().format("DD/MM/YYYY, h:mm:ss a")
  });
    const db = getFirestore();
    const createOrder= () => {
    const query = collection(db,'orders');
    addDoc(query, order)
    .then(({id})=> {
      console.log(id);
      alert('Felicidades por tu compra! ');
      updateStockProducts();
      
    })
    };
    //Actualizacion del stock//
    const updateStockProducts = () => {
        cart.forEach((product) => {
          const queryUpdate = doc(db , 'items', product.id);
          updateDoc(queryUpdate, {
            categoryId: product.categoryId,
            detalle: product.detalle,
            imagen: product.imagen,
            precio: product.precio,
            titulo: product.titulo,
            stock: product.stock - product.quantity,
          })
          .then(()=> {
            if (cart[cart.length- 1].id === product.id){
              clear();
              navigate('/');
            }
          })
          .catch(()=> {
            console.log ('Error al actualizar stock')
          })
        });
    };
    const handleInputChange = (e) => {
        setOrder (
          {
            ...order,
            buyer: {
              ...order.buyer,
              [e.target.name]: e.target.value,
            },
          });
    } ;
    

  return (
    <div className='cardi3' >
      <h1 className='titulo1'> Bordados en el Carrito! </h1>
      <div className='flex'>
        
        {cart.length === 0 ? (<><h2 className='vacio' >El carrito esta vacio!        </h2>
        <Link to={'/'} className='createO'>Volver a la tienda</Link></>) : (<>
            {cart.map ((item)=> (
            <div className='carts' key={item.id} >
              <img src={item.imagen} width={'130px'} alt={item.titulo} className='imagenc'/>
              <h3 className='titulo2' >{item.titulo}</h3>
              <h4 className='preciou' > Precio por unidad: ${item.precio} </h4>
              <h5 className='cantidad' >Cantidad seleccionada: {item.quantity}</h5>
              <button onClick={()=> removeItem(item.id)} className='botonEliminar'>Eliminar Bordado</button>
              <h1 className='preciot' >Precio total: ${item.precio * item.quantity}</h1>
            </div>
        ))} </>)}
        </div>
        <div className='form' >
          <div>
            <h1 className='datos'>
              Completa con tus datos para crear la orden:
            </h1>
              <div className='nombre'>
                <label> Nombre :</label>
                <input  name = 'name' type='text' value={order.buyer.name} onChange={handleInputChange}/>
              </div>
              <div className='phone'>
                <label>Telefono :</label>
                <input name = 'phone' type='number'value={order.buyer.phone} onChange={handleInputChange}/>
              </div>
              <div className='email'>
                <label> Correo Electronico :</label>
                <input name = 'email' type='email' value={order.buyer.email} onChange={handleInputChange}/>
              </div>
          </div>
        <button className='createO' onClick={createOrder}>Crear orden</button>
        </div>

    </div>       
  )}

export default Cart;