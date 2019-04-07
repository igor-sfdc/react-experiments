import React from "react";

import "./App.css";

import t from "../token";
import Quote from "./quote";
import QuoteList from "./quoteList";

const getApt = tkn => {
  return tkn.t1 + tkn.t2 + tkn.t3;
};

const App = props => {
  return (
    <React.Fragment>
      <div key="row1" className="row">
        <div className="column">
          <QuoteList key="quotes1" apt={getApt(t)} symbol="crm,msft">
            <Quote />
          </QuoteList>
        </div>
        <div className="column">
          <QuoteList key="quotes2" apt={getApt(t)} symbol="goog,lyft">
            <Quote />
          </QuoteList>
        </div>
        <div className="column">
          <QuoteList key="quotes3" apt={getApt(t)} symbol="etn,met">
            <Quote />
          </QuoteList>
        </div>
      </div>
      <div key="row2" className="row">
        <div className="column">
          <QuoteList key="quotes1" apt={getApt(t)} symbol="box,twtr">
            <Quote />
          </QuoteList>
        </div>
        <div className="column">
          <QuoteList key="quotes2" apt={getApt(t)} symbol="dell,ba">
            <Quote />
          </QuoteList>
        </div>
        <div className="column">
          <QuoteList key="quotes3" apt={getApt(t)} symbol="tsla,fb">
            <Quote />
          </QuoteList>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
