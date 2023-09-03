import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Facilities from "./Components/Facilities/Facilities";
import Footer from "./Components/Footer/Footer";

function App() {
  
  return (
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home} />

         
        </Switch>
        {/* <Facilities></Facilities> */}
        <Footer></Footer>
      </Router>

  );
}

export default App;
