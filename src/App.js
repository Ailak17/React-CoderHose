import './App.css';
import NavBar from './Component/NavBar/Navbar';
import ItemListConteiner from './Component/ItemListContainer/ItemListConteiner';
import ItemDetailContainer from './Component//ItemDetails/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListConteiner greeting={'Bienvenido!'}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
