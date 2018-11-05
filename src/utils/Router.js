import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import UserLoggedIn from "../containers/UserLoggedIn";
import TradeScreen from "../containers/TradeScreen";
import ComicListing from "../containers/ComicListing";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/UserLoggedIn" component={UserLoggedIn} />
    <Route exact path="/Trade" component={TradeScreen} />
    <Route exact path="/Browse" component={ComicListing} />
  </Switch>
);

export default Router;
