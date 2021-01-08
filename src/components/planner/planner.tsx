// doc for this module /docs/Planner.md

import React from 'react';
import Button from "../Button";
import UpdateAll from "../UpdateAll";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const handleClick = () => { UpdateAll("mode_planner") };

function Planner() {
  const language = PropertiesJson.language;
  const plannerTitle = DictJson[language].plannerTitle;
  const next = DictJson[language].next;
  return (
    <div className="planner">
      <header className="planner-header">
          <h2 onClick={ handleClick }>{ plannerTitle }</h2>
      </header>
      <div className="wrapper">
        <div className="content"></div>
        <div className="buttons">
        <Button buttonName = { next } target = "mode_receipts" />
        </div>
      </div>
    </div>
  );
}

export default Planner;
