import React, { useEffect, useState } from 'react';
import axios from 'axios'
import ListCategory from './ListCategory';
import withListLoading from './WithListLoading';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

// const handleClick = () => { UpdateAll("mode_receipts") };

function CategoryReceipts() {
    const language = PropertiesJson.language;
    const recentsListTitle = DictJson[language].recent;

    const ListCategoryLoading = withListLoading(ListCategory);
    const [appState, setAppState] = useState({
    loading: false,
    recents: null,
  });

useEffect(() => {
    setAppState({ loading: true });
    const serverUrl = PropertiesJson.serverUrl;
    const categoryStr = PropertiesJson.category;
    const requestUrl = serverUrl + '/rec/array';
    const apiUrl = requestUrl;
    const config = { el: "strCategory", reg: categoryStr};
    axios.post(apiUrl, config).then((category) => {
    const Allrecents = category.data;

    setAppState({ loading: false, category: Allrecents });
    });
  }, [setAppState]);
  return (
    <div className='category'>
      <div className="category-header">{ recentsListTitle }</div>
        <ListCategoryLoading isLoading={appState.loading} category={appState.category} />
    </div>
  );
}
export default CategoryReceipts;