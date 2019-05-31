import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";

import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Weddings from "./components/Weddings/Weddings";
import Events from "./components/Events/Events";
import Confirmation from "./components/Confirmation/Confirmation";
import Admin from "./components/Admin/Admin";
import Error from "./components/Error/Error";
import AdminView from "./components/Admin/AdminView";
export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/contact" component={Contact} />
    <Route path="/services" component={Services} />
    <Route path="/weddings" component={Weddings} />
    <Route path="/events" component={Events} />
    <Route path="/confirmation" component={Confirmation} />
    <Route path="/admin" component={Admin} />
    <Route path="/orders" component={AdminView} />
    <Route component={Error} />
  </Switch>
);
