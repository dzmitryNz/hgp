import React from "react";
// import CategoriesList from './CategoriesList';
// import CategoryList from './CategoryList';
// import RecentsList from './RecentsList';
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

function FamilyModes() {
    const language = PropertiesJson.language;
    const familyModesProp = PropertiesJson.familyModes;
    let familyModesArr = [];
    familyModesProp.forEach((mode) => {
        const classNameMode = mode + " family-mode";
        familyModesArr.push(<div key={mode} className={classNameMode}>{DictJson[language][mode]}</div>)
    })

    let familyMode = familyModesProp[0];
    let complete = PropertiesJson[familyMode];
    console.log(complete)
    let maturesBlock = (<div className="matures">
        <div className="matures-minus material-icons">remove_circle</div> 
        <div className="matures-value">{complete.matures}</div>
        <div className="matures-plus material-icons">add_circle</div>
        </div>)
    let maturesDietBlock = (<div className="diet">
        <div className="diet-minus material-icons">remove_circle</div>
        <div className="diet-value">{complete.childrenDiet}</div>
        <div className="diet-plus material-icons">add_circle</div>
        </div>)
    let childrenBlock = (<div className="children">
        <div className="children-minus material-icons">remove_circle</div>
        <div className="children-value">{complete.children}</div>
        <div className="children-plus material-icons">add_circle</div>
        </div>)
    let childrenDietBlock = (<div className="diet">
        <div className="diet-minus material-icons">remove_circle</div>
        <div className="diet-value">{complete.childrenDiet}</div>
        <div className="diet-plus material-icons">add_circle</div>
        </div>)
    let petsBlock = (<div className="pets">
        <div className="pets-value">{complete.pets}</div>
        <div className="pets-minus material-icons">remove_circle</div>
        <div className="pets-plus material-icons">add_circle</div>
        </div>)
    

  return (
    <div className='content'>
        <div className='family-modes'>
            { familyModesArr }
        </div>
        <div className='mode-family'>
        <div className="matures">
            { maturesBlock }
            {maturesDietBlock}
        </div>
        <div className="children">
            {childrenBlock}
            {childrenDietBlock}
        </div>
        <div className="pets">
            {petsBlock}
        </div>
        </div>
    </div>
  );
}
export default FamilyModes;