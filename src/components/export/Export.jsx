/* eslint-disable import/no-cycle */
import React from 'react';
import ModeHeader from '../modeHeader';

const PropertiesJson = require('../json/properties.json');

const localProp = JSON.parse(localStorage.getItem('hgp-properties'));
if (localProp) {
  PropertiesJson.language = localProp.language;
  PropertiesJson.theme = localProp.theme;
  PropertiesJson.mode = localProp.mode;
}

const Export = () => (
  <div className="export">
    <ModeHeader mode="export" />
  </div>
);

export default Export;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
