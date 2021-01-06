// doc for this module /docs/Family.md

import React from "react";
import Button from "../Button";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const familyTitle = DictJson[language].familyTitle;
const next = DictJson[language].next;

function Family() {
  return (
    <div className="family">
      <header className="family-header">
          <h2>{ familyTitle }</h2>
      </header>
      <div className="wrapper">
        <div className="content">
        </div>
        <Button buttonName = { next } target = "mode_storages" />
      </div>
    </div>
  );
}

export default Family;
