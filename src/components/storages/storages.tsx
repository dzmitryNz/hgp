import React from 'react';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const storagesTitle = DictJson[language].storagesTitle;

function Storages() {
  return (
    <div className="storages">
      <header className="storages-header">
          <h2>{ storagesTitle }</h2>
      </header>
    </div>
  );
}

export default Storages;
