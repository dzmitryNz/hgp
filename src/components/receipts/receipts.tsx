import React from 'react';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const receiptsTitle = DictJson[language].receiptsTitle;

function Receipts() {
  return (
    <div className="receipts">
      <header className="receipts-header">
          <h2>{ receiptsTitle }</h2>
      </header>
    </div>
  );
}

export default Receipts;
