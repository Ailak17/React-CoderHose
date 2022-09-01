import './App.css';
import NavBar from './NavBar/NavBar';
import CardWidget from './CartWidget/CardWidget';
import ItemListConteiner from './ItemListContainer/ItemListConteiner';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <CardWidget/>
      </header>
      <ItemListConteiner greeting={'Bienvenido!'}/>
    </div>
  );
}

export default App;
