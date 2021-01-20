import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListCategory from './ListCategory';
import withListLoading from './WithListLoading';
const PropertiesJson = require("../json/properties.json");
// const DictJson = require("../json/dict.json");

// const handleClick = () => { UpdateAll("mode_receipts") };

function CategoryReceipts() {
    // const langfcuage = PropertiesJson.language;
    const categoryStr = PropertiesJson.category;

    const ListCategoryLoading = withListLoading(ListCategory);
    const [appState, setAppState] = useState({
    loading: false,
    recents: null,
  });

useEffect(() => {
    setAppState({ loading: true });
    const categorySt = PropertiesJson.category;
    const serverUrl = PropertiesJson.serverUrl;
    const requestUrl = serverUrl + '/rec/array';
    const apiUrl = requestUrl;
    const config = { el: "strCategory", reg: categorySt };
    axios.post(apiUrl, config).then((category) => {
    
    const Allcategory = category.data;

    setAppState({ loading: false, category: Allcategory });
    });
  }, [setAppState]);
  return (
    <div id='category' className='category'>
      <div className="category-header">{ categoryStr }</div>
        <ListCategoryLoading isLoading={appState.loading} category={appState.category} />
    </div>
  );
}
export default CategoryReceipts;