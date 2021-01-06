import React from 'react';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const familyTitle = DictJson[language].familyTitle;

function Family() {
  return (
    <div className="family">
      <header className="family-header">
          <h2>{ familyTitle }</h2>
      </header>
    </div>
  );
}

export default Family;
