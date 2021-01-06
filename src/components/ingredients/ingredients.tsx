// doc for this module /docs/Ingredients.md

import React from 'react';
import Button from "../Button";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const language = PropertiesJson.language;
const ingredientsTitle = DictJson[language].ingredientsTitle;
const next = DictJson[language].next;

function Ingredients() {
  return (
    <div className="ingredients">
      <header className="ingredients-header">
          <h2>{ ingredientsTitle }</h2>
      </header>
            <div className="wrapper">
        <div className="content">
        </div>
        <Button buttonName = { next } target = "mode_exports" />
      </div>
    </div>
  );
}

export default Ingredients;
