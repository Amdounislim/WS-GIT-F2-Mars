import logo from './logo.svg';
import './App.css';
import Slim from './components/Slim';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>WS-GitHUb</h1>
        <Slim />
      </header>
    </div>
  );
}

export default App;
