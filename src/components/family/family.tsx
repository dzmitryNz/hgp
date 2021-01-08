// doc for this module /docs/Family.md

import React from "react";
import Button from "../Button";
import UpdateAll from "../UpdateAll";

const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");


function Family() {
const language = PropertiesJson.language;
const familyTitle = DictJson[language].familyTitle;
const next = DictJson[language].next;

const handleClick = () => { UpdateAll("mode_family") };

  return (
    <div className="family">
      <header className="family-header">
          <h2 onClick={ handleClick }>{ familyTitle }</h2>
      </header>
      <div className="wrapper">
        <div className="content"></div>
        <div className="buttons">
        <Button buttonName = { next } target = "mode_storages" />
        </div>
      </div>
    </div>
  );
}

export default Family;
