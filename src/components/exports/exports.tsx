// doc for this module /docs/Exports.md

import React from 'react';
import Button from "../Button";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");


function Exports() {
  const language = PropertiesJson.language;
  const exportsTitle = DictJson[language].exportsTitle;
  const next = DictJson[language].next;
  return (
    <div className="exports">
      <header className="exports-header">
          <h2>{ exportsTitle }</h2>
      </header>
      <div className="wrapper">
        <div className="content"></div>
        <div className="buttons">
        <Button buttonName = { next } target = "mode_family" />
        </div>
      </div>
    </div>
  );
}

export default Exports;
