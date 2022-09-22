import './App.css';
import NavBar from './Component/NavBar/Navbar';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a nuestra tienda"}/>}/>          
            <Route path='/detalles/:id' element={<ItemDetailContainer /> } /> 
            <Route path='/category/:categoryName' element={<ItemListContainer/>}/>        
        </Routes>
        </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
