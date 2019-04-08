import React from "react";
import { NavLink } from "react-router-dom";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboard">
        <div className="menu">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/marketing">
            Marketing
          </NavLink>
          <NavLink exact to="/automation">
            Automation
          </NavLink>
          <NavLink to="/stocks">
            Stocks
          </NavLink>
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
