import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavVar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
                
      </header>
    </div>
  );
}

export default App;
