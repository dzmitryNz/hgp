/* eslint-disable import/no-cycle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetchData from '../shared/api/fetchData';
import { Empty, Spinner } from '../shared/constants';
import { serverUrl } from '../shared/json/properties.json';
import Favorites from './Favorites';
import Modal from './ReceiptModal';

const PropertiesJson = require('../shared/json/properties.json');
const DictJson = require('../shared/json/dict.json');

let menuLocal = JSON.parse(localStorage.getItem('hgp-menu'));
if (!menuLocal) menuLocal = [];
let category = [];
const recent = [];
let categoryBlock = [];
let count = '';
let categoriesData = [];
fetchData(`${serverUrl}rec/cat/`).then((res) => { categoriesData = res.data; });

function Receipts() {
  const { language } = PropertiesJson;
  const categoryStr = PropertiesJson.category;
  const [data, setData] = useState([]);
  const [recentsData, setRecents] = useState([]);
  const [menusData, setMenus] = useState([]);
  const [query, setQuery] = useState('Основные блюда');
  const [menus, setMenusList] = useState(menuLocal);
  const [isLoading, setLoading] = useState(false);
  const [categoryHeader, setCategoryHeader] = useState(categoryStr);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    // const favLocal = JSON.parse(localStorage.getItem("hgp-favorite"));
    // const menuLocal = JSON.parse(localStorage.getItem("hgp-menu"));
    const categoryUrl = `${serverUrl}rec/cat/`;
    if (!ignore) {
      fetchData(categoryUrl + query).then((res) => setData(res.data));
      setLoading(false);
    }
    setCategoryHeader(query);
    return () => { ignore = true; };
  }, [query]);

  useEffect(() => {
    let ignore = false;
    const popularUrl = `${serverUrl}rec/popular`;
    if (!ignore) {
      fetchData(popularUrl).then((res) => setRecents(res.data));
    }
    return () => { ignore = true; };
  }, [recent]);

  useEffect(() => {
    let ignore = false;
    // const menuLocal = JSON.parse(localStorage.getItem("hgp-menu"));
    const arrayUrl = `${serverUrl}rec/array`;
    const menusArr = menus || [];
    const regExMenu = menusArr.join('|');
    let configMenu = { };
    if (regExMenu.length !== 0) {
      configMenu = { data: { el: 'idMeal', reg: regExMenu, cat: count } };
      if (!ignore) axios.get(arrayUrl, configMenu).then((res) => setMenus(res.data));
    }

    return () => { ignore = true; };
  }, [menus]);

  useEffect(() => {

  }, [isLoading]);

  // console.log(data, categoriesData)

  const changeCategory = (e) => {
    // console.log(e.target.innerText);
    setQuery(e.target.innerText);
    document.querySelector('.active-category').classList.remove('active-category');
    e.target.classList.add('active-category');
  };

  const openModal = (e) => {
    const target = e.target.classList[0];
    const from = e.target.classList[1].split('-')[0];

    let receiptSee = {};
    switch (from) {
      case ('recent'):
        receiptSee = recentsData[target];
        break;
      case ('receipt'):
        receiptSee = category[target];
        break;
      // case ('favorite'):
      //   receiptSee = favoritesData[target];
      //   break;
      case ('menue'):
        receiptSee = menusData[target];
        break;
      default:
    }
    if (receiptSee) {
      localStorage.setItem('modalSee', JSON.stringify(receiptSee));
      setShow(true);
    }
  };

  const closeModal = () => setShow(false);

  const updateMenu = (target, menuN) => {
    let menuNew = menuN;
    if (target) {
      menuNew.push(target);
      const menuSet = new Set(menuNew);
      menuNew = Array.from(menuSet);
    }
    localStorage.setItem('hgp-menu', JSON.stringify(menuNew));
    PropertiesJson.menu = menuNew;
    setMenusList(menuNew);
  };

  const addFavorite = () => { console.log('add Favorite'); };

  const addMenu = (e) => {
    menuLocal = JSON.parse(localStorage.getItem('hgp-menu'));
    const target = e.target.classList[0];
    const menuNew = menuLocal ? menuLocal = Array.from(menuLocal) : [];
    count = target;
    updateMenu(target, menuNew);
  };

  const removeMenu = (e) => {
    menuLocal = JSON.parse(localStorage.getItem('hgp-menu'));
    const target = e.target.classList[0];
    const menuNew = menuLocal ? menuLocal = Array.from(menuLocal) : [];
    menuNew.splice(menuNew.indexOf(target), 1);
    updateMenu(null, menuNew);
  };

  const categories = [];

  categoriesData.forEach((cat) => {
    const category0 = cat[0];
    const activeClassName = `${category0} category-name active-category`;
    const categoryClassName = `${category0} category-name`;
    const catClassName = category0 === categoryStr ? activeClassName : categoryClassName;
    categories.push(
      <div key={cat[0]} className="list-item">
        <div
          className={catClassName}
          onClick={changeCategory}
          onKeyDown={changeCategory}
          role="button"
          tabIndex="0"
        >
          {category0}
        </div>
        {/* <div className='category-qty'>{cat[1]}</div> */}
      </div>,
    );
  });

  const recentsArr = [];
  recentsData.forEach((rec, i) => {
    const clasRN = `${i} recent`;
    const clasRM = `${i} recent-meal`;
    const clasRB = `${i} recent-buttons`;
    const clasFvr = `${rec.idMeal} recent-favorite material-icons`;
    const clasAdd = `${rec.idMeal} recent-add material-icons`;

    recentsArr.push(
      <div key={rec.idMeal} className={clasRN}>
        <div className={clasRB}>
          <div
            className={clasAdd}
            onClick={addMenu}
            onKeyDown={addMenu}
            role="button"
            tabIndex="0"
          >
            add_circle
          </div>
          <div
            className={clasFvr}
            onClick={addFavorite}
            onKeyDown={addFavorite}
            role="button"
            tabIndex="0"
          >
            favorite_border
          </div>
        </div>
        <div
          className={clasRM}
          onClick={openModal}
          onKeyDown={openModal}
          role="button"
          tabIndex="0"
        >
          {rec.strMeal}
        </div>
      </div>,
    );
  });

  const menusArr = [];
  if (menusData.length > 0) {
    menusData.forEach((rec, i) => {
      const clasRN = `${i} menue`;
      const clasRM = `${i} menue-meal`;
      const clasRB = `${i} menue-buttons`;
      const clasFvr = `${rec.idMeal} menue-favorite material-icons`;
      const clasAdd = `${rec.idMeal} menue-add material-icons`;

      menusArr.push(
        <div key={rec.idMeal} className={clasRN}>
          <div className={clasRB}>
            <div
              onClick={removeMenu}
              className={clasAdd}
              onKeyDown={removeMenu}
              role="button"
              tabIndex="0"
            >
              remove_circle
            </div>
            <div
              className={clasFvr}
              onClick={addFavorite}
              onKeyDown={addFavorite}
              role="button"
              tabIndex="0"
            >
              favorite_border
            </div>
          </div>
          <div
            className={clasRM}
            onClick={openModal}
            onKeyDown={openModal}
            role="button"
            tabIndex="0"
          >
            {rec.strMeal}
          </div>
        </div>,
      );
    });
  }

  const setCategory = (searchExp, categoryData) => {
    if (!searchExp) category = categoryData;
    else {
      category = categoryData.filter((rec) => rec.strMeal.includes(searchExp.toLowerCase()));
    }
    // console.log(searchExp, category.length)
    categoryBlock = category.map((rec, i) => {
      const clasNm = `${i} receipt`;
      const clasNM = `${i} receipt-meal`;
      const clasNS = `${i} receipt-see`;
      const clasNB = `${i} receipt-buttons`;
      const clasFvr = `${rec.idMeal} receipt-favorite material-icons`;
      const clasAdd = `${rec.idMeal} receipt-add material-icons`;

      const divStyle = {
        backgroundImage: `url(${rec.strMealThumb})`,
      };
      return (
        <div style={divStyle} key={rec.idMeal} className={clasNm}>
          <div className={clasNB}>
            <div
              className={clasAdd}
              onClick={addMenu}
              onKeyDown={addMenu}
              role="button"
              tabIndex="0"
            >
              add_circle
            </div>
            <div
              className={clasFvr}
              onClick={addFavorite}
              onKeyDown={addFavorite}
              role="button"
              tabIndex="0"
            >
              favorite_border
            </div>
          </div>
          <div
            className={clasNS}
            onClick={openModal}
            onKeyDown={openModal}
            role="button"
            tabIndex="0"
          >
            Open
          </div>
          <div className={clasNM}>{rec.strMeal}</div>
        </div>
      );
    });
  };

  setCategory(null, data);

  return (
    <div id="receipts" className="receipts">
      <div className="content">
        <div className="categories">
          <div className="categories-wrapper">
            <div className="categories-list">
              {categories}
            </div>
          </div>
        </div>
        <div id="category" className="category">
          <div className="category-header">
            {isLoading ? Spinner : categoryHeader }
            {/* <input onChange={(e) => setCategory(e.target.value, data)} /> */}
          </div>
          <div className="category-content">
            {isLoading ? Spinner : categoryBlock}
          </div>
        </div>
        <div className="menus">
          <div className="menus-header">{DictJson[language].menu}</div>
          <div className="menus-content">
            {menusArr.length > 0 ? menusArr : Empty }
          </div>
        </div>
        <div className="recents">
          <div className="recents-header">{DictJson[language].popular}</div>
          <div className="recents-content">
            {recentsArr}
          </div>
        </div>
        <Favorites />
      </div>
      <Modal closeModal={closeModal} show={show} />
    </div>
  );
}

export default Receipts;
