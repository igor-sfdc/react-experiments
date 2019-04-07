import React from "react";
import "./quote.css";

const Quote = ({ quoteData, index }) => {
  return (
    <div key={index} className="quote">
      <div className="title">{quoteData.symbol}</div>
      {Object.keys(quoteData).map((key, mapIndex) => {
        const camelCaseKey = key.replace(/^(.)|((_)[a-z])/g, function(g) {
          return ((g[1] && " " + g[1].toUpperCase()) || g[0]).toUpperCase();
        });
        return (
          <div className="quoteLine" key={key + "-" + mapIndex}>
            <span className="label">{camelCaseKey}:</span>{" "}
            <span className="value">{quoteData[key]}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Quote;
