import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../components/About";
import Home from "../containers/Home";
import UserLoggedIn from "../containers/UserLoggedIn";
import ComicListing from "../containers/ComicListing";
import ErrorPage from "../components/ErrorPage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/UserLoggedIn" component={UserLoggedIn} />
    <Route exact path="/Browse" component={ComicListing} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Router;
