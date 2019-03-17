import React, { Component } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import routes from "./routes";
import "./reset.scss";
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        {routes}
        <Footer />
      </>
    );
  }
}

export default App;
