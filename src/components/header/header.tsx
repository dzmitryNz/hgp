import React from 'react';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

let root = document.getElementById("root");
const theme = PropertiesJson.theme;
const language = PropertiesJson.language;
const title = DictJson[language].title;
const auto = "schedule";
const light = "light_mode";
const dark = "dark_mode";
const hours = new Date().getHours();
const shedule = hours > 19 || hours < 8 ? dark : light;
const constTheme = theme === "dark" ? dark : light; 
const iconTheme = theme === "auto" ? auto : constTheme;
root.className = shedule + " " + "mode_family";


function header() {
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

export default header;
