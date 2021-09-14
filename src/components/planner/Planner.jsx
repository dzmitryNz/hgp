/* eslint-disable import/no-cycle */
import React from 'react';
import ModeHeader from '../shared/modeHeader';

const PropertiesJson = require('../shared/json/properties.json');
const DictJson = require('../shared/json/dict.json');

const clickEvent = () => {};
const handleKeyUp = () => {};

const Planner = (familyData) => {
  const { language } = PropertiesJson;
  const localFamily = JSON.parse(localStorage.getItem('hgp-family'));
  const familyDataEnd = !familyData ? localFamily : familyData;

  const modesBlock = () => (
    <div className="modes">
      <div className="planner-mode">{DictJson[language].plannerWeek}</div>
      <div className="planner-mode">{DictJson[language].plannerDay}</div>
      <div className="planner-mode">{DictJson[language].plannerSurviver}</div>
    </div>
  );

  const modeBlock = () => (
    <>
      <div className="mode-content planner-week">
        <div onClick={clickEvent} onKeyUp={handleKeyUp} role="button" tabIndex={0} className="adults-minus material-icons">remove_circle</div>
        <div id="adults-value" className="adults-value">{familyDataEnd.adults}</div>
        <div onClick={clickEvent} onKeyUp={handleKeyUp} role="button" tabIndex={0} className="adults-plus material-icons">add_circle</div>
        <div onClick={clickEvent} onKeyUp={handleKeyUp} role="button" tabIndex={0} className="adultsdiet-minus material-icons">remove_circle</div>
        <div id="adultsdiet-value" className="adultsdiet-value">{familyDataEnd.adultsdiet}</div>
        <div onClick={clickEvent} onKeyUp={handleKeyUp} role="button" tabIndex={0} className="adultsdiet-plus material-icons">add_circle</div>
      </div>
    </>
  );

  return (
    <div className="planner">
      <ModeHeader mode="planner" />
      <div className="content">
        {modesBlock()}
        {modeBlock()}
      </div>
    </div>

  );
};

export default Planner;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
