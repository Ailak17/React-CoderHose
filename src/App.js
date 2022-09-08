import './App.css';
import NavBar from './Component/NavBar/Navbar';
import ItemListConteiner from './Component/ItemListContainer/ItemListConteiner';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListConteiner greeting={'Bienvenido!'}/>
      
    </div>
  );
}

export default App;
