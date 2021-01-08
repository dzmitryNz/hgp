// doc for this module /docs/Storages.md

import React from 'react';
import Button from "../Button";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");


function Storages() {
  const language = PropertiesJson.language;
  const storagesTitle = DictJson[language].storagesTitle;
  const next = DictJson[language].next;
  return (
    <div className="storages">
      <header className="storages-header">
          <h2>{ storagesTitle }</h2>
      </header>
      <div className="wrapper">
        <div className="content"></div>
        <div className="buttons">
        <Button buttonName = { next } target = "mode_planner" />
        </div>
      </div>
    </div>
  );
}

export default Storages;
