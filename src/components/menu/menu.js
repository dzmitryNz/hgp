import React from 'react';
import UpdateAll from '../UpdateAll';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

let root = document.getElementById("root");

function showMenu(e) {
  const target = e.target.className.split(' ')[0];
  let themesHidden = document.querySelector(".themes-hidden");
  let langsHidden = document.querySelector(".langs-hidden");
  let themes = document.querySelector(".themes");
  let langs = document.querySelector(".langs");
  let footer = document.querySelector(".footer");
  let footrHidden = document.querySelector(".footer-hidden");
  if (target === "theme") 
  {
    if (themesHidden) themesHidden.className = "themes"
    if (themes) themes.className = "themes-hidden"
  }
  if (target === "lang") {
    if (langsHidden) langsHidden.className = "langs"
    if (langs) langs.className = "langs-hidden"
  }
  if (target === "footer") {
    if (footrHidden) langsHidden.className = "footer"
    if (footer) langs.className = "footer-hidden"
  }
}

function changeProperties(e) {
  let propertiesChanged = false;
  const modes = /family|storages|planner|receipts|ingredients|export/;
  const target = e.target.className.split(' ')[0];
  const targetMode = e.target.className.split(' ')[0].split("-")[1];
  console.log(targetMode);

  let themes = document.querySelector(".themes");
  let langs = document.querySelector(".langs");
  if (DictJson.langsList.indexOf(target) !== -1) 
  {
    PropertiesJson.language = target;
    propertiesChanged = true;
    langs.className = "langs-hidden"
  }
  if (PropertiesJson.themeList.indexOf(target) !== -1) 
  {
    PropertiesJson.theme = target;
    propertiesChanged = true;
    themes.className = "themes-hidden"
  }
  if (targetMode.match(modes)) {
    PropertiesJson.mode = "mode_" + targetMode;
    propertiesChanged = true;
    }
  if (propertiesChanged) UpdateAll(PropertiesJson.mode);
}

function Menu() {
  
  const themePref = PropertiesJson.theme;
  const themesList = PropertiesJson.themeList;
  const langsList = DictJson.langsList;
  const language = PropertiesJson.language;
  const footerTitle = DictJson[language].footer;
  const mode = PropertiesJson.mode;
  const title = DictJson[language].title;
  const tabFamily = mode === "mode_family" ? "tab-family tabi active-tab" : "tab-family tabi";
  const tabStorages = mode === "mode_storages" ? "tab-storages tabi active-tab" : "tab-storages tabi";
  const tabPlanner = mode === "mode_planner" ? "tab-planner tabi active-tab" : "tab-planner tabi";
  const tabReceipts = mode === "mode_receipts" ? "tab-receipts tabi active-tab" : "tab-receipts tabi";
  const tabIngredients = mode === "mode_ingredients" ? "tab-ingredients tabi active-tab" : "tab-ingredients tabi";
  const tabExport = mode === "mode_export" ? "tab-export tabi active-tab" : "tab-export tabi";

  // const auto = "schedule";
  const light = "light_mode";
  const dark = "dark_mode";
  const hours = new Date().getHours();
  const shedule = hours > 18 || hours < 8 ? dark : light;
  // const constTheme = themePref === "dark_mode" ? dark : light; 
  const theme = themePref === "schedule" ? shedule : themePref;
  const iconTheme = themePref;
  root.className = theme + " " + mode;
  let themes = [];
  themesList.forEach((el, i) => {
    const classNames = el + " theme material-icons";
    themes.push(<div key={el} className={classNames} onClick={ changeProperties }>{el}</div>)
  })
  let langs = [];
  langsList.forEach((el, i) => {
    const classNames = el + " lang";
    langs.push(<div key={el} className={classNames} onClick={ changeProperties }>{el}</div>)
    })

  return (
    <div className="menu">
      <header className="menu-header">{ title }</header>
      <div className="tabs">
        <div className="tab"> 
        <div onClick={changeProperties} className={tabFamily}></div>
        </div>
        <div className="tab"> 
        <div onClick={changeProperties} className={tabStorages}></div>
        </div>
        <div className="tab"> 
        <div onClick={changeProperties} className={tabPlanner}></div>
        </div>
        <div className="tab"> 
        <div onClick={changeProperties} className={tabReceipts}></div>
        </div>
        <div className="tab"> 
        <div onClick={changeProperties} className={tabIngredients}></div>
        </div>
        <div className="tab"> 
        <div onClick={changeProperties} className={tabExport}></div>
        </div>

      </div>
      <div className="buttons">
        <div className="langs-hidden">{ langs }</div>
      <div className="lang-switcher">
        <div className="lang" onClick={ showMenu }>{language}</div>
      </div>
        <div className="themes-hidden">{ themes }</div>
      <div className="theme-switcher">
        <div className="theme material-icons" onClick={ showMenu }>{ iconTheme }</div>
      </div>
      <div className="footer-switcher" onClick={ showMenu }>{footerTitle}</div>
        <div className="footer-hidden">{ themes }</div>
      </div>
    </div>
  );
}

export default Menu;
