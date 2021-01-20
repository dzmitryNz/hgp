import React from "react";
// import Button from "../Button";
import UpdateAll from "../UpdateAll";
// import withListLoading from './WithListLoading';
import CategoriesList from './CategoriesList';
import CategoryList from './CategoryList';
// import AreasList from './AreasList';
import RecentsList from './RecentsList';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

const handleClick = () => { UpdateAll("mode_receipts") };

function Receipts() {
  const language = PropertiesJson.language;
  const receiptsTitle = DictJson[language].receiptsTitle;

  return (
    <div className='receipts'>
      <header className="receipts-header">
        <h2 onClick={ handleClick }>{ receiptsTitle }</h2>
      </header>
      <div className='receipts-wrapper'>
      <div className="receipts-content">
        <CategoriesList />
        <CategoryList />
        <RecentsList />
        {/* <AreasList /> */}
      </div>
      {/* <div className="buttons">
        <Button buttonName = { next } target = "mode_ingredients" />
        </div> */}
    </div>
    </div>
  );
}
export default Receipts;