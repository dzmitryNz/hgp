import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
// import Footer from './footer/footer';
import Menu from './menu/menu';
import Family from './family/Family';
// import Planner from './planner/planner';
import Receipts from './receipts/Receipts';
// import Storages from './storages/storages';
// import Ingredients from './ingredients/ingredients';
// import Exports from './exports/exports';
let PropertiesJson = require("./json/properties.json");

function UpdateAll(target) {
    if (target && typeof target === 'string') PropertiesJson.mode = target;
        else {PropertiesJson = target}
    localStorage.setItem('hgp-properties', JSON.stringify(PropertiesJson))
    
    ReactDOM.render(
    <React.StrictMode>
    <Header />
    <Menu />
    <Family />
    {/* <Storages /> */}
    {/* <Planner /> */}
    <Receipts />
    {/* <Ingredients /> */}
    {/* <Exports /> */}
    {/* <Footer /> */}
    </React.StrictMode>,
    document.getElementById('root')
);
}

export default UpdateAll;
