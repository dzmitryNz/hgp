import React from 'react';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const plannerTitle = DictJson[language].plannerTitle;

function Planner() {
  return (
    <div className="planner">
      <header className="planner-header">
          <h2>{ plannerTitle }</h2>
      </header>
    </div>
  );
}

export default Planner;
