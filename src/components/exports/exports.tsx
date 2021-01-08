// doc for this module /docs/Exports.md

import React from 'react';
import Button from "../Button";
import UpdateAll from "../UpdateAll";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const handleClick = () => { UpdateAll("mode_exports") };

function Exports() {
  const language = PropertiesJson.language;
  const exportsTitle = DictJson[language].exportsTitle;
  const next = DictJson[language].next;
  return (
    <div className="exports">
      <header className="exports-header">
          <h2 onClick={ handleClick }>{ exportsTitle }</h2>
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
