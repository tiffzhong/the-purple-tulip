import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";

import Gallery from "./components/Gallery/Gallery";
import GalBouquet from "./components/Gallery/GalBouquet/GalBouquet";
import GalOccasion from "./components/Gallery/GalOccasion/GalOccasion";
import GalVase from "./components/Gallery/GalVase/GalVase";

import Services from "./components/Services/Services";
import WeddingConsult from "./components/Services/WeddingConsult";
import DeliveryInfo from "./components/Services/DeliveryInfo";

import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";
import Confirmation from "./components/Confirmation/Confirmation";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminHome from "./components/Admin/AdminHome";

import AdminItemEdit from "./components/Admin/AdminItemEdit";
import AdminViewInq from "./components/Admin/AdminViewInq";
export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/gallery/occasions" component={GalOccasion} />
    <Route exact path="/gallery/bouquets" component={GalBouquet} />
    <Route exact path="/gallery/vases" component={GalVase} />

    <Route exact path="/services" component={Services} />
    <Route exact path="/services/wedding" component={WeddingConsult} />
    <Route exact path="/services/deliveryinfo" component={DeliveryInfo} />

    <Route path="/confirmation" component={Confirmation} />
    <Route exact path="/admin" component={AdminLogin} />
    <Route path="/admin/home" component={AdminHome} />
    <Route path="/admin/item/:id" component={AdminItemEdit} />
    <Route path="/admin/inq/:id" component={AdminViewInq} />
    <Route path="/contact" component={Contact} />

    <Route component={Error} />
  </Switch>
);
