import React from 'react';

const DictJson = require('./json/dict.json');
const PropertiesJson = require('./json/properties.json');

const { language } = PropertiesJson;

const Spinner = (<img src="../../assets/spinner.gif" alt="spinner" />);
const LoadingMessage = (<span>{ DictJson[language].isLoading }</span>);
const Empty = (<div className="menue-meal empty">{DictJson[language].emptyHere}</div>);
const SERVER_HEROKU_URL = 'https://hgp-be.herokuapp.com/';
const SERVER_URL = 'http://localhost:3001/';
export {
  LoadingMessage,
  Spinner,
  Empty,
  SERVER_URL,
  SERVER_HEROKU_URL,
};
