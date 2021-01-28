import React, { useState, useEffect } from "react";
import axios from 'axios';

import Modal from './ReceiptModal.js';
import ModeHeader from "../modeHeader";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");
let favLocal = JSON.parse(localStorage.getItem("hgp-favorite"));
let menuLocal = JSON.parse(localStorage.getItem("hgp-menu"));

function Receipts() {
  const language = PropertiesJson.language;
  let categoryStr = PropertiesJson.category;
  const [data, setData] = useState([]);
  const [categoriesData, setCategories] = useState([]);
  const [recentsData, setRecents] = useState([]);
  const [favoritesData, setFavorites] = useState([]);
  const [menusData, setMenus] = useState([]);
  const [menus, setMenusList] = useState(menuLocal);
  const [query, setQuery] = useState('Основные блюда');
  const [categoryHeader, setCategoryHeader] = useState(categoryStr);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ignore = false;
    const serverUrl = PropertiesJson.serverUrl;
    const favLocal = JSON.parse(localStorage.getItem("hgp-favorite"));
    const menuLocal = JSON.parse(localStorage.getItem("hgp-menu"));

    async function fetchData() {
      const categoryUrl = serverUrl + '/rec/cat/';
      const categoriesUrl = serverUrl + '/rec/cat/';
      const arrayUrl = serverUrl + '/rec/array';
      const categoryResult = await axios(categoryUrl + query);
      if (!ignore) setData(categoryResult.data);

      const categoriesResult = await axios(categoriesUrl);
      if (!ignore) setCategories(categoriesResult.data);

      const recentsArr = PropertiesJson.recents;
      const regExRec = recentsArr.join("|");
      const config = { el: "idMeal", reg: regExRec};

      const recentsResult = await axios.post(arrayUrl, config);
      if (!ignore) setRecents(recentsResult.data);

      const favoritesArr = favLocal ? favLocal : PropertiesJson.favorites;
      const regExFav = favoritesArr.join("|");
      const configFav = { el: "idMeal", reg: regExFav};

      const favoritesResult = await axios.post(arrayUrl, configFav);
      if (!ignore) setFavorites(favoritesResult.data);

      const menusArr = menus ? menus : false;
      if (menusArr) {
        const regExMenu = menusArr.join("|");
        const configMenu = { el: "idMeal", reg: regExMenu};

        const menusResult = await axios.post(arrayUrl, configMenu);
        if (!ignore) setMenus(menusResult.data);
      }
    }

    fetchData();

    return () => { ignore = true; }
  }, [query]);

  // console.log(data, categoriesData)

  const changeCategory = (e) => { 
    console.log(e.target.innerText); 
    setQuery(e.target.innerText);
    setCategoryHeader(e.target.innerText);
  };

  const openModal = (e) => {
    const target = e.target.classList[0]
    const from = e.target.classList[1].split('-')[0]
    // console.log(target, from)
    
    let receiptSee = {};
    switch (from) {
      case('recent'):
        receiptSee = recentsData[target];
        break;
      case('receipt'):
        receiptSee = data[target];
        break;
      case('favorite'):
        receiptSee = favoritesData[target];
        break;
      case('menue'):
        receiptSee = menusData[target];
        break;
      default:
    }
    localStorage.setItem("modalSee", JSON.stringify(receiptSee))
    setShow(true);
  }

  const closeModal = () => setShow(false);

  const addFavorite = (e) => {
    let favLocal = JSON.parse(localStorage.getItem("hgp-favorite"));
    const target = e.target.classList[0];
    let favNew = favLocal ? favLocal = Array.from(favLocal): [];
    favNew.push(target);
    const favSet = new Set(favNew);
    favNew = Array.from(favSet);
    localStorage.setItem("hgp-favorite", JSON.stringify(favNew))
    PropertiesJson.favorites = favNew;
  }

  const addMenu = (e) => {
    let menuLocal = JSON.parse(localStorage.getItem("hgp-menu"));
    const target = e.target.classList[0];
    console.log(e.target.classList)
    let menuNew = menuLocal ? menuLocal = Array.from(menuLocal): [];
    menuNew.push(target);
    const menuSet = new Set(menuNew);
    menuNew = Array.from(menuSet);
    localStorage.setItem("hgp-menu", JSON.stringify(menuNew))
    PropertiesJson.menu = menuNew;
    setMenusList(menuNew)
  }   

  let categories = [];

  categoriesData.forEach((cat, i) => {
       const category0 = cat[0]; 
        const activeClassName = category0 + " category-name active-category"
        const categoryClassName = category0 + " category-name"
        const catClassName = category0 === categoryStr ?  activeClassName : categoryClassName;
        categories.push(
          <div key={i} className='list-item'>
            <div onClick={changeCategory} className={catClassName}>{category0}</div>
            {/* <div className='category-qty'>{cat[1]}</div> */}
          </div>);
  })

  const recentsArr = [];
  recentsData.forEach((rec, i) => {
    const clasRN = i + " recent";
    const clasRM = i + " recent-meal";
    const clasRB = i + " recent-buttons";
    const clasFvr =  rec.idMeal + " recent-favorite material-icons";
    const clasAdd =  rec.idMeal + " recent-add material-icons";

    recentsArr.push(<div key={rec.idMeal} className={ clasRN } >
      <div className={clasRB}>
        <div onClick={addMenu} className={clasAdd}>add_circle</div>
        <div onClick={addFavorite} className={clasFvr}>favorite_border</div>
      </div>
      <div onClick={openModal} className={clasRM}>{rec.strMeal}</div>
    </div>)
  })

  const favoritesArr = [];
  favoritesData.forEach((rec, i) => {
    const clasRN = i + " favorite";
    const clasRM = i + " favorite-meal";
    const clasRB = i + " favorite-buttons";
    const clasFvr =  rec.idMeal + " favorite-favorite material-icons";
    const clasAdd =  rec.idMeal + " favorite-add material-icons";

    favoritesArr.push(<div key={rec.idMeal} className={ clasRN } >
      <div className={clasRB}>
        <div onClick={addMenu} className={clasAdd}>add_circle</div>
        <div onClick={addFavorite} className={clasFvr}>remove_circle</div>
      </div>
      <div onClick={openModal} className={clasRM}>{rec.strMeal}</div>
    </div>)
  })

  const menusArr = [];
  menusData.forEach((rec, i) => {
    const clasRN = i + " menue";
    const clasRM = i + " menue-meal";
    const clasRB = i + " menue-buttons";
    const clasFvr =  rec.idMeal + " menue-favorite material-icons";
    const clasAdd =  rec.idMeal + " menue-add material-icons";

    menusArr.push(<div key={rec.idMeal} className={ clasRN } >
      <div className={clasRB}>
        <div onClick={addMenu} className={clasAdd}>remove_circle</div>
        <div onClick={addFavorite} className={clasFvr}>favorite_border</div>
      </div>
      <div onClick={openModal} className={clasRM}>{rec.strMeal}</div>
    </div>)
  })

  return (
    <div id='receipts' className='receipts'>
      <ModeHeader mode={ 'receipts' }/>
      <div className="content" >
      <div className='categories'>
        <div className="categories-wrapper">
           <div className='categories-list'>
             {categories}
           </div>
        </div>
      </div>
      {/* <input value={query} onChange={e => setQuery(e.target.value)} /> */}
    <div id='category' className='category'>
    <div className="category-header">{ categoryHeader }</div>
    <div className='category-content'>
      {data.map((categor, i) => {
        const clasNm =  i + " receipt";
        const clasNM =  i + " receipt-meal";
        const clasNS =  i + " receipt-see";
        const clasNB =  i + " receipt-buttons";
        const clasFvr =  categor.idMeal + " receipt-favorite material-icons";
        const clasAdd =  categor.idMeal + " receipt-add material-icons";

        const divStyle = {
           backgroundImage: 'url(' + categor.strMealThumb + ')',
              };
        return (
          <div style={divStyle} key={categor.idMeal} className={ clasNm } >
            <div className={clasNB}>
            <div onClick={addMenu} className={clasAdd}>add_circle</div>
            <div onClick={addFavorite} className={clasFvr}>favorite_border</div>
            </div>
            <div onClick={openModal} className={clasNS}></div>
            <div className={clasNM}>{categor.strMeal}</div>
            </div>
        );
      })}
      </div>
      </div>
    <div className="menus">
    <div className="menus-header">{DictJson[language].menu}</div>
      <div className="menus-content">
      {menusArr}
      </div>
    </div>
    <div className="recents">
    <div className="recents-header">{DictJson[language].recent}</div>
      <div className="recents-content">
      {recentsArr}
      </div>
    </div>
    <div className="favorites">
    <div className="favorites-header">{DictJson[language].favorites}</div>
      <div className="favorites-content">
      {favoritesArr}
      </div>
    </div>
    </div>
    <Modal closeModal={closeModal} show={show}/>
    </div>
  );
}
export default Receipts;