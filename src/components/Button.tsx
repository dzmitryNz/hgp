import React from 'react';
import getNext from "./getNext";
const PropertiesJson = require("./json/properties.json");
const DictJson = require("./json/dict.json");

const Button = ({buttonName, target}) => {
    const clName = "button-next";
    const handleClick = () => {
    getNext(target)
  }
  return <button className={ clName } onClick={ handleClick }>{ buttonName }</button>
}

export default Button;

