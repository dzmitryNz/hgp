// doc for this module /docs/Storages.md

import React from 'react';
import Button from "../Button";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const storagesTitle = DictJson[language].storagesTitle;
const next = DictJson[language].next;

function Storages() {
  return (
    <div className="storages">
      <header className="storages-header">
          <h2>{ storagesTitle }</h2>
      </header>
      <div className="wrapper">
        <div className="content">
        </div>
        <Button buttonName = { next } target = "mode_planner" />
      </div>
    </div>
  );
}

export default Storages;
