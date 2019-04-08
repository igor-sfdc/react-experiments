import React, { useState, useEffect } from "react";
import axios from "axios";
import { CometSpinLoader } from "react-css-loaders";

import "./quoteList.css";
import ChidrenWithProps from "./childrenWithProps";

const QuoteList = ({ symbol, children, index, apt }) => {
  const [quoteListData, setQuoteListDataData] = useState([]);
  const [quoteMessage, setQuoteMessage] = useState("");
  const [quoteSymbol, setQuoteSymbol] = useState(symbol);
  const [aptValue, setAptValue] = useState(apt);

  // Update only if symbol changes, otherwise will get infinite loop
  aptValue !== apt && setAptValue(apt);
  symbol !== quoteSymbol && setQuoteSymbol(symbol);

  const authenticatedUrl = (apt, symbol) => {
    const baseUrl = "https://www.worldtradingdata.com/api/v1/stock?";
    const symbolParam = "symbol=" + symbol;
    const aptParam = "&api_token=" + apt;
    return baseUrl + symbolParam + aptParam;
  };

  const isDemo = apt === "" || apt === "demo";
  const url = isDemo
    ? "https://www.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,HSBA.L&api_token=demo"
    : authenticatedUrl(apt, quoteSymbol);

  const HttpClient = axios.create();

  HttpClient.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      const errorMessage = "Error: " + error.message + " or invalid API token.";
      return { data: { message: errorMessage } };
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await HttpClient(url);
      setQuoteMessage(result.data.message || result.data.Message);
      setQuoteListDataData(result.data.data);
    };

    fetchData();

    // Return option unmount cleanup function:
    //return () => console.log("unmounting...");

    // Ignore warning below: React Hook useEffect has a missing dependency: 'url'
  }, [quoteSymbol, aptValue]);

  const message = quoteMessage ? (
    <div className="quotesMessage">
      <div>
        Quotes for <strong>{symbol}</strong>.
      </div>
      <div>Message: {quoteMessage}</div>
    </div>
  ) : (
    ""
  );
  // Alt loader image:   // <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
  const loader =
    message || (quoteListData && quoteListData.length) ? (
      ""
    ) : (
      <div className="loader">
        <CometSpinLoader />
      </div>
    );
  return (
    <div key={index} className="quoteList">
      {message}
      {quoteListData && quoteListData.length > 0
        ? quoteListData.map((quoteData, mapIndex) => (
            <ChidrenWithProps
              key={mapIndex}
              childrenProps={{ quoteData, mapIndex }}
              children={children}
            />
          ))
        : ""}
      {loader}
    </div>
  );
};
export default QuoteList;
