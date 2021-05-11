import logo from './logo.svg';
import './App.css';
import Tarefas from './Tarefas';

function App() {
  const nome = "Rafael"
  return (
    <div className="App">
      <h1>{nome}</h1>
      <Tarefas />
    </div>
  );
}

export default App;
