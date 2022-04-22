import "../../src/App.css";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";



function Home() {
  return (
        <div className="App">
          <header className="App-header">
          <div className= "row" >
            <Header />
            </div>     
            <Sidebar/> 
          </header>
        </div>
  );
}

export default Home;
