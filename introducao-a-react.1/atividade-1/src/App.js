import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  
  const nome = "Rafael"
  
  return (
    <div className="App">
      <h1>{nome}</h1>
      {task([`Acordar, Escovar os dentes, Ligar o Computador, Estudar`])}
      
    </div>
  );
}

export default App;
