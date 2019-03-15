import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Arrangements from "./components/Arrangements/Arrangements";
import Weddings from "./components/Weddings/Weddings";
import Events from "./components/Events/Events";
import Confirmation from "./components/Confirmation/Confirmation";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
    <Route path="/arrangements" component={Arrangements} />
    <Route path="/weddings" component={Weddings} />
    <Route path="/events" component={Events} />
    <Route path="/confirmation" component={Confirmation} />
  </Switch>
);
