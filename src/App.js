import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
