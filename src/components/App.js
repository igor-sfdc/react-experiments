import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Marketing from "./marketing";
import Automation from "./automation";
import Dashboard from "./dashboard";
import Stocks from "./stocks";
import Notfound from "./notfound";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Dashboard>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/marketing" component={Marketing} />
            <Route exact path="/automation" component={Automation} />
            <Route path="/stocks/:symbol" component={Stocks} />
            <Route path="/stocks" component={Stocks} />
            <Route component={Notfound} />
          </Switch>
        </Dashboard>
      </BrowserRouter>
    );
  }
}
