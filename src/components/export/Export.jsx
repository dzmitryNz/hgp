/* eslint-disable import/no-cycle */
import React from 'react';

const PropertiesJson = require('../shared/json/properties.json');

const localProp = JSON.parse(localStorage.getItem('hgp-properties'));
if (localProp) {
  PropertiesJson.language = localProp.language;
  PropertiesJson.theme = localProp.theme;
  PropertiesJson.mode = localProp.mode;
}

// const [ingredients, setIngr] = useState();

const Export = () => (
  <div className="export" />
);

// exportToCsv('export.csv', [
//   ['Имя', 'Десерт'],
//   ['david', '123'],
//   ['jona', '""'],
//   ['a', 'b'],
// ]);

export default Export;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
