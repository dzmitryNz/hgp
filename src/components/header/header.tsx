import React from 'react';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

let root = document.getElementById("root");

function createSelectItems() {
  let items = [];  
  console.log(DictJson.langs);
  return items;
}  

function onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
}

function header() {
  console.log(PropertiesJson)
  const theme = PropertiesJson.theme;
  const language = PropertiesJson.language;
  const title = DictJson[language].title;
  const mode = PropertiesJson.mode;
  const auto = "schedule";
  const light = "light_mode";
  const dark = "dark_mode";
  const hours = new Date().getHours();
  const shedule = hours > 19 || hours < 8 ? dark : light;
  const constTheme = theme === "dark" ? dark : light; 
  const iconTheme = theme === "auto" ? auto : constTheme;
  root.className = shedule + " " + mode;
  return (
    <div className="header">
      <header className="header-header">
          <h1>{ title }</h1>
      </header>
    <div className="buttons">
      <div className="lang-switcher">
        <span className="lang">{language}</span>
      </div>
      <div className="theme-switcher">
        <span className="material-icons theme">{iconTheme}</span>
      </div>
      <div className="auth-switcher">
        <span className="material-icons auth">account_circle</span>
      </div>
    </div>
    </div>
  );
}

createSelectItems()
export default header;
