import React from "react";
// import CategoriesList from './CategoriesList';
// import CategoryList from './CategoryList';
// import RecentsList from './RecentsList';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

function FamilyModes() {
    const language = PropertiesJson.language;
    const familyModesProp = PropertiesJson.familyModes;
    const adultsTitle = DictJson[language].adults;
    const adultsDietTitle = DictJson[language].adultsDiet;
    const childrenTitle = DictJson[language].children;
    const childrenDietTitle = DictJson[language].childrenDiet;
    const petsTitle = DictJson[language].pets;
    let familyModesArr = [];
    familyModesProp.forEach((mode) => {
        const classNameMode = mode + " family-mode";
        familyModesArr.push(<div key={mode} className={classNameMode}>{DictJson[language][mode]}</div>)
    })

    let familyMode = familyModesProp[0];
    let complete = PropertiesJson[familyMode];
    console.log(complete)
    let adultsBlock = (
        <div className="adults">
         <div className="adults-header">{adultsTitle}</div> 
         <div className="adults-icon"></div>
         <div className="adults-switcher"> 
         <div className="adults-minus material-icons">remove_circle</div> 
         <div className="adults-value">{complete.adults}</div>
         <div className="adults-plus material-icons">add_circle</div>
        </div>
        <div className="adultsdiet-header">{adultsDietTitle}</div> 
         <div className="adultsdiet-switcher"> 
        <div className="adultsdiet-minus material-icons">remove_circle</div>
        <div className="adultsdiet-value">{complete.adultsDiet}</div>
        <div className="adultsdiet-plus material-icons">add_circle</div>
        </div>
        </div>)
    let childrenBlock = (<div className="children">
        <div className="children-header">{childrenTitle}</div> 
        <div className="children-icon"></div> 
        <div className="children-switcher"> 
        <div className="children-minus material-icons">remove_circle</div>
        <div className="children-value">{complete.children}</div>
        <div className="children-plus material-icons">add_circle</div>
        </div>
        <div className="childrendiet-header">{childrenDietTitle}</div> 
        <div className="childrendiet-switcher"> 
        <div className="childrendiet-minus material-icons">remove_circle</div>
        <div className="childrendiet-value">{complete.childrenDiet}</div>
        <div className="childrendiet-plus material-icons">add_circle</div>
        </div>
        </div>)
    let petsBlock = (<div className="pets">
        <div className="pets-header">{petsTitle}</div> 
        <div className="pets-icon"></div> 
        <div className="pets-switcher"> 
        <div className="pets-value">{complete.pets}</div>
        <div className="pets-minus material-icons">remove_circle</div>
        <div className="pets-plus material-icons">add_circle</div>
        </div>
        </div>)
    

  return (
    <div className='content'>
        <div className='family-modes'>
            { familyModesArr }
        </div>
        <div className='mode-family'>
            { adultsBlock }
            {childrenBlock}
            {petsBlock}
        </div>
    </div>
  );
}
export default FamilyModes;