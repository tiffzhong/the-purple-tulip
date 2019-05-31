import React, { Component } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";

import routes from "./routes";
import "./reset.scss";
class App extends Component {
  render() {
    return (
      <>
        {routes}
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;
