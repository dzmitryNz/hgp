// doc for this module /docs/Receipts.md

import React from 'react';
import Button from "../Button";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

function Receipts() {
  const language = PropertiesJson.language;
  const receiptsTitle = DictJson[language].receiptsTitle;
  const next = DictJson[language].next;
  return (
    <div className="receipts">
      <header className="receipts-header">
          <h2>{ receiptsTitle }</h2>
      </header>
      <div className="wrapper">
        <div className="content"></div>
        <div className="buttons">
        <Button buttonName = { next } target = "mode_ingredients" />
        </div>
      </div>
    </div>
  );
}

export default Receipts;
