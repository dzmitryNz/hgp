/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import fetchData from '../shared/api/fetchData';
import { Empty, LoadingMessage, Spinner } from '../shared/constants';
import { serverUrl } from '../shared/json/properties.json';

let favLocal = JSON.parse(localStorage.getItem('hgp-favorite'));
if (!favLocal) favLocal = [];
const PropertiesJson = require('../shared/json/properties.json');
// const DictJson = require('../shared/json/dict.json');
// const { language } = PropertiesJson;

export default function Favorite() {
  const [isLoading, setLoading] = useState(false);
  const [favoritesData, setFavorites] = useState([]);
  const [favorite, setFarvoritesList] = useState(favLocal);

  useEffect(() => {
    let ignore = false;
    // const favLocal = JSON.parse(localStorage.getItem("hgp-favorite"));
    // console.log(regExFav, favoritesArr, regExFav === [] ? true : false)
    const arrayUrl = `${serverUrl}rec/array`;
    const favoritesArr = favorite;
    const regExFav = favoritesArr.join('|');
    console.log(regExFav, favoritesArr, regExFav.length);
    if (regExFav.length !== 0) {
      setLoading(true);
      const configFav = { url: arrayUrl, data: { el: 'idMeal', reg: regExFav } };
      if (ignore) fetchData(configFav).then((res) => { setFavorites(res.data); });
    }
    setLoading(false);
    return () => { ignore = true; };
  }, [favorite]);

  const handleKeyPress = (e) => {
    console.log('KeyPress:', e.target);
  };

  const addMenu = (e) => {
    console.log('addMenu:', e.target);
  };

  const openModal = (e) => {
    console.log('openModal:', e.target);
  };

  const updateFavorite = (target) => {
    const newFav = favorite;
    console.log(newFav, target);
    if (favorite.indexOf(target) === -1) newFav.push(target);
    localStorage.setItem('hgp-favorite', JSON.stringify(newFav));
    PropertiesJson.favorites = newFav;
    console.log(newFav);
    setFarvoritesList(newFav);
  };

  const removeFavorite = (e) => {
    favLocal = JSON.parse(localStorage.getItem('hgp-favorite'));
    const target = e.target.classList[0];
    let favNew = favLocal ? favLocal = Array.from(favLocal) : [];
    favNew.splice(favNew.indexOf(target), 1);
    if (favNew === []) favNew = ['null'];
    updateFavorite(favNew);
  };

  const favoritesArr = [];
  if (favoritesData.length > 0) {
    favoritesData.forEach((rec, i) => {
      if (rec === 'null') return;
      const clasRN = `${i} favorite`;
      const clasRM = `${i} favorite-meal`;
      const clasRB = `${i} favorite-buttons`;
      const clasFvr = `${rec.idMeal} favorite-favorite material-icons`;
      const clasAdd = `${rec.idMeal} favorite-add material-icons`;

      favoritesArr.push(
        <div key={rec.idMeal} className={clasRN}>
          <div className={clasRB}>
            <div
              role="button"
              tabIndex={0}
              className={clasAdd}
              type="image"
              onClick={addMenu}
              onKeyPress={handleKeyPress}
            >
              add_circle
            </div>
            <div
              role="button"
              tabIndex={0}
              className={clasFvr}
              onClick={removeFavorite}
              onKeyPress={handleKeyPress}
            >
              favorite
            </div>
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={openModal}
            onKeyPress={handleKeyPress}
            className={clasRM}
          >
            {rec.strMeal}
          </div>
        </div>,
      );
    });
  }

  return (
    <div className="favorites-content">
      {isLoading ?? LoadingMessage + Spinner }
      {favoritesArr.length > 0 ? favoritesArr : Empty }
    </div>
  );
}
