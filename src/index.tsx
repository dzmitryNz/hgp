import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Family from './components/family/family';
import Planner from './components/planner/planner';
import Receipts from './components/receipts/receipts';
import Storages from './components/storages/storages';
import Ingredients from './components/ingredients/ingredients';
import Exports from './components/exports/exports';
import reportWebVitals from './reportWebVitals';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
