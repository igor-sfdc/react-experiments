import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import QuoteList from "./quote/quoteList";
import Quote from "./quote/quote";

import "./stocks.css";

const apts = {
  apt3: "demo",
  apt4: ""
};

export default class Stocks extends React.Component {
  constructor(props) {
    super(props);
    const locaStorageApt = localStorage.getItem("apt");
    this.state = {
      otherStock: "",
      apt: locaStorageApt || apts.apt3
    };
  }

  handleAptInput(e) {
    const newValue = e.target.value;
    localStorage.setItem("apt", newValue);
    this.setState({ ...this.state, apt: newValue });
  }

  render() {
    const { params } = this.props.match;

    const quoteList = stockSymbol =>
      stockSymbol ? (
        <Fragment>
          <strong className="stockName">
            You selected stock(s): {params.symbol}
          </strong>
          <QuoteList key="quotes1" apt={this.state.apt} symbol={stockSymbol}>
            <Quote />
          </QuoteList>
        </Fragment>
      ) : (
        ""
      );
    return (
      <div>
        <h1>Stocks</h1>
        <div className="keyInput">
          <strong>Enter API key and select a stock:</strong>
          <input
            type="text"
            value={this.state.apt}
            onChange={e => this.handleAptInput(e)}
            onPaste={e => this.handleAptInput(e)}
          />
        </div>
        <ul className="stockList">
          <li>
            <Link to="/stocks/crm">crm</Link>
          </li>
          <li>
            <Link to="/stocks/msft">msft</Link>
          </li>
          <li>
            <Link to="/stocks/fit">fit</Link>
          </li>
          <li>
            <Link to="/stocks/ba,tsla,amzn">ba,tsla,amzn</Link>
          </li>
          <li>
            <div className="otherStockInput">
              Other:{" "}
              <input
                className="otherStockInput"
                type="text"
                value={this.state.otherStock}
                onChange={e =>
                  this.setState({ ...this.state, otherStock: e.target.value })
                }
                onKeyPress={e => {
                  e.key === "Enter" &&
                    this.props.history.push("/stocks/" + this.state.otherStock);
                }}
              />
            </div>
          </li>
        </ul>
        {quoteList(params && params.symbol)}
      </div>
    );
  }
}
