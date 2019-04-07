import React, { useState, useEffect } from "react";
import axios from "axios";
import { CometSpinLoader } from "react-css-loaders";

import "./quoteList.css";
import ChidrenWithProps from "./childrenWithProps";

const QuoteList = ({ symbol, children, index, apt }) => {
  const [quoteListData, setQuoteListDataData] = useState([]);
  // const baseUrl = "https://www.worldtradingdata.com/api/v1/stock?";
  // const symbolParam = "symbol=" + symbol;
  // const aptParam = "&api_token=" + apt;
  //const url = baseUrl + symbolParam + aptParam;
  const url =
    "https://www.worldtradingdata.com/api/v1/stock?symbol=AAPL,MSFT,HSBA.L&api_token=demo";
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setQuoteListDataData(result.data.data);
    };

    fetchData();
  }, []);

  return (
    <div key={index} className="quoteList">
      {quoteListData && quoteListData.length > 0 ? (
        quoteListData.map((quoteData, mapIndex) => (
          <ChidrenWithProps
            key={mapIndex}
            childrenProps={{ quoteData, mapIndex }}
            children={children}
          />
        ))
      ) : (
        <div className="loader">
          <CometSpinLoader />
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> */}
        </div>
      )}
    </div>
  );
};
export default QuoteList;
