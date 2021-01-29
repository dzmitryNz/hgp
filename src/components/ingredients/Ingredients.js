import ModeHeader from "../modeHeader";
import React, { useState, useEffect } from "react";
import axios from 'axios';
// import Modal from '../receipts/ReceiptModal';

const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");
const min = ' мин.'
const hours = ' час. '
let count = '';


function Ingredients() {
  let favLocal = JSON.parse(localStorage.getItem("hgp-favorite"));
  let menuLocal = JSON.parse(localStorage.getItem("hgp-menu"));
  if (!menuLocal) menuLocal = [];
  const language = PropertiesJson.language;
  const empty = (<div className="menue-meal empty">{DictJson[language].emptyHere}</div>);
  const [menusData, setMenus] = useState([]);
  const [menus, setMenusList] = useState(menuLocal);
  // const [favorite, setFarvoritesList] = useState(favLocal);
  // const [show, setShow] = useState(false);

  useEffect(() => {
    let ignore = false;
    const serverUrl = PropertiesJson.serverUrl;
    async function fetchMenu() {
      const arrayUrl = serverUrl + '/rec/array';
      const menusArr = menus ? menus : [];
      const regExMenu = menusArr.join("|");
      let menusResult = {};
      if (regExMenu.length !== 0) {
        let configMenu = { el: "idMeal", reg: regExMenu, cat: count};
        menusResult = await axios.post(arrayUrl, configMenu);
      }
      if (!ignore) setMenus(menusResult.data);
    }

    fetchMenu();

    return () => { ignore = true; }
  }, [menus]);

  const removeMenu = (e) => {
    setMenusList();
  }
  const addFavorite = (e) => {}
  const openModal = (e) => {}

  const menusArr = [];

  const menuUpdate = () => {
    if (menusData) {
    if (menusData.length > 0) {
      menusData.forEach((rec, i) => {
      let favAdd = (<div onClick={addFavorite} className={rec.idMeal + " menue-favorite material-icons"}>favorite_border</div>);
      const favRem = (<div onClick={addFavorite} className={rec.idMeal + " menue-favorite material-icons"}>favorite</div>); 
      favAdd = favLocal.indexOf(rec.idMeal) !== -1 ? favRem : favAdd;
      menusArr.push(<div key={rec.idMeal} className={ i + " menue" } >
        <div className={ i + " portions" }>
          <div className={"plus " + i + " menue-portions"}>+</div>
          <div className={i + " menue-portions"}>{rec.strForPersons}</div>
          <div className={"minus " + i + " menue-portions"}>-</div>
        </div>
        <div onClick={openModal} className={i + " menue-meal"}>{rec.strMeal}</div>
        <div className={i + " menue-buttons"}>
          <div onClick={removeMenu} className={rec.idMeal + " menue-add material-icons"}>remove_circle</div>
            {favAdd}
        </div>
      </div>)})
    }
    }
  }

  menuUpdate();

  const ingredientsArr = [];

    const ingredientsUpdate = () => {
    const fullArr = new Map();
   if (menusData) {
    if (menusData.length > 0) {
      let objArr = [];
      let mapArr = [];
      menusData.forEach((rec, i) => {
        const newObj = {
          [rec.idMeal]: rec.strTimer,
          [rec.strIngredient1]: rec.strMeasure1,
          [rec.strIngredient2]: rec.strMeasure2,
          [rec.strIngredient3]: rec.strMeasure3,
          [rec.strIngredient4]: rec.strMeasure4,
          [rec.strIngredient5]: rec.strMeasure5,
          [rec.strIngredient6]: rec.strMeasure6,
          [rec.strIngredient7]: rec.strMeasure7,
          [rec.strIngredient8]: rec.strMeasure8,
          [rec.strIngredient9]: rec.strMeasure9,
          [rec.strIngredient10]: rec.strMeasure10,
          [rec.strIngredient11]: rec.strMeasure11,
          [rec.strIngredient12]: rec.strMeasure12,
          [rec.strIngredient13]: rec.strMeasure13,
          [rec.strIngredient14]: rec.strMeasure14,
          [rec.strIngredient15]: rec.strMeasure15,
          [rec.strIngredient16]: rec.strMeasure16,
          [rec.strIngredient17]: rec.strMeasure17,
          [rec.strIngredient18]: rec.strMeasure18,
          [rec.strIngredient19]: rec.strMeasure19,
          [rec.strIngredient20]: rec.strMeasure20,
          [rec.strIngredient21]: rec.strMeasure21,
          [rec.strIngredient22]: rec.strMeasure22,
          [rec.strIngredient23]: rec.strMeasure23,
          [rec.strIngredient24]: rec.strMeasure24,
          [rec.strIngredient25]: rec.strMeasure25
          };
        let map = (Object.entries(newObj));
        objArr.push(newObj)
        mapArr.push(map)})
      let mins = 0;
      let hrs = 0;
    mapArr.forEach((map) => { 

      map.forEach((key, i) => {
        if (i === 0) {
          let time = fullArr.get('time') ? fullArr.get('time') : 0;
          const times = key[1].split(' ');
         
          if (times.length === 2 && times[1].match(/мин/)) mins = mins + Number(times[0]);
          if (times.length === 2 && times[1].match(/час/)) hrs = hrs + Number(times[0]);
          if (times.length === 4) {
                mins = mins + Number(times[2]);
                hrs = hrs + Number(times[0]);
            }
          if (mins > 60) {
            mins = mins % 60;
            hrs = hrs + 1;
            } 
          time = hrs > 0 ? String(hrs) + hours + String(mins) + min : String(mins) + min;
          fullArr.set('time', time)
          }
      else {

      // console.log(key[0], fullArrKey)
      const fullArrKey = fullArr.get(key[0]);
      const newValue = fullArrKey + ";" + key[1];
      if (fullArrKey) {
      fullArr.set(key[0], newValue);
      } else {
        fullArr.set(key[0], key[1]);
        }
      }
      })
      })
    }
   }
    
    fullArr.forEach((value, key) => {

        if (key === 'time') {
          ingredientsArr.push(
        <div key="time" className="time">
        <div className="time-icon material-icons"></div>
        <div className="time-value">{value}</div>
        </div>)
        } else {
        if (value) {
          value = value.split(';');
            let result = [];
          value.forEach((el) => {
            if (el === 'на кончике ножа' ) {
              result.push('2 г');
              return
              }
            if (el === 'по вкусу' || el === 'щепотка') {
              result.push('5 г');
              return
            }
            
            const spl = el.split(' ');
            if (spl.length === 3 && spl[2].match(/ложк|ложек/)) {
            // console.log(spl, el, spl[0])
              if (spl[1].match(/чайн/)) result.push(String(Number(spl[0]) * 5) + ' г');
              if (spl[1].match(/столов/)) result.push(String(Number(spl[0]) * 20) + ' г');
              return
            }

              result.push(el);
            
          })
          value = result;
        ingredientsArr.push(
          <div key={key + " ingredient"} className={key + " ingredient"}>
          <div className="ingredient-name">{key + ' - '}</div>
          <div className="ingredient-qty">{value}</div>
          </div>)
        }
        }
  })
    // console.log(fullArr)
  }


  ingredientsUpdate();

  return (  
    <div className = "ingredients">
      <ModeHeader mode={ 'ingredients' }/>  
    <div className="content" >
        <div className="ingredients-wrapper">
        {/* <div className="ingredients-header"></div> */}
          {ingredientsArr.length > 0 ? ingredientsArr : empty }
        </div>
      <div className="menus">
      <div className="menus-header">{DictJson[language].menu}</div>
      <div key="header-menue" className="header-menue">
     <div className="portions">
      <div className="plus menue-portions"></div>
       <div className="menue-portions-value">Порций</div>
       <div className="minus menue-portions"></div>
       </div>
       <div className="menue-meal">Название блюда</div>
       <div className="menue-buttons">
         <div className="menue-favorite material-icons"></div>
         <div className="menue-add material-icons"></div>
       </div>
       </div>
        <div className="menus-content">
        {menusArr.length > 0 ? menusArr : empty }
        </div>
      </div>
    </div>
    </div>
    )
}



export default Ingredients;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
