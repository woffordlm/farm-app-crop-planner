import "../../src/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";


function Home() {
  return (
        <div className="App">
          <header className="App-header">
            <Header />
            {/* <Sidebar> </Sidebar>{" "} */}
          </header>
        </div>
  );
}

export default Home;
