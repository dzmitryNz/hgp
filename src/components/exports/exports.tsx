import React from 'react';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const exportsTitle = DictJson[language].exportsTitle;

function Exports() {
  return (
    <div className="exports">
      <header className="exports-header">
          <h2>{ exportsTitle }</h2>
      </header>
    </div>
  );
}

export default Exports;
