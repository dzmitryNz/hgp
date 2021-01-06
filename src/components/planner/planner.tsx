// doc for this module /docs/Planner.md

import React from 'react';
import Button from "../Button";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const plannerTitle = DictJson[language].plannerTitle;
const next = DictJson[language].next;

function Planner() {
  return (
    <div className="planner">
      <header className="planner-header">
          <h2>{ plannerTitle }</h2>
      </header>
            <div className="wrapper">
        <div className="content">
        </div>
        <Button buttonName = { next } target = "mode_receipts" />
      </div>
    </div>
  );
}

export default Planner;
