import React from "react";
import CategoriesList from './CategoriesList';
import CategoryList from './CategoryList';
import RecentsList from './RecentsList';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

function Receipts() {
  const language = PropertiesJson.language;
  const receiptsTitle = DictJson[language].receiptsTitle;
  const next = DictJson[language].next;

  return (
    <div id='receipts' className='receipts'>
      <header className="receipts-header">
        <h2>{ receiptsTitle }</h2>
        <div className="next-button">{next}
        <div className="material-icons">arrow_forward_ios</div>
        </div>
      </header>
      <div className='receipts-wrapper'>
      <div className="receipts-content" >
        <CategoriesList />
        <CategoryList />
        <RecentsList />
      </div>
    </div>
    </div>
  );
}
export default Receipts;