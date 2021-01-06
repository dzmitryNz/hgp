import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Menu from './menu/menu';
import Family from './family/family';
import Planner from './planner/planner';
import Receipts from './receipts/receipts';
import Storages from './storages/storages';
import Ingredients from './ingredients/ingredients';
import Exports from './exports/exports';
const PropertiesJson = require("./json/properties.json");

function getNext(target) {
    PropertiesJson.mode = target;
    ReactDOM.render(
    <React.StrictMode>
    <Header />
    {/* <Menu /> */}
    <Family />
    <Storages />
    <Planner />
    <Receipts />
    <Ingredients />
    <Exports />
    <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);
}

export default getNext;
