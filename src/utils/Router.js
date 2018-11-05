import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../components/About";
import UserLoggedIn from "../containers/UserLoggedIn";
import TradeScreen from "../containers/TradeScreen";

const Router = () => (
  <Switch>
    <Route exact path="/About" component={About} />
    <Route exact path="/UserLoggedIn" component={UserLoggedIn} />
    <Route exact path="/Trade" component={TradeScreen} />
  </Switch>
);

export default Router;