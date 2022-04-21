import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Sidebar></Sidebar>
        
      </header>
    </div>
  );
}

export default App;
