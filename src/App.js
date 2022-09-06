import './App.css';
import NavBar from './NavBar/Navbar';
import ItemListConteiner from './ItemListContainer/ItemListConteiner';
 


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
