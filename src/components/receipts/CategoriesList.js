import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListCategories from './ListCategories';
import withListLoading from './WithListLoading';
// const PropertiesJson = require("../json/properties.json");
// const DictJson = require("../json/dict.json");

// const handleClick = () => { UpdateAll("mode_receipts") };

function CategoriesList() {
  //  const language = PropertiesJson.language;
  //  const categoriesListTitle = DictJson[language].categories;

  const ListCategoriesLoading = withListLoading(ListCategories);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'http://192.168.1.66:3000/rec/cat/';
    axios.get(apiUrl).then((categories) => {
      const Allcategories = categories.data;
      setAppState({ loading: false, categories: Allcategories });
    });
  }, [setAppState]);
  return (
    <div className='categories'>
      {/* <div className="categories-header">{ categoriesListTitle }</div> */}
      <div className="categories-wrapper">
        <ListCategoriesLoading isLoading={appState.loading} categories={appState.categories} />
      </div>
    </div>
  );
}
export default CategoriesList;