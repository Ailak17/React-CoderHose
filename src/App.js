import './App.css';
import NavBar from './Component/NavBar/Navbar';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a nuestra tienda"}/>}/>          
          <Route path='/detalles/:id' element={<ItemDetailContainer /> } /> 
          <Route path='category/:categoryName' element={<ItemListContainer /> } />         
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
