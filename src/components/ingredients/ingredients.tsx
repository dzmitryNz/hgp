import React from 'react';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const ingredientsTitle = DictJson[language].ingredientsTitle;

function Ingredients() {
  return (
    <div className="ingredients">
      <header className="ingredients-header">
          <h2>{ ingredientsTitle }</h2>
      </header>
    </div>
  );
}

export default Ingredients;
